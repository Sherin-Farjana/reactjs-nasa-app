# APOD Project - NASA Astronomy Picture of the Day Viewer

A modern, interactive **NASA APOD (Astronomy Picture of the Day) web app** built using **React, JavaScript, and CSS**, designed to fetch and display NASA’s daily astronomy image with details and a sidebar for extra information.

---

## Live Demo

**https://sherin-reactjs-nasa-app.netlify.app/**

---

## Project Overview

**NASA APOD Viewer** is a **single-page React application** that fetches the daily astronomy image from NASA’s public API and presents it with a clean, responsive interface.

The app includes:

- Fetches **NASA’s APOD** dynamically using their public API
- **Displays high-resolution images** with title and description
- **Sidebar modal** with date and detailed explanation
- **Footer with quick info** and toggle button
- **Persistent caching** using `localStorage` to reduce API calls
- Responsive design for desktops and mobile devices

---

## Features

- Built using **React + Vite**
- Fetches daily data from the **NASA APOD API**
- Caches daily results to reduce API calls
- Responsive sidebar with explanation text
- Minimal, modern UI styling
- Loading indicator for smooth experience

---

## Tech Stack

| Technology           | Purpose                       |
| -------------------- | ----------------------------- |
| **React (vite)**     | Frontend framework            |
| **Javascript(ES6+)** | Logic & API handling          |
| **CSS3**             | Styling and responsive layout |
| **NASA APOD API**    | Astronomy image data          |
| **Font Awesome**     | UI icons                      |

---

## Project Structure

```

REACTJS-NASA-APP/
│
├── src/
│   ├── App.jsx           # Main application logic
│   ├── main.jsx          # React entry point
│   ├── components/
│   │   ├── Main.jsx      # Renders APOD image
│   │   ├── Footer.jsx    # Footer with title + info button
│   │   └── SideBar.jsx   # Slide-in details panel
│   └── index.css         # Global styles
│
├── index.html            # Root HTML file
├── .env                  # NASA API KEY
└── README.md             # Documentation

```

## Author

**Sherin Farjana**  
💼 Front End Developer | Specializing in C, C++, OpenGL, and Web Technologies  
🔗 [LinkedIn](https://www.linkedin.com/in/sherin-farjana)  
🔗 [GitHub](https://github.com/Sherin-Farjana)

---
