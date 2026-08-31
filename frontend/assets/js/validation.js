(function () {
  function isEmail(value) {
    return /.+@.+\..+/.test(value);
  }

  function setStatus(form, message) {
    if (!form) return;
    const statusEl = qs('#form-status', form);
    if (statusEl) {
      setText(statusEl, message || '');
      statusEl.setAttribute('aria-live', 'polite');
    }
  }

  function validateAuthForm(form) {
    if (!form) return false;
    clearFormErrors(form);

    const nameField = qs('#full-name, #fullName, input[name="full_name"]', form);
    const emailField = qs('#email, input[name="email"]', form);
    const loginField = qs('#login-identifier, input[name="login_identifier"]', form);
    const passwordField = qs('#password, #login-password, input[name="password"]', form);
    const phoneField = qs('#phone, input[name="phone"]', form);
    const roleInputs = Array.from(form.querySelectorAll('input[name="role"]'));
    const confirmField = qs('#confirm-password, input[name="confirm_password"]', form);

    let isValid = true;

    if (nameField && !nameField.value.trim()) {
      showFieldError(nameField, 'Please enter your full name.');
      isValid = false;
    }

    if (emailField) {
      const emailValue = emailField.value.trim();
      if (!emailValue) {
        showFieldError(emailField, 'Email is required.');
        isValid = false;
      } else if (!isEmail(emailValue)) {
        showFieldError(emailField, 'Please enter a valid email address.');
        isValid = false;
      }
    }

    if (loginField) {
      const loginValue = loginField.value.trim();
      if (!loginValue) {
        showFieldError(loginField, 'Email or phone is required.');
        isValid = false;
      } else if (loginValue.includes('@') && !isEmail(loginValue)) {
        showFieldError(loginField, 'Please enter a valid email address.');
        isValid = false;
      }
    }

    if (passwordField) {
      const passwordValue = passwordField.value;
      if (!passwordValue) {
        showFieldError(passwordField, 'Password is required.');
        isValid = false;
      } else if (passwordValue.length < 6) {
        showFieldError(passwordField, 'Password must be at least 6 characters.');
        isValid = false;
      }
    }

    if (phoneField && !phoneField.value.trim()) {
      showFieldError(phoneField, 'Phone number is required.');
      isValid = false;
    }

    if (roleInputs.length && !roleInputs.some((input) => input.checked)) {
      const roleError = qs('#role-error', form);
      if (roleError) {
        roleError.textContent = 'Please select a role.';
        roleError.setAttribute('aria-live', 'polite');
      }
      isValid = false;
    }

    if (confirmField && !confirmField.value.trim()) {
      showFieldError(confirmField, 'Please confirm your password.');
      isValid = false;
    }

    if (confirmField && passwordField && confirmField.value && passwordField.value && confirmField.value !== passwordField.value) {
      showFieldError(confirmField, 'Passwords do not match.');
      isValid = false;
    }

    setStatus(form, isValid ? 'MVP: form OK — backend coming later' : '');

    if (!isValid) {
      const firstError = form.querySelector('[aria-invalid="true"]');
      if (firstError) firstError.focus();
    }

    return isValid;
  }

  function validateSearchForm(form) {
    if (!form) return false;
    clearFormErrors(form);

    const subjectField = qs('#subject', form);
    const locationField = qs('#location', form);

    let isValid = true;

    if (subjectField && (!subjectField.value || !subjectField.value.trim() || subjectField.value === 'Maths, English, Biology...')) {
      showFieldError(subjectField, 'Please enter a subject to search.');
      isValid = false;
    }

    if (locationField && (!locationField.value || !locationField.value.trim())) {
      showFieldError(locationField, 'Please select a location.');
      isValid = false;
    }

    setStatus(form, isValid ? 'Search ready (MVP UI only)' : '');

    if (!isValid) {
      const firstError = form.querySelector('[aria-invalid="true"]');
      if (firstError) firstError.focus();
    }

    return isValid;
  }

  function validateRequestForm(form) {
    if (!form) return false;
    clearFormErrors(form);

    const messageField = qs('#message', form);
    const dateField = qs('#preferred-day, #date', form);

    let isValid = true;

    if (messageField && !messageField.value.trim()) {
      showFieldError(messageField, 'Please enter a message to the tutor.');
      isValid = false;
    }

    if (dateField && (!dateField.value || !dateField.value.trim())) {
      showFieldError(dateField, 'Please choose a day or date.');
      isValid = false;
    }

    setStatus(form, isValid ? 'Request sent (MVP UI only)' : '');

    if (!isValid) {
      const firstError = form.querySelector('[aria-invalid="true"]');
      if (firstError) firstError.focus();
    }

    return isValid;
  }

  function initValidation() {
    const forms = document.querySelectorAll('form[data-validation-form]');

    forms.forEach((form) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (form.id === 'search-form' || form.querySelector('#subject') || form.querySelector('#location')) {
          validateSearchForm(form);
          return;
        }

        if (form.querySelector('#message') || form.querySelector('#preferred-day')) {
          validateRequestForm(form);
          return;
        }

        validateAuthForm(form);
      });
    });
  }

  window.TutorConnect = window.TutorConnect || {};
  window.TutorConnect.validation = { init: initValidation };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initValidation);
  } else {
    initValidation();
  }
})();
