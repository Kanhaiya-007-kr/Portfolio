document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const message = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    console.log("Form submitted:", message);
    alert("Thanks for reaching out Kanhaiya!");
    contactForm.reset();
  });

  // Show phone number on icon click
  const showPhone = document.getElementById("show-phone");
  const phoneNumber = document.getElementById("phone-number");
  showPhone.addEventListener("click", () => {
    phoneNumber.style.display = "inline";
    showPhone.style.display = "none";
  });
});
// 