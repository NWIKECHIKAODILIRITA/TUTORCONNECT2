(function () {
  const tutors = [
    {
      name: 'Ada Adebayo',
      subject: 'Mathematics',
      location: 'Lagos',
      price: 5000,
      experienceYears: 4,
      availability: 'Mon 6pm'
    },
    {
      name: 'Daniel Okafor',
      subject: 'Physics',
      location: 'Abuja',
      price: 4000,
      experienceYears: 3,
      availability: 'Tue 4pm'
    },
    {
      name: 'Grace Eze',
      subject: 'English',
      location: 'Lagos',
      price: 3500,
      experienceYears: 5,
      availability: 'Wed 5pm'
    },
    {
      name: 'Musa Bello',
      subject: 'Biology',
      location: 'Abuja',
      price: 4500,
      experienceYears: 2,
      availability: 'Thu 7pm'
    }
  ];

  function renderTutors(list) {
    const resultsList = document.getElementById('results-list');
    if (!resultsList) return;

    const items = list.length ? list : tutors;
    resultsList.innerHTML = items.map((tutor) => `
      <article class="card">
        <h3>${tutor.name}</h3>
        <p>${tutor.subject} | ${tutor.experienceYears} yrs | ${tutor.location}</p>
        <p>₦${tutor.price.toLocaleString()}/hr | Available: ${tutor.availability}</p>
        <a href="tutor-profile.html" class="btn">View profile</a>
      </article>
    `).join('');
  }

  function filterTutors() {
    const form = document.querySelector('form[data-search-form]');
    if (!form) return tutors;

    const subjectField = document.getElementById('subject');
    const locationField = document.getElementById('location');
    const timeField = document.getElementById('time');
    const experienceField = document.getElementById('experience');

    const subjectSearch = (subjectField && subjectField.value || '').trim().toLowerCase();
    const locationSearch = (locationField && locationField.value || '').trim().toLowerCase();
    const timeSearch = (timeField && timeField.value || '').trim().toLowerCase();
    const experienceSearch = (experienceField && experienceField.value || '').trim().toLowerCase();

    return tutors.filter((tutor) => {
      const matchesSubject = !subjectSearch || tutor.subject.toLowerCase().includes(subjectSearch);
      const matchesLocation = !locationSearch || locationSearch === 'any' || tutor.location.toLowerCase() === locationSearch;
      const matchesExperience = !experienceSearch || experienceSearch === 'beginner' ? tutor.experienceYears <= 3 : tutor.experienceYears > 3;
      const matchesTime = !timeSearch || timeSearch === 'morning' || timeSearch === 'evening';

      return matchesSubject && matchesLocation && matchesExperience && matchesTime;
    });
  }

  function initSearchDemo() {
    const resultsList = document.getElementById('results-list');
    if (resultsList) {
      renderTutors(tutors);
    }

    const form = document.querySelector('form[data-search-form]');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      renderTutors(filterTutors());
    });

    const selects = form.querySelectorAll('select');
    selects.forEach((select) => {
      select.addEventListener('change', () => {
        renderTutors(filterTutors());
      });
    });

    const subjectField = document.getElementById('subject');
    if (subjectField) {
      subjectField.addEventListener('input', () => {
        renderTutors(filterTutors());
      });
    }
  }

  window.TutorConnect = window.TutorConnect || {};
  window.TutorConnect.search = {
    tutors,
    renderTutors,
    filterTutors,
    init: initSearchDemo
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearchDemo);
  } else {
    initSearchDemo();
  }
})();
