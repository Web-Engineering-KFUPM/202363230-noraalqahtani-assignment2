# Technical Documentation

## Project Overview

This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript. It contains information about me, examples of my academic projects, and a contact form.

## HTML Structure

The website uses semantic HTML elements to keep the page organized. The main parts are:

- A `header` containing the portfolio title and navigation
- An About Me section with my introduction
- A Projects section containing two project cards
- A Contact section with Name, Email, and Message fields
- A `footer` at the bottom of the page

The Projects section currently includes my KFUPM Parking Reservation System and In-Memory File System Simulator.

## CSS and Responsive Design

The styling is stored in `css/styles.css`.

I used Flexbox for the header and navigation and CSS Grid for the project cards. I also added spacing, colors, card styling, hover effects, and form styling.

A media query is used for screens that are 768px wide or smaller. On smaller screens, the header changes to a vertical layout and the project cards change from two columns to one column. This helps the website work better on desktop, tablet, and mobile devices.

## JavaScript

The JavaScript code is stored in `js/script.js`.

JavaScript is used for the contact form interaction. When the user submits the completed form, the default submission is prevented, a confirmation message is displayed using the user's name, and the form is cleared.

The contact form does not require a backend or database.

## Project Images

The project images are stored in `assets/images/`.

I used images from my own academic work. The KFUPM Parking Reservation System uses an image of the final prototype, while the In-Memory File System Simulator uses a screenshot showing part of the project code.

## Testing

I tested the website in the browser by checking the navigation links, contact form, required fields, hover effects, and JavaScript interaction. I also resized the browser window to check that the layout responds correctly on smaller screens.