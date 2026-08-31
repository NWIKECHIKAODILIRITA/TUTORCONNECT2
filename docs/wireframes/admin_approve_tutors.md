# Admin Approve Tutors

## Purpose
Admin reviews and approves or rejects tutor profile submissions.

## Wireframe
```text
+----------------------------------+
| Admin Panel                      |
+----------------------------------+
| Tutor Review Queue               |
+----------------------------------+
| 1. Ada Adebayo                  |
| Subjects: Maths, Physics        |
| Experience: 4 years             |
| Location: Lagos                 |
| [View profile]                  |
| [Approve]                       |
| goes to: admin_approve_tutors   |
| [Reject]                        |
| goes to: admin_approve_tutors   |
|                                  |
| 2. Daniel Okafor                |
| Subjects: Chemistry             |
| Experience: 2 years             |
| Location: Abuja                 |
| [View profile]                  |
| [Approve]                       |
| goes to: admin_approve_tutors   |
| [Reject]                        |
| goes to: admin_approve_tutors   |
+----------------------------------+
| [Users]                         |
| goes to: admin_users            |
| [Booking Requests]              |
| goes to: admin_booking_requests |
+----------------------------------+
```

## Notes
- Admin decisions are made directly from queue.
- One primary CTA: Approve or Reject per tutor.
