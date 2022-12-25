//   DARK mode codes

let elBody = document.querySelector("body");
let modeBtn = document.querySelector(".linkbox__mode__btn");

modeBtn.addEventListener("click", () => {});

// MODAL CODES

const elModalBtn = document.querySelector(".linkbox__login");
const elExitBtn = document.querySelector(".modal__exit");
const elEmailInput = document.querySelector(".modal__email");
const elModal = document.querySelector(".modal");
const elForm = document.querySelector(".modal__form");
const elPass = document.querySelector(".modal__password");
const elPassInput = document.getElementById("modal__user-password");
const elPassBtn = document.querySelector(".modal__eye-password");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
});

elForm.addEventListener("input", () => {
  if (isNaN(elPassInput.value)) {
    elPassInput.style.outline = "2px solid #299764";
  } else {
    elPassInput.style.outline = "2px solid #FF3B30";
  }
  if (isNaN(elEmailInput.value) || elEmailInput.value == "") {
    elEmailInput.style.outline = "2px solid #299764";
  } else {
    elEmailInput.style.outline = "2px solid #FF3B30";
  }
});

elModalBtn.addEventListener("click", () => {
  elModal.style.display = "block";
});

elExitBtn.addEventListener("click", () => {
  elModal.style.display = "none";
});

elPassBtn.addEventListener("click", () => {
  if (elPassInput.type === "password") {
    elPassInput.type = "text";
  } else {
    elPassInput.type = "password";
  }
});
