//jshint esversion:6

const button = document.querySelector(".button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const password = document.querySelector(".password");
const email = document.querySelector(".emailAddress");
const inpt = document.querySelectorAll("input");


function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}


button.addEventListener("click", function(){
  if(document.Form.FirstName.value === ''){
    firstName.classList.add("err");
    lastName.style.marginTop = '16px';
  }
  if(document.Form.LastName.value === ''){
    lastName.classList.add("err");
    email.style.marginTop = '16px';
  }
  if(document.Form.EmailAddress.value === ''){
    email.classList.add("err");
    password.style.marginTop = '16px';
  }else if (!ValidateEmail(document.Form.EmailAddress)) {
    email.dataset.content = 'Looks like this is not an email';
    email.classList.add("err");
    password.style.marginTop = '16px';
  }
  if(document.Form.Password.value === ''){
    password.classList.add("err");
    button.style.marginTop = '16px';
  }else if (document.Form.Password.value.length < 8) {
    password.dataset.content = 'Password should be of atleast 8 characters';
    password.classList.add("err");
    button.style.marginTop = '16px';
  }

  inpt.forEach((input) => {
    input.addEventListener('click', function(){
      document.querySelectorAll("form div").forEach((div) => {
        div.classList.remove("err");
        div.style.margin= 0;
        button.style.marginBottom = '8px';
      });
    });
  });

});
