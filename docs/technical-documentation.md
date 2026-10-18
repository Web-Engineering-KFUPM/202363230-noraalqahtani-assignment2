# Technical Documentation — Assignment 2

## 1. Project Overview

This project is an updated version of my personal portfolio website from Assignment 1. It was developed using HTML, CSS, and JavaScript for SWE 363.

For Assignment 2, I added interactive features, including live project search, dark and light mode, and improved contact form validation and feedback.

## 2. HTML Structure

The website uses semantic HTML elements to organize the content.

- `header` contains the portfolio title and navigation links.
- `main` contains the main website content.
- `section` separates the About Me, Projects, and Contact sections.
- `article` is used for individual project cards.
- `form` contains the contact fields.
- `footer` contains the footer information.

I also added a project search input, a theme toggle button, and a feedback message below the contact form.

## 3. CSS and Responsive Design

The styling is stored in `css/styles.css`.

I used Flexbox for the header and navigation, and CSS Grid to organize the project cards.

A media query is used for screens that are 768px wide or smaller. On smaller screens, the layout adjusts by stacking the project cards vertically and changing the header arrangement.

I also used hover effects and smooth transitions to improve the appearance of interactive elements.

## 4. JavaScript Features

The JavaScript code is stored in `js/script.js`.

### Live Project Search

The search feature uses the `input` event to detect when a user types in the search field.

JavaScript checks the project titles using `includes()` and displays only the matching project cards. If no projects match, a message appears.

### Dark and Light Mode

The theme toggle allows users to switch between light and dark mode.

JavaScript adds or removes the `dark-mode` class from the page. The selected theme is saved using `localStorage` and restored when the page is opened again.

### Contact Form Validation

The contact form collects the user's name, email, and message.

JavaScript checks the input values and prevents the default form submission. When the information is valid, a success message appears below the form and the fields are cleared.

Invalid or empty fields are also checked, with the browser's built-in validation helping display appropriate feedback.

The form does not connect to a backend or send messages to a server.

## 5. Project Images

The project screenshots are stored in `assets/images/`.

The portfolio includes images from two of my academic projects:

- KFUPM Parking Reservation System
- In-Memory File System Simulator

## 6. Testing

I tested the website by checking:

- Navigation between the main sections
- Live project search with matching and nonmatching keywords
- Dark and light mode, including saved preferences after refreshing
- Contact form validation and success feedback
- Responsive layout at different browser widths
- JavaScript errors using the browser Console

## 7. File Organization

The project separates HTML, CSS, JavaScript, images, and documentation into different files and folders. This makes the code easier to read, update, and maintain.