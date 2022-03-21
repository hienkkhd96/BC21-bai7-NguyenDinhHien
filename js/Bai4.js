const valuesB4 = document.querySelector(".values__bai4");
const buttonB4 = document.querySelector(".button__bai4");
const arr = new Array(10);
let statusB4 = false;
let newArr = Array.from(arr).map((element, index) => {
  return `<div class='pt-2 text-white'> div ${index}</div>`;
});
html = newArr.join("");
buttonB4.onclick = () => {
  if (statusB4 === false) {
    valuesB4.innerHTML = html;
    statusB4 = !statusB4;
    for (let i = 0; i < newArr.length; i++) {
      if (i % 2 === 0) {
        valuesB4.childNodes[i].style.backgroundColor = "red";
      } else {
        valuesB4.childNodes[i].style.backgroundColor = "blue";
      }
    }
  } else if (statusB4 === true) {
    valuesB4.innerHTML = "";
    statusB4 = !statusB4;
  }
};
