const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

let isExpanded = false;
let typingTimeout; // store typing timeout

// Read More / Read Less with interruptible typing
readMoreBtn.addEventListener("click", () => {
  // Stop any ongoing typing
  clearTimeout(typingTimeout);

  if (!isExpanded) {
    // Expand with typing effect
    moreText.innerHTML = "";
    moreText.style.display = "block";
    typeText(moreText, moreText.dataset.fulltext, 20); // speed in ms
    readMoreBtn.textContent = "Read Less";
    isExpanded = true;
  } else {
    // Collapse immediately
    moreText.innerHTML = "";
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
    isExpanded = false;
  }
});

// Typing function supporting \n and interruptible
function typeText(element, text, speed, i = 0) {
  if (i < text.length) {
    // Convert \n to <br>
    if (text.charAt(i) === "\n") {
      element.innerHTML += "<br>";
    } else {
      element.innerHTML += text.charAt(i);
    }
    typingTimeout = setTimeout(() => typeText(element, text, speed, i + 1), speed);
  }
}

// Mobile menu toggle
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (menuIcon.classList.contains("bx-menu")) {
    menuIcon.classList.replace("bx-menu", "bx-x");
  } else {
    menuIcon.classList.replace("bx-x", "bx-menu");
  }
});
