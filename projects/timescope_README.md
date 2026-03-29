# TimeScope

TimeScope is a real-time **countdown dashboard** designed to help users visualize how much time remains until important events.

Instead of simply displaying calendar dates, TimeScope converts upcoming events into **live countdown cards** that update continuously. This makes deadlines and milestones easier to understand and prioritize.

The system transforms static dates into a **dynamic time awareness tool**.

**Live Website:** [https://timescope-jagratahuja.vercel.app/](https://timescope-jagratahuja.vercel.app/)

---

## Core Concept

Most calendars display **dates**, but they do not clearly communicate how much time remains until an event. TimeScope solves this by presenting events in a highly granular format:

* **3 Days**
* **14 Hours**
* **22 Minutes**
* **10 Seconds Remaining**

By continuously updating countdown timers, the application helps users stay aware of upcoming deadlines and milestones.

---

## Features

TimeScope Version 1 includes:

* **Event Creation:** Easily add new milestones.
* **Live Countdown Timers:** Updates every single second.
* **Event Cards Dashboard:** A centralized view of all trackers.
* **Time Progress Visualization:** See time as a percentage.
* **Urgency Color Indicators:** Visual cues based on remaining time.
* **Persistent Storage:** Data is saved using browser `localStorage`.
* **Event Management:** Quick deletion of completed tasks.

---

## Dashboard Overview

The main interface displays events as **countdown cards**. Events are automatically sorted by **closest deadline first** to ensure the most urgent tasks are always at the top.

### Example Card:
> **Chemistry Exam** > 3 Days 12 Hours Remaining  
> `[████████░░░░░░░░░░░░] 40%`

---

## Time Progress Visualization

Each event includes a **progress bar** showing how much time has passed since the event was created. The system calculates:
1.  Total time until the deadline.
2.  Time already passed.
3.  Time remaining.

This turns abstract dates into a **visual progress indicator**, making deadlines easier to digest at a glance.

---

## Urgency Indicators

TimeScope visually highlights approaching deadlines using color-coded urgency levels:

| Time Remaining | Indicator Color |
| :--- | :--- |
| **More than 7 days** | Blue |
| **3–7 days** | Orange |
| **Less than 24 hours** | Red |

---

## Technology Stack

TimeScope is built using modern web technologies:

* **Frontend:** React / Next.js
* **Storage:** Browser `localStorage`
* **Deployment:** Vercel

---

## Future Development

Planned improvements for future versions include:
* **Event Categories:** Grouping by school, personal, or work.
* **User Authentication:** Secure accounts for cross-device access.
* **Cloud Synchronization:** Syncing data across all platforms.
* **Event Editing:** Modify existing countdowns without deleting.
* **Mobile-Optimized Layouts:** Enhanced responsiveness for smaller screens.

---

## License

This project is licensed under the **MIT License**.

---

## Author

**Jagrat Ahuja**
