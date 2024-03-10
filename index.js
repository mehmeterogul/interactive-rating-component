let ratingSection = document.querySelector(".rating__wrapper");
let thankYouSection = document.querySelector(".thank-you__wrapper");

let ratingText = document.querySelector(".rating");

let radioButtons = document.getElementsByName("rating");
let submitButton = document.querySelector(".submit");

let warningHandler = document.querySelector(".warning-handler");
let warningPopup = document.querySelector(".warning-popup");

let canClickButton = true;

init();

function init() {
  submitButton.addEventListener("click", handleState);
  warningHandler.addEventListener("click", handleWarning);

  radioButtons.forEach((radio) => {
    radio.addEventListener("click", disableWarning);
  });

  thankYouSection.classList.add("hide");
  warningPopup.classList.add("hide");
}

function getCheckedRadioIndex() {
  let checkedRadioIndex = -1;
  let counter = 0;

  radioButtons.forEach((radio) => {
    if (radio.checked) {
      checkedRadioIndex = counter;
    }

    counter++;
  });

  return checkedRadioIndex;
}

function handleState() {
  let checkedRadioIndex = getCheckedRadioIndex();
  ratingText.innerHTML = checkedRadioIndex + 1;
  warningPopup.classList.add("hide");
  ratingSection.classList.add("hide");
  thankYouSection.classList.remove("hide");
}

function handleWarning() {
  let checkedRadioIndex = getCheckedRadioIndex();

  if (checkedRadioIndex === -1 && canClickButton) {
    canClickButton = false;
    warningPopup.classList.remove("hide");
    setTimeout(() => {
      warningPopup.classList.add("hide");
      canClickButton = true;
    }, 2000);
  }
}

function disableWarning() {
  warningHandler.classList.add("hide");
  submitButton.removeAttribute("disabled");
}
