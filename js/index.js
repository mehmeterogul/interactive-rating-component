const radioButtons = document.getElementsByName("rating");
const submitButton = document.querySelector(".submit");
const warningHandler = document.querySelector(".warning-handler");
const warningPopup = document.querySelector(".warning-popup");

let canClickButton = true;

init();

function init() {
  localStorage.clear();
  submitButton.addEventListener("click", saveRating);
  warningHandler.addEventListener("click", handleWarning);

  radioButtons.forEach((radio) => {
    radio.addEventListener("click", disableWarning);
  });

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

function saveRating() {
  const checkedRadioIndex = getCheckedRadioIndex();
  localStorage.setItem("rating", checkedRadioIndex + 1);
}

function handleWarning() {
  const checkedRadioIndex = getCheckedRadioIndex();

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
