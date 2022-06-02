function onPageLoad() {
  console.log("onPageLoad");
  setupHamburgerMenu();
  setupEmailSubscriptionForm();
}

function modalOpen() {}

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
``;

function setupHamburgerMenu() {
  console.log("Shuwen is beautiful");
  document.querySelector("button#hamburger").onclick = openHamburgerMenu;
}

function openHamburgerMenu() {
  console.log("openHamburgerMenu()");
}

document.addEventListener("DOMContentLoaded", onPageLoad);
