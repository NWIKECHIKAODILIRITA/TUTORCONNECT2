# Admin Users

## Purpose
Admin sees registered users and manages access.

## Wireframe
```text
+----------------------------------+
| Admin Panel                      |
+----------------------------------+
| Users                            |
+----------------------------------+
| Parent: Grace O.                |
| Type: Parent                    |
| Status: Active                  |
|                                  |
| Parent: Musa B.                 |
| Type: Parent                    |
| Status: Active                  |
|                                  |
| Tutor: Ada Adebayo              |
| Type: Tutor                     |
| Status: Approved                |
|                                  |
| Tutor: Daniel Okafor            |
| Type: Tutor                     |
| Status: Pending                 |
+----------------------------------+
| [Tutor Reviews]                 |
| goes to: admin_approve_tutors   |
| [Booking Requests]              |
| goes to: admin_booking_requests |
+----------------------------------+
```

## Notes
- Admin manages user list and membership status.
- One primary CTA is to review or monitor status from this list.
