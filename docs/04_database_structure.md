# TutorConnect Nigeria MVP Database Structure

This is a simple PostgreSQL design for the MVP. It focuses on the main tables needed for users, tutor profiles, and booking requests. This is a design document only and not a live database setup.

## 1) users

### Purpose
Stores all users in the system, including parents, tutors, and admins.

### Key fields
- id
- full_name
- email
- phone_number
- password_hash
- role
  - parent
  - tutor
  - admin
- created_at
- updated_at
- is_active

### Notes
Each user has one role. This table is the main identity table for the system and connects to other tables such as tutor profiles and session requests.

## 2) tutor_profiles

### Purpose
Stores public information about each tutor and their teaching details.

### Key fields
- id
- user_id
- subjects
  - example: Maths, Physics, English
- location
- experience_years
- availability
  - example: Mon-Fri, 4pm-8pm
- hourly_rate
- bio
- approval_status
  - pending
  - approved
  - rejected
- created_at
- updated_at

### Notes
A tutor profile belongs to one user. The user_id links each profile to the same person in the users table, and approval_status is needed for admin review before the tutor can be listed publicly.

## 3) session_requests

### Purpose
Records booking requests made by parents to tutors.

### Key fields
- id
- parent_id
- tutor_id
- subject
- preferred_day
- preferred_time
- location_type
  - online
  - home
  - school
- budget
- student_level
- message
- status
  - pending
  - approved
  - rejected
- created_at
- updated_at

### Notes
A session request is created by one parent and sent to one tutor. The parent_id and tutor_id both connect to the users table, and status tracks whether the request is still waiting, accepted, or rejected.

## Relationship summary
- users to tutor_profiles: one user can have one tutor profile; one tutor profile belongs to one user
- users to session_requests: one parent can send many requests; one tutor can receive many requests
- tutor_profiles to session_requests: one tutor profile can match many requests for that tutor

## MVP scope reminder
This structure includes only the core data needed for:
- user roles
- tutor profile details
- search and filtering support
- session request workflow
- admin approval of tutors and requests

It does not include payments, chat, or ratings tables.
