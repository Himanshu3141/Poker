const bank = document.getElementById("bank");

const p1value = document.getElementById("1");
const p2value = document.getElementById("2");
const p3value = document.getElementById("3");
const p4value = document.getElementById("4");
const p5value = document.getElementById("5");
const p6value = document.getElementById("6");

const p1btn = document.getElementById("btn1");
const p2btn = document.getElementById("btn2");
const p3btn = document.getElementById("btn3");
const p4btn = document.getElementById("btn4");
const p5btn = document.getElementById("btn5");
const p6btn = document.getElementById("btn6");

let p1 = parseInt(1000000);
let p2 = parseInt(1000000);
let p3 = parseInt(1000000);
let p4 = parseInt(1000000);
let p5 = parseInt(1000000);
let p6 = parseInt(1000000);

let bvalue = parseInt(0);

p1value.innerText = p1;
p2value.innerText = p2;
p3value.innerText = p3;
p4value.innerText = p4;
p5value.innerText = p5;
p6value.innerText = p6;  // Now Player 6's value is correctly initialized.

p1btn.onclick = function () {
  var v1 = parseInt(document.getElementById("inp1").value);
  if (isNaN(v1) || v1 <= 0) {
    alert("Please enter a valid positive number");
    return;
  }
  bvalue += v1;
  bank.innerText = bvalue;
  p1 -= v1;
  p1value.innerText = p1;
};

p2btn.onclick = function () {
  var v2 = parseInt(document.getElementById("inp2").value);
  if (isNaN(v2) || v2 <= 0) {
    alert("Please enter a valid positive number");
    return;
  }
  bvalue += v2;
  bank.innerText = bvalue;
  p2 -= v2;
  p2value.innerText = p2;
};

p3btn.onclick = function () {
  var v3 = parseInt(document.getElementById("inp3").value);
  if (isNaN(v3) || v3 <= 0) {
    alert("Please enter a valid positive number");
    return;
  }
  bvalue += v3;
  bank.innerText = bvalue;
  p3 -= v3;
  p3value.innerText = p3;
};

p4btn.onclick = function () {
  var v4 = parseInt(document.getElementById("inp4").value);
  if (isNaN(v4) || v4 <= 0) {
    alert("Please enter a valid positive number");
    return;
  }
  bvalue += v4;
  bank.innerText = bvalue;
  p4 -= v4;
  p4value.innerText = p4;
};

p5btn.onclick = function () {
  var v5 = parseInt(document.getElementById("inp5").value);
  if (isNaN(v5) || v5 <= 0) {
    alert("Please enter a valid positive number");
    return;
  }
  bvalue += v5;
  bank.innerText = bvalue;
  p5 -= v5;
  p5value.innerText = p5;
};

p6btn.onclick = function () {
  var v6 = parseInt(document.getElementById("inp6").value); // Convert input to integer
  if (isNaN(v6) || v6 <= 0) {
    alert("Please enter a valid positive number");
    return;
  }
  bvalue += v6; 
  bank.innerText = bvalue;
  p6 -= v6;
  p6value.innerText = p6;
};

document.getElementById("reset").onclick = function () {
  const id = document.getElementById("winner").value;
  switch (id) {
    case "1":
      p1 += bvalue;
      p1value.innerText = p1;
      break;
    case "2":
      p2 += bvalue;
      p2value.innerText = p2;
      break;
    case "3":
      p3 += bvalue;
      p3value.innerText = p3;
      break;
    case "4":
      p4 += bvalue;
      p4value.innerText = p4;
      break;
    case "5":
      p5 += bvalue;
      p5value.innerText = p5;
      break;
    case "6":
      p6 += bvalue;
      p6value.innerText = p6;
      break;
  }
  bvalue = 0;
  bank.innerText = bvalue;
};
