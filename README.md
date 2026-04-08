# 🥊 MuscleForge — Gym Landing Page

A pixel-perfect, fully responsive gym landing page built with **React** and **Tailwind CSS**, featuring complete authentication flow with API integration.

---

## 🔗 Live Demo

| Platform | URL |
|----------|-----|
| 🚀 Vercel / Netlify | `your-live-url-here` |
| 💻 GitHub Repo | `your-repo-url-here` |

---

## 📸 Screenshots

> *(Add screenshots here)*

| Desktop | Tablet | Mobile |
|---------|--------|--------|
| ![desktop](./screenshots/desktop.png) | ![tablet](./screenshots/tablet.png) | ![mobile](./screenshots/mobile.png) |

---

## ✨ Features

- 🎨 **Pixel-perfect UI** — Faithfully recreated from the provided Figma design
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop using Tailwind CSS breakpoints (`sm`, `md`, `lg`)
- 🔐 **Authentication Flow** — Register → OTP Verify → Login → Landing Page
- 🔑 **JWT Token Management** — Token stored in `localStorage`, auto-attached to protected requests
- 🛡️ **Protected Routes** — Landing page accessible only after successful login
- ⚡ **Smooth Animations** — Transitions and hover effects throughout the UI
- 🧹 **Clean Architecture** — Modular component structure with separation of concerns

---

## 🗂️ Project Structure

```
src/
├── assets/                  # Images, icons, fonts
├── components/
│   ├── Layout/
│   │   └── Container.jsx    # Reusable max-width wrapper
│   ├── Banner/
│   │   └── Banner.jsx       # Hero section
│   ├── Champion/
│   │   └── Champion.jsx     # Train Like a Champion section
│   ├── Client/
│   │   └── Client.jsx       # Testimonials section
│   ├── OurProducts/
│   │   └── OurProducts.jsx  # Products grid section
│   ├── Footer/
│   │   └── Futter.jsx       # Footer section
│   ├── Navbar.jsx           # Top navigation bar
│   └── Subscribe.jsx        # Newsletter subscription section
├── pages/
│   ├── Login.jsx            # Login page
│   ├── Register.jsx         # Registration page
│   └── VerifyOTP.jsx        # OTP verification page
├── services/
│   └── auth.js              # Axios API service layer
└── App.jsx                  # Root component with routing
```

---

## 🔐 Authentication Flow

```
/register
    │
    ▼ (success → OTP in response)
/verify-otp
    │
    ▼ (success)
/login
    │
    ▼ (token saved to localStorage)
/ (Landing Page) ← Protected Route
```

| Step | Page | API Endpoint |
|------|------|-------------|
| 1 | Register | `POST /api/register` |
| 2 | Verify OTP | `POST /api/verify_otp` |
| 3 | Resend OTP | `POST /api/resend_otp` |
| 4 | Login | `POST /api/login` |
| 5 | Logout | `POST /api/logout` |
| — | User Detail | `GET /api/user-detail` |

> **API Base URL:** `https://apitest.thewarriors.team/api`

---

## 🧱 Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling & responsiveness |
| [React Router DOM](https://reactrouter.com/) | Client-side routing & protected routes |
| [Axios](https://axios-http.com/) | HTTP client for API calls |
| [Vite](https://vitejs.dev/) | Lightning-fast build tool |

---

## 📦 Packages Used

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "axios": "^1.x",
  "tailwindcss": "^3.x",
  "vite": "^5.x"
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SourovKarmokar/LandingPage

# 2. Navigate into the project
cd muscleforge

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Drag & drop the /dist folder to Netlify dashboard
# OR use Netlify CLI:
netlify deploy --prod --dir=dist
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Prefix | Screen Size |
|-----------|--------|-------------|
| Mobile | *(default)* | `< 768px` |
| Tablet | `md:` | `768px – 1023px` |
| Desktop | `lg:` | `≥ 1024px` |

---

## 🎨 Design Reference

Figma File: [View Design](https://www.figma.com/design/J9DM2hQrfQfAX7LOjz8Jwm/Task-Figma-File?node-id=0-1)

---

## 👤 Author

**Your Name**
- GitHub: [SourovKarmokar](https://github.com/SourovKarmokar)
- LinkedIn: [your-linkedin](https://www.linkedin.com/in/sourov-karmokar/)

---

## 📄 License

This project was built as part of a **Frontend Job Interview Task Assessment**.

---

<<<<<<< HEAD
> Built with ❤️ and lots of ☕ by [Sourov Karmokar]
=======
> Built with ❤️ and lots of ☕ by [Sourov Karmokar]
>>>>>>> b9588aa (LandingPage)
