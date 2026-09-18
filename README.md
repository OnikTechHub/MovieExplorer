# Movie Explorer 🎬

A modern, high-performance React web application for searching, exploring, and discovering thousands of movies and TV shows powered by the **TVMaze API**. Built with a dark cinematic design system, smooth animations, and a modular architecture.

---

## 🌐 Live Demo

🔗 **[Live Demo on Vercel](https://your-movie-explorer-demo.vercel.app)** *(Replace with your deployment URL)*

---

## ✨ Features

- **Cinematic Home Landing Page**:
  - Full-width hero banner with responsive layout and crystal-clear backdrop.
  - Smooth Framer Motion entrance animations for typography, badges, and stats.
  - Clear Call-to-Action (CTA) directing users directly into the Movie Explorer catalog.

- **Dynamic Search & Filtering**:
  - Real-time debounced search powered by TVMaze's search endpoint (`/search/shows?q=:query`).
  - Genre-based filter pills (`Action`, `Drama`, `Science-Fiction`, `Comedy`, `Thriller`, `Crime`, etc.).
  - Instant and smooth filtering with stable grid layout.

- **Interactive Movie Details Modal**:
  - Detailed pop-up modal showcasing high-resolution poster artwork.
  - Comprehensive metadata: average rating, premiere year, runtime, genre tags, storyline summary, show status, language, and official website link.
  - Accessible click-outside and close button navigation.

- **Modular Architecture & State Persistence**:
  - Custom React Hook (`useMovies.js`) separating data-fetching, debouncing, and filter logic from the presentation layer.
  - Persistent navigation state across page reloads via `localStorage`.

- **Responsive Design & Dark Cinematic Aesthetics**:
  - Mobile-first CSS Grid (1 column on mobile, 2 columns on tablets, 3–4 columns on desktops).
  - High-contrast typography and subtle glassmorphic styling crafted with Tailwind CSS.
  - Polished loading skeleton states and helpful empty search states.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core UI framework |
| **Vite** | Next-generation frontend build tool and dev server |
| **Tailwind CSS** | Utility-first styling with custom dark theme |
| **Framer Motion** | Micro-interactions and transition animations |
| **TVMaze API** | RESTful show and movie database |

---

## 📁 Project Structure

```text
MovieExplorer/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and media files
│   ├── components/         # Reusable UI components
│   │   ├── Footer.jsx      # Application footer
│   │   ├── Hero.jsx        # Landing page hero banner
│   │   ├── MovieCard.jsx   # Individual show card
│   │   ├── MovieModal.jsx  # Interactive details popup modal
│   │   └── Navbar.jsx      # Navigation bar with brand and links
│   ├── hooks/
│   │   └── useMovies.js    # Custom hook for fetching and filtering shows
│   ├── pages/
│   │   └── MovieListing.jsx# Main movie explorer and search page
│   ├── App.jsx             # Top-level state-based page router
│   ├── index.css           # Tailwind directives & base styles
│   └── main.jsx            # Application entry point
├── package.json            # Project dependencies and build scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vercel.json             # Vercel SPA rewrite routing configuration
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started Locally

Follow these steps to run the application on your local machine:

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OnikTechHub/MovieExplorer.git
   cd MovieExplorer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 🔨 Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment on Vercel

This project is pre-configured for one-click deployment on [Vercel](https://vercel.com/):

1. Push your repository to **GitHub** / **GitLab** / **Bitbucket**.
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New" > "Project"**.
3. Import your `MovieExplorer` repository.
4. Keep the default settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (or `vite build`)
   - **Output Directory**: `dist`
5. Click **"Deploy"**. The included `vercel.json` ensures all client-side routes are handled properly.

---

## 📄 License

This project is licensed under the **MIT License**.
