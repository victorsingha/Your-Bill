document.querySelector("#generate-btn").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
  },
  false
);

const cipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text) =>
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

const decipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
};

// var KEY = "MY_SECRET_KEY";
// var plainText = "Hello World";
// const myCipher = cipher(KEY);
// const encrypted = myCipher(plainText); // --> "7c606d287b6d6b7a6d7c287b7c7a61666f"
// console.log(encrypted);

// const myDecipher = decipher(KEY);
// const decrypted = myDecipher(encrypted); // --> 'the secret string'
// console.log(decrypted);

var _company = "";
var _key = "";
function getCompany() {
  _company = $("#company").val();
  console.log(_company);
}
function getKey() {
  _key = $("#key").val();
  console.log(_key);
}
function generateToken() {
  if (_key == "" && _company == "") {
    var token = localStorage.getItem("token");
    document.getElementById("token").innerHTML = token;
  } else {
    const myCipher = cipher(_key);
    const encrypted = myCipher(_company);
    console.log(encrypted);

    document.getElementById("token").innerHTML = encrypted;
    localStorage.setItem("token", encrypted);
  }
}
