const head1 = document.querySelector("h1");
head1.setAttribute("style", "text-align:center; font-family:times; font-size:50px; word-spacing:6px; margin-top:3%;");
document.querySelector("h2").setAttribute("style", "font-family:times ; word-spacing:5px;");
const container = document.querySelector(".card");
container.setAttribute("style", "padding-top: 2%; padding-left:3%; padding-right:3%; border:thick dotted black; width:60%; height:400px; margin:auto; margin-top:3%;");

const textBox = document.querySelector("#textbox");
textBox.setAttribute("style", "width:99%; height:150px; margin-top:2%; margin-bottom:2%; font-size:80px; text-align:center;");

const button = document.querySelector("#generate");
button.setAttribute("style", "color:black; font-size:20px; margin-top:2%; font-family:times;");

const copyButton = document.querySelector("#copy");
copyButton.setAttribute("style", "color:black; font-size:20px; margin-top:2%; font-family:times;");

let len;
let containSpecial;
let containNumber;
let containLow;
let containUp;

let number = "0123456789";
let lowcase = "abcdefghijklmnopqrstuvwxyz";
let upcase = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
let specialChar = "~!@#$%^&*()-+?<>;.,=";

let finalPassword = [];

button.addEventListener("click", function () {
    finalPassword = [];
    len = parseInt(prompt("How long is your password?"));
    while (len < 8 || len > 128) {
        len = parseInt(prompt("Password length must be between 8 to 128 characters."));
    }
    containSpecial = confirm("Do you want your password to contain special character?");
    containNumber = confirm("Do you want your password to contain numbers?");
    containLow = confirm("Do you want your password to contain lowercase character?");
    containUp = confirm("Do you want your password to contain uppercase character?");

    let allChar = "";

    if (containSpecial) {
        finalPassword.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
        allChar = allChar + specialChar;
        len--;
    }
    if (containNumber) {
        finalPassword.push(number[Math.floor(Math.random() * number.length)]);
        allChar = allChar + number;
        len--;
    }
    if (containUp) {
        finalPassword.push(upcase[Math.floor(Math.random() * upcase.length)]);
        allChar = allChar + upcase;
        len--;
    }
    if (containLow) {
        finalPassword.push(lowcase[Math.floor(Math.random() * lowcase.length)]);
        allChar = allChar + lowcase;
        len--;
    }
    if (containSpecial === false && containNumber === false && containUp === false && containLow === false) {
        finalPassword = [];
        alert("You must chose at least one character type!");
    }
    for (let i = 0; i < len; i++) {
        finalPassword.push(allChar[Math.floor(Math.random() * allChar.length)]);
    }

    finalPassword = finalPassword.sort(function () {
        return 0.5 - Math.random();
    });

    finalPassword = finalPassword.join("")
    textBox.value = finalPassword;
})

copyButton.addEventListener("click", function () {
    const el = document.createElement('textarea');
    const password = finalPassword;
    if (!password) {
        return;
    }
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Password Copied!");
})