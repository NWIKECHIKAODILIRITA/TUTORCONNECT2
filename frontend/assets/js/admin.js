(function () {
  function setRowStatus(row, status) {
    const statusCell = row.querySelector('[data-status-cell]');
    if (statusCell) {
      statusCell.textContent = status;
    }

    const actionButtons = row.querySelectorAll('a[data-action]');
    actionButtons.forEach((button) => {
      button.setAttribute('aria-disabled', 'true');
      button.tabIndex = -1;
      button.style.pointerEvents = 'none';
      button.style.opacity = '0.6';
    });
  }

  function initAdminApprovePage() {
    const table = document.querySelector('.data-table');
    if (!table) return;

    const statusRegion = document.getElementById('admin-status');

    table.addEventListener('click', (event) => {
      const button = event.target.closest('a[data-action]');
      if (!button) return;

      const row = button.closest('tr');
      if (!row) return;

      const action = button.dataset.action;
      if (action === 'approve') {
        event.preventDefault();
        setRowStatus(row, 'Approved');
        if (statusRegion) {
          statusRegion.textContent = 'Tutor approved (UI only).';
        }
      }

      if (action === 'reject') {
        event.preventDefault();
        setRowStatus(row, 'Rejected');
        if (statusRegion) {
          statusRegion.textContent = 'Tutor rejected (UI only).';
        }
      }
    });
  }

  window.TutorConnect = window.TutorConnect || {};
  window.TutorConnect.admin = { init: initAdminApprovePage };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminApprovePage);
  } else {
    initAdminApprovePage();
  }
})();
