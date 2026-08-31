# MVP Navigation Map

## 1) MVP Screens

### Parent screens
- Landing Page
- Sign Up / Login
- Parent Dashboard
- Tutor Search
- Tutor Profile Details
- Session Request Form
- Booking Request Status

### Tutor screens
- Landing Page
- Sign Up / Login
- Tutor Dashboard
- Tutor Profile Setup
- View Booking Requests
- Booking Request Details
- Tutor Availability / Schedule

### Admin screens
- Admin Login
- Admin Dashboard
- User Management
- Tutor Review Queue
- Booking Request Review
- Approved / Rejected List

## 2) Primary Navigation Flows

### Parent primary path
Landing Page
  -> Sign Up / Login
  -> Parent Dashboard
  -> Tutor Search
  -> Tutor Profile Details
  -> Session Request Form
  -> Booking Request Status

### Tutor primary path
Landing Page
  -> Sign Up / Login
  -> Tutor Dashboard
  -> Tutor Profile Setup
  -> Tutor Availability / Schedule
  -> View Booking Requests
  -> Booking Request Details

### Admin primary path
Admin Login
  -> Admin Dashboard
  -> Tutor Review Queue
  -> User Management
  -> Booking Request Review
  -> Approved / Rejected List

## 3) Text Diagram of Flows

### Parent flow diagram
```text
[Landing Page]
      |
      v
[Sign Up / Login]
      |
      v
[Parent Dashboard]
      |
      +--> [Tutor Search]
                |
                v
          [Tutor Profile Details]
                |
                v
          [Session Request Form]
                |
                v
        [Booking Request Status]
```

### Tutor flow diagram
```text
[Landing Page]
      |
      v
[Sign Up / Login]
      |
      v
[Tutor Dashboard]
      |
      +--> [Tutor Profile Setup]
      |
      +--> [Tutor Availability / Schedule]
      |
      +--> [View Booking Requests]
                |
                v
          [Booking Request Details]
```

### Admin flow diagram
```text
[Admin Login]
      |
      v
[Admin Dashboard]
      |
      +--> [Tutor Review Queue]
      |
      +--> [User Management]
      |
      +--> [Booking Request Review]
                |
                v
       [Approved / Rejected List]
```

## 4) Story to Screen Mapping

| User Story | Role | Screen(s) |
|---|---|---|
| As a parent, I want to search for tutors by subject and location, so that I can find a tutor near me. | Parent | Tutor Search |
| As a parent, I want to filter tutors by time and budget, so that I can choose a tutor that fits my schedule and price. | Parent | Tutor Search |
| As a parent, I want to view tutor profiles, so that I can check their subject, experience, and availability. | Parent | Tutor Profile Details |
| As a parent, I want to send a session request, so that I can ask a tutor for help. | Parent | Session Request Form |
| As a parent, I want to see whether my request is approved or rejected, so that I know the next step. | Parent | Booking Request Status |
| As a tutor, I want to create my profile, so that parents can learn about my subjects and experience. | Tutor | Tutor Profile Setup |
| As a tutor, I want to add my availability, so that parents know when I can teach. | Tutor | Tutor Availability / Schedule |
| As a tutor, I want to view booking requests, so that I can know which students want my help. | Tutor | View Booking Requests |
| As a tutor, I want to accept or reject requests, so that I can manage my teaching schedule. | Tutor | Booking Request Details |
| As a tutor, I want to update my profile details, so that I can keep my information accurate. | Tutor | Tutor Profile Setup |
| As an admin, I want to view all users, so that I can manage platform access. | Admin | User Management |
| As an admin, I want to review tutor profiles, so that I can approve only trusted tutors. | Admin | Tutor Review Queue |
| As an admin, I want to approve or reject booking requests, so that I can maintain order and quality on the platform. | Admin | Booking Request Review |
| As an admin, I want to see all booking activity, so that I can monitor platform use. | Admin | Booking Request Review |
| As an admin, I want to manage user and request records, so that the platform stays organized and reliable. | Admin | User Management, Approved / Rejected List |

## 5) MVP Scope Reminder
This navigation map includes only the minimum MVP screens needed for:
- tutor profiles
- search and filters
- session request
- admin approve/reject
- view users and booking requests

It does not include payments, chat, ratings, video, or AI matching.
