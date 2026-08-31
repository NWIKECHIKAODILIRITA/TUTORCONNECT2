# TutorConnect JavaScript Architecture

This folder contains the minimal front-end JavaScript layer for the TutorConnect MVP.

## Files

- `utils.js` – shared helpers for DOM-ready checks, form access, and simple reusable utilities.
- `validation.js` – client-side validation for sign-up, login, and request forms.
- `search.js` – search/filter behavior for tutor results pages.
- `admin.js` – admin actions and review workflows.

## Page-to-file mapping

- `frontend/pages/sign-up.html` → `utils.js`, `validation.js`
- `frontend/pages/log-in.html` → `utils.js`, `validation.js`
- `frontend/pages/search-tutors.html` → `utils.js`, `search.js`
- `frontend/pages/request-session.html` → `utils.js`, `validation.js`
- `frontend/pages/tutor/my-profile.html` → `utils.js`, `validation.js`
- `frontend/pages/admin/approve-tutors.html` → `utils.js`, `admin.js`
- `frontend/pages/admin/booking-requests.html` → `utils.js`, `admin.js`
- `frontend/pages/admin/users.html` → `utils.js`, `admin.js`

## Notes

- No framework is used.
- This is intentionally small and frontend-only for the MVP.
- Future backend and data wiring can plug into these file boundaries without changing page structure.
