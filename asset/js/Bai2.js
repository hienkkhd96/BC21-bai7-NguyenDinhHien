const formB2 = document.getElementById("form__bai2");
const tenB2 = document.getElementById("bai2__ten");
const dienB2 = document.getElementById("bai2__sodien");
const valuesBai2 = document.querySelector(".values__bai2");
formB2.onsubmit = () => {
  const soDienB2 = dienB2.value;
  if (isNaN(soDienB2) * 1 || soDienB2 < 0) {
    dienB2.classList.add("is-invalid");
    formB2.classList.remove("was-validated");
    valuesBai2.innerText = "";
  } else {
    dienB2.classList.remove("is-invalid");
    if (soDienB2 <= 50) {
      valueB2 = soDienB2 * 500;
    } else if (soDienB2 <= 100) {
      valueB2 = (soDienB2 - 50) * 650 + 50 * 500;
    } else if (soDienB2 <= 200) {
      valueB2 = (soDienB2 - 100) * 850 + 50 * 650 + 50 * 500;
    } else if (soDienB2 <= 350) {
      valueB2 = (soDienB2 - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    } else {
      valueB2 =
        (soDienB2 - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    }
  }
  if (soDienB2 * 1 >= 0) {
    valuesBai2.innerText = `Số tiền ${
      tenB2.value
    } phải thanh toán là ${formatVnd.format(valueB2)}`;
  }
};
