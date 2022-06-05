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
  console.log("Hamburger menu ready");
  const button = document.querySelector("button#hamburger");
  const overlay = document.querySelector("#overlay");

  if (menuIsOpen) {
    // the menu is shown
    button.classList.remove("close-icon");
    button.classList.add("hamburger-icon");
    overlay.classList.remove("show");
    overlay.classList.add("hide");
  } else {
    // the menu is not yet open
    button.classList.remove("hamburger-icon");
    button.classList.add("close-icon");
    overlay.classList.remove("hide");
    overlay.classList.add("show");
  }

  menuIsOpen = !menuIsOpen;
}

document.addEventListener("DOMContentLoaded", onPageLoad);
