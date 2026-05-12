function shopNow() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Message Sent Successfully!");
});