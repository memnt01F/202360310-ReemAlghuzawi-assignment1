# Technical Documentation – Assignment 1

## 1. Project Architecture

The project follows a clean and modular structure separating:

- HTML → Structure
- CSS → Styling and layout
- JavaScript → Interactivity
- Assets → Images and media
- Docs → Documentation files

This separation improves maintainability and readability.

---

## 2. Layout Implementation

### CSS Grid
The Projects section uses CSS Grid:

.projects-grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
}

This allows two project cards per row on larger screens and switches to a single column on smaller screens using media queries.

### Flexbox
The navigation bar uses Flexbox to align elements horizontally and manage spacing.

---

## 3. Theme Toggle Implementation

The theme toggle is implemented using:

- A checkbox input styled as a switch
- JavaScript event listener
- CSS custom properties (variables)
- localStorage

### How It Works

1. When the toggle is clicked, a `dark` class is added or removed from `<body>`.
2. CSS variables change automatically depending on whether `.dark` exists.
3. The selected theme is saved in `localStorage`.
4. On page reload, the saved theme is applied automatically.

This approach keeps styling centralized and scalable.

---

## 4. Responsive Design

Responsive behavior is implemented using:

@media (max-width: 850px)


When the screen width is below 850px:
- Project grid switches to one column
- Spacing is adjusted
- Layout becomes more compact

---

## 5. Contact Form Handling

JavaScript prevents default form submission:

event.preventDefault();


Instead of sending data to a server (not required for this assignment), it:

- Displays a confirmation message
- Resets the form fields

This demonstrates DOM manipulation and event handling.

---

## 6. Design Decisions

- CSS variables were used for easier theme management.
- Clean minimal design was chosen to maintain readability.
- Modular folder structure improves organization.
- Hover effects were added to enhance user experience.

---

## 7. Limitations

- The contact form does not send real data to a backend.
- The portfolio contains placeholder project images.
- No advanced animation libraries were used.

---

## 8. Future Improvements

- Add backend integration for form submission.
- Expand project section with real deployed projects.
- Add animations or transitions for enhanced UI.
- Deploy the site using GitHub Pages.

