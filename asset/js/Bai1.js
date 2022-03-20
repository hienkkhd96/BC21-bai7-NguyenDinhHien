const formB1 = document.getElementById("form__bai1");
const diem1 = document.querySelector("#form__bai1 .input__diem1");
const diem2 = document.querySelector("#form__bai1 .input__diem2");
const diem3 = document.querySelector("#form__bai1 .input__diem3");
const kVuc = document.querySelector("#form__bai1 #form-select1");
const dTuong = document.querySelector("#form__bai1 #form-select2");
const diemHd = document.querySelector("#form__bai1 .input__diemhd");
const submitB1 = document.querySelector("#form__bai1 .submit__bai1");
const valuesB1 = document.querySelector("#form__bai1 .values__bai1");
let inputB1 = document.querySelectorAll("#form__bai1 input");
let ketQua = "";
formB1.onsubmit = () => {
  for (let i = 0; i < inputB1.length - 1; i++) {
    if (
      isNaN(inputB1[i].value) == true ||
      inputB1[i].value * 1 < 0 ||
      inputB1[i].value * 1 > 10
    ) {
      inputB1[i].classList.add("is-invalid");
      formB1.classList.remove("was-validated");
      valuesB1.innerText = "";
    } else {
      inputB1[i].classList.remove("is-invalid");
      if (
        isNaN(diemHd.value) === true ||
        diemHd.value * 1 < 0 ||
        diemHd.value * 1 > 30
      ) {
        diemHd.classList.add("is-invalid");
        formB1.classList.remove("was-validated");
        valuesB1.innerText = "";
      } else {
        diemHd.classList.remove("is-invalid");
        const tongDiem =
          diem1.value * 1 +
          diem2.value * 1 +
          diem3.value * 1 +
          kVuc.value * 1 +
          dTuong.value * 1;
        if (
          diem1.value * 1 > 0 &&
          diem2.value * 1 > 0 &&
          diem3.value * 1 > 0 &&
          tongDiem >= diemHd.value * 1
        ) {
          ketQua = "Đậu";
        } else {
          ketQua = "Rớt";
        }
        if (tongDiem) {
          valuesB1.innerText = `Thí sinh ${ketQua}`;
        }
      }
    }
  }
};
