const form = document.querySelector(".article__form"),
      input = document.querySelector(".article__form--input"),
      label = document.querySelector(".article__form--label"),
      error = document.querySelector(".article__form--error"),
      submit = document.querySelector(".article__form--button");

const validate = (e)=>{
  e.preventDefault();
  const valueInput = input.value.trim();
  // console.log(valueInput);
  !isEmail(valueInput) ? error.style.display = "block" : error.style.display = "none";
}
const isEmail = input => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);


