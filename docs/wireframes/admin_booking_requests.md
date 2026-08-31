# Admin Booking Requests

## Purpose
Admin reviews all parent booking requests and approves or rejects them.

## Wireframe
```text
+----------------------------------+
| Admin Panel                      |
+----------------------------------+
| Booking Requests                 |
+----------------------------------+
| Request 1                       |
| Parent: Grace O.                |
| Tutor: Ada Adebayo              |
| Subject: Maths                  |
| Status: Pending                 |
| [Approve]                       |
| goes to: admin_booking_requests |
| [Reject]                        |
| goes to: admin_booking_requests |
|                                  |
| Request 2                       |
| Parent: Musa B.                 |
| Tutor: Daniel Okafor            |
| Subject: Physics                |
| Status: Pending                 |
| [Approve]                       |
| goes to: admin_booking_requests |
| [Reject]                        |
| goes to: admin_booking_requests |
+----------------------------------+
| [Users]                         |
| goes to: admin_users            |
| [Tutor Reviews]                 |
| goes to: admin_approve_tutors   |
+----------------------------------+
```

## Notes
- Admin approval or rejection controls the booking workflow.
- One primary CTA: Approve or Reject per request.
