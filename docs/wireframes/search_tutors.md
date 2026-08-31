# Search Tutors

## Purpose
Parent finds tutors using filters and subject search.

## Wireframe
```text
+----------------------------------+
| Menu / Profile                   |
+----------------------------------+
| Find a tutor                     |
| Search subject                   |
| [Maths, English, Biology...]     |
+----------------------------------+
| Filters                          |
| Location: [Any / Lagos / Abuja] |
| Time:     [Morning / Evening]   |
| Budget:   [Any / 2k-5k / 5k+]   |
| Experience: [Beginner / Expert] |
+----------------------------------+
| [Search]                         |
| goes to: search_tutors          |
+----------------------------------+
| Result list                     |
| 1. Ada Adebayo                  |
| Maths | 4 yrs | Lagos           |
| 5k/hr | Available: Mon 6pm    |
| [View profile]                  |
| goes to: tutor_profile          |
| 2. Daniel Okafor                |
| Physics | 3 yrs | Abuja         |
| 4k/hr | Available: Tue 4pm    |
| [View profile]                  |
| goes to: tutor_profile          |
+----------------------------------+
| My Requests                     |
| goes to: my_session_requests    |
+----------------------------------+
```

## Notes
- Parent primary path starts here.
- One primary CTA: Search.
- Result cards each lead to the public tutor profile.
