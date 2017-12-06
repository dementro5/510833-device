var writeUsLink = document.querySelector(".contacts-write-us");
var writeUs = document.querySelector(".modal-feedback");
var writeUsClose = writeUs.querySelector(".modal-close");
var writeUsForm = writeUs.querySelector("form");
var login = writeUs.querySelector("[name=feedback-name]");
var email = writeUs.querySelector("[name=feedback-email]");
var message = writeUs.querySelector("[name=feedback-message]");
var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");
var mapLink = document.querySelector(".map-link img");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

function hide(whatHide) {
  whatHide.classList.add("modal-hide");
  removeFrom = whatHide;
  setTimeout('RemoveClasses(removeFrom)', 600);
}

function RemoveClasses (modalName) {
  modalName.classList.remove("modal-show");
  modalName.classList.remove("modal-error");
  modalName.classList.remove("modal-hide");
}

writeUsForm.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();
    writeUs.classList.remove("modal-error");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);
  }
});

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.add("modal-show");

  if(storageLogin) {
    login.value = storageLogin;
    email.focus();
  } else {
    login.focus();
  }

  if (storageEmail) {
    email.value = storageEmail;
    message.focus();
  } else {
    email.focus();
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  hide(writeUs);
});

mapClose.addEventListener("click", function (evt) {
  hide(mapPopup);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode ===27) {
    if (writeUs.classList.contains("modal-show")) {
      hide(writeUs);
    }
    if (mapPopup.classList.contains("modal-show")) {
        hide(mapPopup);
    }
  }
});

document.querySelector("body").addEventListener("click", function(evt) {
  if(writeUs.classList.contains("modal-show") && evt.target != writeUsLink && !writeUs.contains(evt.target)) {
    hide(writeUs);
  }
  if(mapPopup.classList.contains("modal-show") && evt.target != mapLink && !mapPopup.contains(evt.target)) {
    hide(mapPopup);
  }
});
