const formB4 = document.getElementById("form__bai4");
const maKhB4 = document.getElementById("bai4__ten");
const loaiKhB4 = document.getElementById("bai4__select");
const soKnB4 = document.getElementById("bai4__sokn");
const soKenhB4 = document.getElementById("bai4__sokenh");
const hiddenB4 = document.querySelector(".bai4__hidden");
const valuesB4 = document.querySelector(".values__bai4");
let tienCap = 0;
const caNhan = {
  invoiceFee: 4.5,
  service: 20.5,
  premium: 7.5,
};
const doanhNghiep = {
  invoiceFee: 15,
  service: 7.5,
  premium: 50,
};
console.log(loaiKhB4.value);
if (loaiKhB4.value === "cn") {
  hiddenB4.setAttribute("hidden", "hidden");
}
loaiKhB4.onchange = () => {
  valuesB4.innerText = "";
  if (loaiKhB4.value === "cn") {
    hiddenB4.setAttribute("hidden", "hidden");
  }
  if (loaiKhB4.value === "dn") {
    hiddenB4.removeAttribute("hidden");
  }
};
formB4.onsubmit = () => {
  if (loaiKhB4.value === "cn") {
    tienCap =
      caNhan.invoiceFee + caNhan.service + caNhan.premium * soKenhB4.value;
  } else if (loaiKhB4.value === "dn" && soKnB4.value * 1 <= 10) {
    tienCap =
      doanhNghiep.invoiceFee +
      doanhNghiep.service * soKnB4.value +
      doanhNghiep.premium * soKenhB4.value;
  } else {
    tienCap =
      doanhNghiep.invoiceFee +
      doanhNghiep.service * 10 +
      (soKnB4.value * 1 - 10) * 5 +
      doanhNghiep.premium * soKenhB4.value;
  }
  valuesB4.innerText = `Số tiền cáp ${maKhB4.value} là: ${tienCap}$`;
};
