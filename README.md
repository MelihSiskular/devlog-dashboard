# DevLog Dashboard

DevLog Dashboard is a Notion-style developer dashboard built with ReactJS and Tailwind CSS.  
It helps developers track their projects, daily logs and GitHub contribution goals.

## Features

- Add new projects
- List project logs
- Update existing projects
- Delete projects
- Daily developer log section
- GitHub-style contribution activity grid
- Modern dark dashboard UI
- LocalStorage data persistence
- Toast notification system
- Recent activity timeline
- Contribution reset cycle tracking

## Technologies

- ReactJS
- Vite
- Tailwind CSS
- JavaScript
- Netlify

## Project Structure

```txt
src/
├── Components/
│   ├── Sidebar.jsx
│   ├── StatsCard.jsx
│   ├── ProjectForm.jsx
│   ├── ProjectCard.jsx
│   ├── DailyLogCard.jsx
│   └── ContributionGrid.jsx
├── Pages/
│   └── Dashboard.jsx
├── Interfaces/
│   └── Project.js
├── App.jsx
├── main.jsx
└── index.css

```

## Purpose

This project was created as part of a JavaScript Web Development course.
The main goal is to practice modern frontend development by using ReactJS, Tailwind CSS, component structure and CRUD operations.

## Deployment
The project can be deployed with Netlify.

Build command:

```bash
npm run build
```

Publish directory:

```bash
dist
```

Run:

```bash
npm run build
```

