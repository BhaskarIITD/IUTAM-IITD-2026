# IUTAM Symposium 2026 - Official Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

The official frontend web application for the **IUTAM Symposium 2026: Rate Dependent Mechanics and Multiscale Modelling of Materials**, organized by the Indian Institute of Technology (IIT) Delhi.

This platform serves as the central hub for global researchers, academics, and industry professionals to register, view schedules, and arrange travel for the symposium.

## 🌟 Key Features

* **Automated Registration Workflow:** A custom registration form that captures participant details, categorizes fees (Student, Non-Student, Accompanying), and handles payment receipt uploads. Form submissions are securely routed through a **Microsoft Power Automate Webhook**.
* **Integrated Payment Gateway:** Displays official IIT Delhi IRD Bank Mandate details alongside a scannable SBI UPI QR code for seamless delegate payments.
* **Interactive Travel & Accommodation:** Features embedded, pinpointed Google Maps for campus navigation and an integrated Booking.com widget for real-time local hotel availability.
* **Fully Responsive Design:** A clean, academic UI built with pure CSS, fully optimized for desktop, tablet, and mobile viewing.
* **Dynamic Routing:** Utilizes `react-router-dom` for smooth, single-page application (SPA) navigation without page reloads.

## 🗺️ Site Structure

* **`/` (Home):** Hero banner, symposium overview, chairs, important dates, and quick registration access.
* **`/about`:** Detailed objectives and themes of the symposium.
* **`/scientific-committee`:** List of global organizers and advisory board members.
* **`/programme-details`:** Day-by-day event schedule (TBA).
* **`/speakers`:** Keynote and invited speaker profiles.
* **`/registration`:** Fee schedule, payment details, and the automated registration form.
* **`/travel-and-accommodation`:** Airport/Metro transit guides and nearby hotel recommendations.

## 🛠️ Tech Stack

* **Framework:** [React 18](https://reactjs.org/) (Vite)
* **Routing:** [React Router v6](https://reactrouter.com/)
* **Styling:** Custom Vanilla CSS (CSS Modules / Global Styles)
* **Backend/Integration:** Microsoft Power Automate (for form handling and database population)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/iutam-symposium-2026.git](https://github.com/yourusername/iutam-symposium-2026.git)