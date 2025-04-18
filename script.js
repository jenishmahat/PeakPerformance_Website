// script.js

//script for the navigation menu toggle for small screen
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");

  menuBtn.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});

// script for the Feature listing toggle in homepage
function toggleDetail(box) {
  const detail = box.querySelector('.detail-text');
  detail.classList.toggle('hidden');
}

// script for the activities listing in Activity Page 
function toggleDetail(card) {
  const detail = card.querySelector('.detail-text');
  detail.classList.toggle('hidden');
}

//script for form handling in contact page

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    messageBox.textContent = "Sending...";
    messageBox.style.color = "#555";

    setTimeout(() => {
      messageBox.textContent = "Your message has been sent!";
      messageBox.style.color = "green";
      form.reset();

      setTimeout(() => {
        messageBox.textContent = "";
      }, 3000);
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting Us, We will get back to you soon.");
    form.reset();
  });
});


  
