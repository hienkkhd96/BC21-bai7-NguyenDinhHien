const formB3 = document.getElementById("form__bai3");
const tenB3 = document.getElementById("bai3__ten");
const B3Input__1 = document.getElementById("bai3__thunhap");
const B3Input__2 = document.getElementById("bai3__songuoi");
const valuesBai3 = document.querySelector(".values__bai3");
formB3.onsubmit = () => {
  const thuNhapB3 = B3Input__1.value;
  const soNguoiB3 = B3Input__2.value;
  if (isNaN(thuNhapB3 * 1) || isNaN(soNguoiB3 * 1)) {
    if (isNaN(thuNhapB3 * 1)) {
      B3Input__1.classList.add("is-invalid");
      formB3.classList.remove("was-validated");
      valuesBai3.innerText = "";
    }
    if (isNaN(soNguoiB3 * 1)) {
      B3Input__2.classList.add("is-invalid");
      formB3.classList.remove("was-validated");
      valuesBai3.innerText = "";
    }
  } else {
    B3Input__1.classList.remove("is-invalid");
    B3Input__2.classList.remove("is-invalid");
    if (thuNhapB3 <= 60) {
      tienThue = (thuNhapB3 * 5) / 100 - 4 - soNguoiB3 * 1.6;
    } else if (thuNhapB3 <= 120) {
      tienThue = (thuNhapB3 * 10) / 100 - 4 - soNguoiB3 * 1.6;
    } else if (thuNhapB3 <= 210) {
      tienThue = (thuNhapB3 * 15) / 100 - 4 - soNguoiB3 * 1.6;
    } else if (thuNhapB3 <= 384) {
      tienThue = (thuNhapB3 * 20) / 100 - 4 - soNguoiB3 * 1.6;
    } else if (thuNhapB3 <= 624) {
      tienThue = (thuNhapB3 * 25) / 100 - 4 - soNguoiB3 * 1.6;
    } else if (thuNhapB3 <= 960) {
      tienThue = (thuNhapB3 * 30) / 100 - 4 - soNguoiB3 * 1.6;
    } else {
      tienThue = (thuNhapB3 * 35) / 100 - 4 - soNguoiB3 * 1.6;
    }
    if (tienThue <= 0) {
      valuesBai3.innerText = `Số tiền thuế ${tenB3.value} phải trả là 0 đồng `;
    } else {
      valuesBai3.innerText = `Số tiền thuế ${
        tenB3.value
      } phải trả là ${formatVnd.format(tienThue.toFixed(3) * 1000000)} `;
    }
  }
};
