# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# novas
Novas build fest
BlueWatch

BlueWatch is a coastal intelligence web platform designed to help fishermen, coastal communities, and local authorities understand real-time sea conditions and marine risks in an intuitive and accessible way.
The system focuses on local decision-making, translating complex ocean and weather signals into clear, actionable insights.

---

Problem Statement

Coastal livelihoods depend heavily on ocean conditions, yet most warnings and forecasts are:

Too generalized

Not localized enough for small fishing communities

Difficult to interpret in real time

Fishermen often face:

Sudden weather changes

Rough sea conditions without early local indicators

Loss of equipment, income, and sometimes lives

BlueWatch aims to bridge this gap by presenting localized, confidence-based sea safety information in a simple digital interface.

---

Solution Overview

BlueWatch provides:

Location-specific sea condition status

Clear safety classification (Safe / Caution / Unsafe)

Confidence scoring for predictions

Daily and next-day sea condition windows

Supporting marine details such as wave height, swell, advisories, and official IMD status

The platform is designed to be easily extendable to real sensor data and government APIs.

---

Key Features
1. Location-Based Monitoring

Users can select coastal locations to view relevant sea conditions instead of broad regional forecasts.

2. Live Status Indicator

A single, prominent status card indicates whether conditions are:

Safe

Caution

Unsafe
This enables fast decision-making without technical interpretation.

3. Confidence Score

Each prediction includes a confidence percentage, helping users understand uncertainty rather than blindly trusting alerts.

4. Time Windows

Separate insights for:

Today

Tomorrow
Highlighting safer time periods when applicable.

5. Marine Details Panel

Includes:

Wave height

Swell condition

Advisory notes

IMD cyclone status

6. Clean, Minimal UI

Professional, distraction-free layout

Light and dark mode support

Designed for low digital literacy users

Technology Stack

Frontend: React (Vite)

Styling: CSS (custom, no UI framework)

Data Layer: Mock data (structured to simulate real APIs)

Architecture: Component-based, scalable structure

---

Project Structure
src/
 ├─ components/
 │  ├─ Navbar.jsx
 │  ├─ StatusCard.jsx
 │  ├─ ConfidenceBar.jsx
 │  ├─ WindowCard.jsx
 │  ├─ SeaDetails.jsx
 │
 ├─ pages/
 │  ├─ Home.jsx
 │  ├─ LiveStatus.jsx
 │  ├─ About.jsx
 │
 ├─ data/
 │  └─ mockSeaData.jsx
 │
 ├─ services/
 │  └─ seaApi.jsx
 │
 ├─ App.jsx
 ├─ App.css
 ├─ globals.css
 └─ main.jsx

---

Current Data Model

At present, BlueWatch uses structured mock data to simulate:

Sea state

Confidence scoring

Advisory logic

This allows rapid prototyping while keeping the system ready for integration with:

Acoustic ocean sensors

Weather buoys

Government meteorological APIs

Future Scope

Integration with real-time acoustic monitoring data

API integration with IMD and ocean buoy networks

Predictive anomaly detection for sudden sea changes

Mobile-first version for fishermen

Multilingual support for coastal regions

Government dashboard for coastal risk management

---

Use Cases

Fishermen planning daily trips

Coastal safety authorities

Disaster preparedness teams

Environmental monitoring initiatives

---

Installation & Run
npm install
npm run dev

---

Status

This project was built as part of Novas Build Fest as a concept demonstration of AI-assisted coastal intelligence and human-centered design.
