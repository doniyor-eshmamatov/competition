//   DARK mode codes

let elBody = document.querySelector("body");

const theme = function () {
  elBody.classList.toggle("dark");
};

//   CHOOSE LIST CREATE

let chooseList = document.querySelector('.choose__list');

let chooseBtn1 = document.querySelector('.choose-btn__1');
let chooseBtn2 = document.querySelector('.choose-btn__2');
let chooseBtn3 = document.querySelector('.choose-btn__3');

function renderCars(array) {
    chooseList.innerHTML = '';
    array.forEach(el => {
        let chooseItem = document.createElement('li');
        let chooseSubTitle = document.createElement('h3');
        let chooseSubText = document.createElement('p');
        let chooseItemImg = document.createElement('img');
        let chooseBottomBox = document.createElement('div')

        chooseSubTitle.textContent = el.name;
        chooseSubText.textContent = el.type;
        chooseItemImg.src = el.img;

        chooseItem.setAttribute('class', 'choose__item');
        chooseSubTitle.setAttribute('class', 'choose__subtitle');
        chooseSubText.setAttribute('class', 'choose__subtext');
        chooseItemImg.setAttribute('class', 'choose__itemimg');
        chooseBottomBox.setAttribute('class', 'choose__item__box');
        let chooseItemSpan1 = document.createElement('p');
        let chooseItemSpan2 = document.createElement('p');
        let chooseItemSpan3 = document.createElement('p');
        let chooseItemSpan4 = document.createElement('p');

        chooseItemSpan1.setAttribute('class', 'seats');
        chooseItemSpan2.setAttribute('class', 'seats');
        chooseItemSpan3.setAttribute('class', 'seats');
        chooseItemSpan4.setAttribute('class', 'seats');

        chooseItemSpan1.textContent = '5 Seats';
        chooseItemSpan2.textContent = 'Automatic';
        chooseItemSpan3.textContent = '21+ Years';
        chooseItemSpan4.textContent = '1-lit / 2.5 km';

        chooseBottomBox.appendChild(chooseItemSpan1)
        chooseBottomBox.appendChild(chooseItemSpan2)
        chooseBottomBox.appendChild(chooseItemSpan3)
        chooseBottomBox.appendChild(chooseItemSpan4)


        chooseItem.appendChild(chooseSubTitle)
        chooseItem.appendChild(chooseSubText)
        chooseItem.appendChild(chooseItemImg)
        chooseItem.appendChild(chooseBottomBox)
    
        chooseList.appendChild(chooseItem);
    })
}

chooseBtn1.addEventListener('click', () => {
    renderCars(compact)
})

chooseBtn3.addEventListener('click', () => {
    renderCars(vans);
})

chooseBtn2.addEventListener('click', () => {
    renderCars(sportsCar);
})
renderCars(compact);




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
