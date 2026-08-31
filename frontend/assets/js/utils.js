(function () {
  function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }

  function showFieldError(inputEl, message) {
    if (!inputEl) return;

    inputEl.setAttribute('aria-invalid', 'true');
    inputEl.classList.add('input-error');

    if (!inputEl.id) return;

    const id = `${inputEl.id}-error`;
    let errorEl = document.getElementById(id);

    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'field-error';
      errorEl.id = id;
      inputEl.insertAdjacentElement('afterend', errorEl);
    }

    errorEl.textContent = message || '';
  }

  function clearFieldError(inputEl) {
    if (!inputEl) return;

    inputEl.setAttribute('aria-invalid', 'false');
    inputEl.classList.remove('input-error');

    if (!inputEl.id) return;

    const errorEl = document.getElementById(`${inputEl.id}-error`);
    if (errorEl) errorEl.textContent = '';
  }

  function clearFormErrors(formEl) {
    if (!formEl) return;

    formEl.querySelectorAll('input, textarea, select').forEach((field) => {
      clearFieldError(field);
    });
  }

  function setText(selector, message) {
    const el = typeof selector === 'string' ? qs(selector) : selector;
    if (!el) return;
    el.textContent = message || '';
  }

  window.qs = qs;
  window.showFieldError = showFieldError;
  window.clearFieldError = clearFieldError;
  window.clearFormErrors = clearFormErrors;
  window.setText = setText;

  window.TutorConnect = window.TutorConnect || {};
  window.TutorConnect.utils = {
    qs,
    showFieldError,
    clearFieldError,
    clearFormErrors,
    setText
  };
})();
