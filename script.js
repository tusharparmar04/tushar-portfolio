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

// WhatsApp form redirect
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const number = document.querySelector("input[name='number']").value;
  const subject = document.querySelector("input[name='subject']").value;
  const message = document.querySelector("textarea[name='message']").value;

  const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${number}%0ASubject: ${subject}%0AMessage: ${message}`;

  window.open(`https://wa.me/918320026235?text=${whatsappMessage}`, "_blank");
});
