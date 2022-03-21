const valueB1 = document.getElementsByClassName("values__bai1");
const baiTap1 = () => {
  let i = 0;
  let n = 0;
  while (i <= 1000) {
    n = n + 1;
    i = i + n;
  }
  valueB1[0].innerText = `Số thỏa mã điều kiện trên là ${n}`;
};
baiTap1();
