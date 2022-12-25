//   DARK mode codes

let elBody = document.querySelector("body");

const theme = function () {
  elBody.classList.toggle("dark");
};

// MODAL CODES

const elHtml = document.querySelector("html");
const elEmailInput = document.querySelector(".modal__email");
const elModal = document.querySelector(".modal");
const elForm = document.querySelector(".modal__form");
const elPass = document.querySelector(".modal__password");
const elPassInput = document.getElementById("modal__user-password");
const elPassBtn = document.querySelector(".modal__eye-password");
const elMenuBtn = document.querySelector(".site-header__menu");

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

const modal = () => {
  elModal.style.display = "block";
  elHtml.style.overflow = "hidden";
};

const modalExit = () => {
  elModal.style.display = "none";
  elHtml.style.overflow = "auto";
};

elPassBtn.addEventListener("click", () => {
  if (elPassInput.type === "password") {
    elPassInput.type = "text";
    elPassBtn.style.backgroundImage = 'url("../images/eye-password-veiw.svg")';
  } else {
    elPassInput.type = "password";
    elPassBtn.style.backgroundImage = 'url("../images/eye-password.svg")';
  }
});

elMenuBtn.addEventListener("click", () => {
  elBody.classList.add("menu");
  elHtml.style.overflow = "hidden";
});

const menuExit = () => {
  elBody.classList.remove("menu");
  elHtml.style.overflow = "auto";
};
