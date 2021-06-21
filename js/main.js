// $("#add-item-form").submit(function (e) {
//   return false;
// });
document.querySelector("#add-btn").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
  },
  false
);
document.querySelector("#generate-btn").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
  },
  false
);

var _item = "";
var _price = "";
var _customer = "";
var _phone = "";

var count = 1;
localStorage.setItem("id", count);

var orders = [];

function getitem() {
  _item = $("#item").val();
  console.log(_item);
}
function getprice() {
  _price = $("#price").val();
  console.log(_price);
}
function additem() {
  var _id = localStorage.getItem("id");
  var order = {
    id: _id,
    item: _item,
    price: _price,
  };
  orders.push(order);
  _id++;
  localStorage.setItem("id", _id);
}
function getcustomer() {
  customer = $("#customer").val();
  console.log(customer);
}
function getphone() {
  phone = $("#phone").val();
  console.log(phone);
}
function generatebill() {
  console.log(orders);
}
