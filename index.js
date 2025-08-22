// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

const updateEventImages = (isDark) => {
  document.getElementById("event-img-0").src = isDark ? "./img/Event.png" : "./img/EventOG.png";
  document.getElementById("event-img-1").src = isDark ? "./img/Laptop.png" : "./img/LaptopOG.png";
  document.getElementById("event-img-2").src = isDark ? "./img/Curious.png" : "./img/CuriousOG.png";
  document.getElementById("event-img-3").src = isDark ? "./img/Looking.png" : "./img/LookingOG.png";
};

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    // Update the button label based on the current mode
    themeButton.textContent = isDarkMode ? "Toggle Light Mode ☀️" : "Toggle Dark Mode 🌙";
    updateEventImages(isDarkMode);
  }
  

// Step 3: Register a 'click' event listener for the theme button,
//         and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.getElementById("register-button");

  if (registerButton) {
    registerButton.addEventListener("click", () => {
      document.getElementById("rsvp-form").scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Define the callback function for submitting the form
const addParticipant = (person) => {
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `${person.name} from ${person.organization} has RSVP'd!`;
  document.getElementById("rsvp-participants").appendChild(newParticipant);
};

// 👇 Improved form validation
const validateForm = (event) => {
  event.preventDefault(); // prevent form reload

  const form = document.getElementById("rsvp-form");
  const inputs = form.elements;
  let containsErrors = false;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.tagName.toLowerCase() !== "input") continue;

    const value = input.value.trim(); // remove extra spaces
    const isEmail = input.type === "email";

    // Remove previous error state
    input.classList.remove("error");

    // General text validation: at least 2 characters, must include a letter
    const hasLetter = /[a-zA-Z]/.test(value);
    const isValidText = value.length >= 2 && hasLetter;
    // Email validation
    const isValidEmail = isEmail ? value.includes("@") && isValidText : true;

    if (!isValidText || !isValidEmail) {
      containsErrors = true;
      input.classList.add("error");
    }
  }

  if (!containsErrors) {
    const person = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      organization: document.getElementById("organization").value.trim()
    };

    addParticipant(person);
    toggleModal(person);
    form.reset();
  }
};

document
  .getElementById("submit-rsvp-button")
  .addEventListener("click", validateForm);

  const toggleModal = (person) => {
    const modal = document.getElementById("success-modal");
    const modalText = document.getElementById("modal-text");
  
    modal.style.display = "flex";
    modalText.textContent = `Thanks for RSVPing, ${person.name}! 💖 Can't wait for you to own your digital power!`;
  
    const modalImage = document.getElementById("modal-image");
    let rotateFactor = 0;
  
    const animateImage = () => {
      rotateFactor = rotateFactor === 0 ? -10 : 0;
      modalImage.style.transform = `rotate(${rotateFactor}deg)`;
    };
  
    const intervalId = setInterval(animateImage, 500);
  
    setTimeout(() => {
      modal.style.display = "none";
      clearInterval(intervalId);
    }, 5000); // Hide after 5 seconds
  };

  document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("register-button");
    const rsvpForm = document.getElementById("rsvp-form");
    const learnMoreButton = document.getElementById("learn-more-button");
    const scheduleSection = document.getElementById("Schedule");
  
    if (registerButton && rsvpForm) {
      registerButton.addEventListener("click", () => {
        rsvpForm.scrollIntoView({ behavior: "smooth" });
      });
    }
  
    if (learnMoreButton && scheduleSection) {
      learnMoreButton.addEventListener("click", () => {
        scheduleSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });