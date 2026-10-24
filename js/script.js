// Contact form validation and feedback
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  formFeedback.className = "";

  if (!name || !email || !message) {
    formFeedback.textContent = "Please fill in all fields before submitting.";
    formFeedback.className = "feedback-error";
    return;
  }

  if (!document.getElementById("email").validity.valid) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.className = "feedback-error";
    return;
  }

  formFeedback.textContent = `Thank you, ${name}! Your form was submitted successfully.`;
  formFeedback.className = "feedback-success";

  contactForm.reset();
});


// Live project search
const projectSearch = document.getElementById("project-search");
const projectCards = document.querySelectorAll(".project-card");
const noProjectsMessage = document.getElementById("no-projects-message");

projectSearch.addEventListener("input", function () {
  const searchText = projectSearch.value.toLowerCase().trim();
  let visibleProjects = 0;

  projectCards.forEach(function (card) {
    const projectName = card.querySelector("h3").textContent.toLowerCase();

    if (projectName.includes(searchText)) {
      card.style.display = "";
      visibleProjects++;
    } else {
      card.style.display = "none";
    }
  });
  noProjectsMessage.hidden = visibleProjects > 0;
});

// Dark and light mode
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-mode", isDark);
  themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

const savedTheme = localStorage.getItem("portfolio-theme");
applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", function () {
  const newTheme = document.body.classList.contains("dark-mode")
    ? "light"
    : "dark";

  applyTheme(newTheme);
  localStorage.setItem("portfolio-theme", newTheme);
});