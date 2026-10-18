# Personal Portfolio Website — Assignment 2

## About the Project

This project is an improved version of my personal portfolio website from Assignment 1 for SWE 363. It introduces my background as a Computer Science student, showcases my academic projects, and includes a contact form.

For Assignment 2, I added new interactive features to make the website more useful and user-friendly. These include live project search, dark and light mode, and improved contact form validation and feedback.

## Features

- About Me section with my academic background and interests
- Projects section showcasing two academic projects with images
- Live project search that filters projects while typing
- Dark and light mode that saves the selected theme using `localStorage`
- Contact form with input validation and feedback messages
- Responsive design for desktop, tablet, and mobile screens
- Smooth scrolling, hover effects, and transitions

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Flexbox
- CSS Grid
- Media Queries
- Web Storage API (`localStorage`)

## Projects Included

### KFUPM Parking Reservation System

Designed a KFUPM parking reservation system prototype that helps users view parking availability and reserve parking spaces efficiently.

### In-Memory File System Simulator

Developed an in-memory file system simulator using OOP, HashMaps, trees, DFS, and KMP to support efficient file operations.

## Project Structure

The project is organized into separate folders for styling, JavaScript, images, and documentation.

```text
swe363 hw2/
├── assets/
│   └── images/
│       ├── file-system-project.png
│       └── parking-project.png
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── index.html
└── README.md
```

### File Descriptions

- `index.html` — Contains the About Me, Projects, and Contact sections.
- `css/styles.css` — Contains the website styling, responsive layout, and theme colors.
- `js/script.js` — Handles project search, theme switching, and contact form validation.
- `assets/images/` — Stores screenshots from my academic projects.
- `docs/ai-usage-report.md` — Explains how AI tools were used during development.
- `docs/technical-documentation.md` — Describes the technical implementation of the website.
- `README.md` — Provides project information and setup instructions.

## How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a modern web browser such as Chrome or Edge.
4. No additional installation or backend server is required.

## JavaScript Features

### Live Project Search

The Projects section includes a search field that filters projects based on their titles as the user types. If no project matches the search, a message is displayed.

### Dark and Light Mode

The website allows users to switch between dark and light themes. The selected theme is saved using `localStorage`, so it remains the same after refreshing the page.

### Contact Form

The contact form includes Name, Email, and Message fields with validation. It displays a success message when the form is completed correctly and provides feedback for invalid inputs.

The form is a demonstration and does not send messages to a server.

## AI Usage

I used ChatGPT during this assignment to help me understand the requirements, add interactive JavaScript features, review my code, and improve the website's usability.

I reviewed and tested the suggestions and adjusted them to match my existing portfolio. For example, I tested and corrected the live project search so that it filters projects immediately while typing instead of waiting for Enter.

More details about my AI usage are included in `docs/ai-usage-report.md`.

## Author

Nora Alqahtani