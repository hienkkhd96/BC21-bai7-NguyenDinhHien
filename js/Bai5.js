const formB5 = document.querySelector(".form__bai5");
const soBai5 = document.querySelector("#so__bai5");
const valuesB5 = document.querySelector(".values__bai5");
let arrPrime = [];
/*Tạo hàm kiểm tra số nguyên tố trong JavaScript*/
function isprime(n) {
  //flag = 0 => không phải số nguyên tố
  //flag = 1 => số nguyên tố

  let flag = 1;

  /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
  if (n < 2) return (flag = 0);
  else if (n % 2 == 0 && n != 2) {
    return (flag = 0);
  } else if (n % 3 == 0 && n != 3) {
    return (flag = 0);
  } else if (n % 5 == 0 && n != 5) {
    return (flag = 0);
  } else if (n % 7 == 0 && n != 7) {
    return (flag = 0);
  } else {
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while (i < n) {
      if (n % i == 0) {
        flag = 0;
        break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
      }
      i++;
    }
  }

  return flag;
}
let count = 0;
formB5.onsubmit = () => {
  if (isNaN(soBai5.value * 1) === true || soBai5.value * 1 < 2) {
    soBai5.classList.add("is-invalid");
    formB5.classList.remove("was-validated");
    valuesB5.innerText = "";
  } else {
    soBai5.classList.remove("is-invalid");
    if (soBai5.value * 1 < 2) {
      arrPrime = [];
    } else {
      for (let n = 2; n < soBai5.value * 1; n++) {
        if (isprime(n) === 1) {
          arrPrime.push(n);
        }
      }
      if (arrPrime.length < 1) {
        valuesB5.innerText = `Không có số nguyên tố nào từ 1 đến ${soBai5.value}`;
      } else {
        const html = arrPrime.map((item) => {
          return `<span>${item}</span>`;
        });
        valuesB5.innerHTML = `<p> Số nguyên tố từ 1 đến ${
          soBai5.value
        } là:</p> ${html.join(",")}`;
        console.log(arrPrime);
      }
      arrPrime = [];
    }
  }
};
