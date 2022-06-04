function onPageLoad() {
  setupHamburgerMenu();
  setupEmailSubscriptionForm();
}

function setupEmailSubscriptionForm() {
  console.log("Email form ready");
  document.querySelector(".signup-boxes button").onclick = getInputValue;
}

function getInputValue() {
  console.log("getValue");
  const email = document.querySelector("footer input").value;
  const state = document.querySelector("footer select").value;
  console.log(email);
  console.log(state);
  //const email = "jan@jan.com"; // 99 out of 100
  // let email = "jan@jan.com"; // 1 out of 100
  // var email = "jan@jan.com";

  //sendToServer(email, state);
}

function setupHamburgerMenu() {
  document.querySelector("button#hamburger").onclick = toggleHamburgerMenu;
}

let menuIsOpen = false;

function toggleHamburgerMenu() {
  const button = document.querySelector("button#hamburger");

  if (menuIsOpen) {
    button.classList.remove("close-icon");
    button.classList.add("hamburger-icon");
  } else {
    button.classList.remove("hamburger-icon");
    button.classList.add("close-icon");
  }

  menuIsOpen = !menuIsOpen;
}

document.addEventListener("DOMContentLoaded", onPageLoad);
