// Typed.js effect
const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "UI/UX Designer", "Engineering Student"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Responsive menu toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

// Close navbar on nav link click (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active');
  };
});

// Formspree submission with alert
const form = document.getElementById('contactForm');
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    alert("✅ Message sent successfully!");
    form.reset();
  }).catch(error => {
    alert("❌ Oops! Something went wrong.");
  });
});

// Security: Disable right-click, Ctrl+U, F12, etc.
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.onkeydown = function(e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.key.toLowerCase() === "u") ||
    (e.ctrlKey && e.key.toLowerCase() === "s") ||
    (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
    (e.ctrlKey && e.key.toLowerCase() === "c") ||
    (e.ctrlKey && e.key.toLowerCase() === "a")
  ) {
    e.preventDefault();
    return false;
  }
};

document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});
