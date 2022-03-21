const formB3 = document.querySelector(".form__bai3");
const soNBai3 = document.querySelector("#soN__bai3");
const valuesB3 = document.querySelector(".values__bai3");
let factorial = 1;
formB3.onsubmit = () => {
  for (let i = 1; i <= soNBai3.value * 1; i++) {
    factorial = factorial * i;
  }
  if (!!soNBai3.value) valuesB3.innerText = `${soNBai3.value}! = ${factorial}`;
  factorial = 1;
};
