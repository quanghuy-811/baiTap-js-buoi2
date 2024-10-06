function getElement(selector) {
  return document.querySelector(selector);
}
// Sự kiện show password
function onClickPassword() {
  let password = getElement("#inputPassword");
  if (password.type === "text") {
    password.type = "password";
  } else {
    password.type = "text";
  }
  // password.focus();
}

// Sự kiện Tính lương nhân viên
function salaryCal() {
  let salary = getElement("#salary").value * 1;

  let numberDays = getElement("#numberDays").value * 1;

  getElement("#total span").innerHTML = salary * numberDays;
}

// xử lý sự kiện tính điểm trung bình
function score() {
  let number1 = getElement("#number1").value * 1;
  let number2 = getElement("#number2").value * 1;
  let number3 = getElement("#number3").value * 1;
  let number4 = getElement("#number4").value * 1;
  let number5 = getElement("#number5").value * 1;

  getElement("#average-score span").innerHTML =
    (number1 + number2 + number3 + number4 + number5) / 5;
}

// Xử lý sự kiện quy đổi tiền tệ

function convertUSD() {
  let priceUSD = getElement("#priceUSD").value * 1;
  let quantity = getElement("#quantity").value * 1;
  getElement("#totalUSD span").innerHTML = priceUSD * quantity;
}

// Xử lý sự kiện tính chu vi và diện tích hình chữ nhật
function rectangle() {
  let length = getElement("#length").value * 1;
  let width = getElement("#width").value * 1;
  getElement("#perimeter span").innerHTML = (length + width) * 2;
  getElement("#acreage span").innerHTML = length * width;
}
