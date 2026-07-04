# Disaster Relief AI - Detailed Project Documentation & System Flows

This document provides a comprehensive overview of the architecture, subsystems, and execution flows for **Disaster Relief AI**. It details how the application maintains an offline-first state, utilizes device sensors, manages localized data persistence, and builds emergency communications.

---

## 🏗️ Architectural Overview

Disaster Relief AI is structured as a single-page progressive web application (PWA) with a decoupled caching layer (service worker) and UI controller logic. Since it is designed to run in disaster-stricken areas with zero network availability, all core assets—including HTML skeleton, CSS styling, Javascript behavior, and Leaflet map libraries—are cached locally upon the app's first visit.

```
                    ┌────────────────────────┐
                    │     User Browser       │
                    └───────────┬────────────┘
                                │
                  Intercepts all HTTP GETs
                                │
                                ▼
                    ┌────────────────────────┐
                    │    Service Worker      │
                    └───────────┬────────────┘
                                │
             ┌──────────────────┴──────────────────┐
      Cache Match?                          Cache Miss?
             │                                     │
             ▼                                     ▼
┌────────────────────────┐            ┌────────────────────────┐
│     Cache Storage      │            │   External Network     │
│ (v1 Static Assets &    │            │ (Loads live tiles &    │
│  Leaflet Libraries)    │            │  triage updates)       │
└────────────────────────┘            └────────────────────────┘
```

---

## ⚙️ Core System Flow Diagrams

Here are the detailed flowcharts describing the logic behind the app's primary features:

### 1. Service Worker Caching & Request Interception (PWA Offline First)
This flowchart explains how the service worker intercepts requests, checks the cache first, updates resources dynamically, and serves the emergency app shell even when network queries fail completely.

```mermaid
graph TD
    A[Browser initiates Asset/Fetch Request] --> B{Service Worker active?}
    B -- No --> C[Standard Network Request]
    B -- Yes --> D{Is request in Cache ASSETS?}
    D -- Yes --> E[Return Cached Asset immediately]
    D -- No --> F{Network Connection Available?}
    F -- Yes --> G[Fetch from Internet]
    G --> H{Is response Status 200?}
    H -- Yes --> I[Clone & Put in Cache]
    H -- No --> J[Return Response]
    I --> J
    F -- No --> K{Request is for HTML?}
    K -- Yes --> L[Serve Cached index.html as fallback]
    K -- No --> M[Fail Request / Return offline state]
```

---

### 2. Compass & Sensor Orientation Flow
The compass navigation operates without cell service by accessing the device's internal magnetometer and accelerometer sensors. This flow details the runtime sensor binding, platform checking (iOS vs Android), and permission model.

```mermaid
graph TD
    A[User switches to Beacon/Compass Tab] --> B{DeviceOrientationEvent supported?}
    B -- No --> C[Show Sensor Unavailable Message]
    B -- Yes --> D{iOS device requiring permission?}
    D -- Yes --> E[Show 'Grant Sensor Permission' Button]
    E --> F[User Clicks Button]
    F --> G[Request DeviceOrientationEvent.requestPermission]
    G -- Approved --> H[Bind listener to deviceorientation event]
    G -- Denied --> I[Disable Compass UI & show manual warning]
    D -- No --> H
    H --> J[Read event.alpha or webkitCompassHeading]
    J --> K[Rotate Compass Needle on Screen using CSS transform]
    K --> L[Update Heading Angle UI Text]
```

---

### 3. Survival Checklist Persistence Flow
Checklists allow users to keep track of evacuation preparations. This flow explains how checkbox updates are tracked, computed, and persisted to client-side storage so that progress is retained across device reboots or application restarts.

```mermaid
graph TD
    A[User Checks/Unchecks List Item] --> B[Retrieve item ID & checked status]
    B --> C[Fetch current Checklist State from localStorage]
    C --> D[Modify Checked State array for active checklist type]
    D --> E[Save updated array back to localStorage]
    E --> F[Recalculate Progress percentage]
    F --> G[Animate Progress Bar Fill]
    G --> H[Update Checklist Progress text label]
```

---

### 4. SOS Message Builder & Coordinate Flow
The SOS message builder creates an emergency template containing the user's health status, coordinates, and custom requirements. This flow demonstrates coordinates retrieval and dispatch formatting.

```mermaid
graph TD
    A[User clicks 'Generate SOS Message' or 'GPS' button] --> B[Invoke navigator.geolocation.getCurrentPosition]
    B -- Success --> C[Retrieve Latitude & Longitude]
    B -- Error / Timeout --> D[Set Coordinates to 'Unknown/GPS disabled']
    C --> E[Reverse Geocode coordinates locally if cached city matches]
    D --> E
    E --> F[Fetch current My Safety Status selection safe/injured/stranded]
    F --> G[Extract custom situation text input]
    G --> H[Compile template: STATUS + LOCATION + NEEDS]
    H --> I[Populate Preview Text Box]
    I --> J{User triggers dispatch}
    J -- Copy Message --> K[Write text to clipboard]
    J -- Send SMS --> L[Open tel/sms URI with pre-filled body]
    J -- Send WhatsApp --> M[Open api.whatsapp.com/send link with phone & text parameters]
```

---

### 5. Internationalization / Multi-lingual Translation Flow
To serve diverse populations during emergency relief, the UI supports dynamic client-side translations. This flow shows how language switches are applied immediately without requiring a network refresh.

```mermaid
graph TD
    A[App loads / User changes language selector] --> B[Get selected language value: en, hi, bn, mr]
    B --> C[Fetch dictionary translations from TRANSLATIONS object]
    C --> D[Select all DOM elements with data-i18n attribute]
    D --> E[Loop through elements]
    E --> F[Replace innerText or placeholder with translated string matching key]
    F --> G[Update text-direction/alignment if needed]
    G --> H[App UI updates dynamically without page reload]
```

---

## 📱 Subsystems Interaction Matrix

The table below illustrates how different pages and controls access device APIs and data storage:

| Feature / Tab | Browser Sensor API | Caching / Local Storage | External Network Dependency | Multi-lingual Support |
| :--- | :--- | :--- | :--- | :--- |
| **Dashboard** | None | Read Safety Status | None | Yes |
| **Map & Shelters** | GPS Geolocation | Leaflet CSS/JS Cache | OpenStreetMap tiles (Optional) | Yes |
| **AI Triage** | None | Cache Search | None (local fallback rule matrix) | Yes |
| **First Aid** | None | Local Content Cache | None | Yes |
| **Checklist** | None | LocalStorage Read/Write | None | Yes |
| **Rescue Beacon** | Web Audio API | None | None | Yes |
| **Compass** | Magnetometer / Sensor | None | None | Yes |
| **SOS Builder** | GPS Geolocation | Clipboard Copy | Tel/Cellular network (SMS/WhatsApp) | Yes |
