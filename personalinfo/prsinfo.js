redirectToPage(".btn-back", "/landing");

var submitButton = document.querySelector(".submit-form");

submitButton.onclick = (e) => {
  e.preventDefault();
  var form = document.querySelector(".cta-form-contact");

  const formData = new FormData(form);
  for (var pair of formData.entries()) {
    addValueToLocalStorage(pair[0], pair[1]);
  }
};

window.onload = function () {
  var email = getValueFromLocalStorage("email");
  var number = getValueFromLocalStorage("number");

  if (email) {
    var emailElem = document.querySelector("#email");
    emailElem.value = email;
  }

  if (number) {
    var numberElem = document.querySelector("#number");
    numberElem.value = number;
  }
};

redirectToPage(".submit-form", "/productspecification/specif.html");
