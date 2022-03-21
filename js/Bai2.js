const formB2 = document.querySelector(".form__bai2");
const submitB2 = document.querySelector(".submit__bai2");
const soNBai2 = document.querySelector("#soN__bai2");
const soXBai2 = document.querySelector("#soX__bai2");
const valuesB2 = document.querySelector(".values__bai2");
let valueSn = 0;
formB2.onsubmit = () => {
  if (isNaN(Number(soXBai2.value)) === true) {
    soXBai2.classList.add("is-invalid");
    formB2.classList.remove("was-validated");
    valuesB2.innerText = "";
  } else {
    soXBai2.classList.remove("is-invalid");
    for (let i = 1; i <= soNBai2.value * 1; i++) {
      valueSn = Number(soXBai2.value) ** i + valueSn;
      console.log(valueSn);
    }
    valuesB2.innerText = `Kết quả S(n)=${valueSn}`;
    valueSn = 0;
  }
};
