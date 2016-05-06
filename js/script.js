var login = document.querySelector(".btn-map-contact");
var feedb = document.querySelector(".feedback");
var close = feedb.querySelector(".feedback-cancel");
var username = feedb.querySelector("[name=user-name]");
var useremail = feedb.querySelector("[name=user-email]")
var form = feedb.querySelector("form");
var storage = localStorage.getItem("login");

login.addEventListener("click", function(event){
  event.preventDefault();
  feedb.classList.add("feedback-show");
  if (storage) {
    login.value = storage;
  } else {
    username.focus();
  }
});

close.addEventListener("click", function(event){
  event.preventDefault();
  feedb.classList.remove("feedback-show");
  feedb.classList.remove("feedback-error");
});

form.addEventListener("submit", function(event){
  if (!username.value || !useremail.value) {
    event.preventDefault();
    feedb.classList.remove("feedback-error");
    feedb.offsetWidth = feedb.offsetWidth;
    feedb.classList.add("feedback-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedb.classList.contains("feedback-show")) {
      feedb.classList.remove("feedback-show");
      feedb.classList.remove("feedback-error");
    }
  }
});
