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

var itemID = 1;
var billID = 1;
localStorage.setItem("itemID", itemID);
localStorage.setItem("billId", billID);

var _orders = [];
var AllORDERS = [];

function getitem() {
  _item = $("#item").val();
  // console.log(_item);
}
function getprice() {
  _price = $("#price").val();
  // console.log(_price);
}
function additem() {
  var _id = localStorage.getItem("itemID");
  var item = {
    itemID: _id,
    item: _item,
    price: _price,
  };
  _orders.push(item);
  _id++;
  localStorage.setItem("itemID", _id);
}
function getcustomer() {
  _customer = $("#customer").val();
  // console.log(_customer);
}
function getphone() {
  _phone = $("#phone").val();
  // console.log(_phone);
}
function generatebill() {
  var _id = localStorage.getItem("billID");
  var bill = {
    billId: _id,
    customer: _customer,
    phone: _phone,
    orders: _orders,
  };
  AllORDERS.push(bill);
  _id++;
  localStorage.setItem("billID", _id);
  console.log(bill);
}
