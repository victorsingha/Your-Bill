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
var orderID = 1;
localStorage.setItem("itemID", itemID);
localStorage.setItem("orderID", orderID);

var _items = [];
var AllORDERS = [];

document.getElementById("orderID").innerHTML = localStorage.getItem("orderID");

function getitem() {
  _item = $("#item").val();
  // console.log(_item);
}
function getprice() {
  _price = $("#price").val();
  // console.log(_price);
}
function additem() {
  if (_item != "" && _price != "") {
    var _id = parseInt(localStorage.getItem("itemID"));
    var item = {
      itemID: _id,
      item: _item,
      price: _price,
    };
    _items.push(item);
    _id++;
    localStorage.setItem("itemID", _id);
    displayItems(_items);
  }
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
  if (_customer != "" && _phone != "") {
    var _id = parseInt(localStorage.getItem("orderID"));
    document.getElementById("orderID").innerHTML = parseInt(_id) + 1;
    var order = {
      orderId: _id,
      customer: _customer,
      phone: _phone,
      items: _items,
    };
    AllORDERS.push(order);
    _id++;
    localStorage.setItem("orderID", _id);
    _items = [];
    displayItems(_items);
    console.log(order);
    // console.log(AllORDERS);
  }
}

function displayItems(items) {
  var html = "";
  items.forEach((element) => {
    html =
      html +
      `       <div
  class="
    bg-gray-200
    rounded
    grid
    md:grid-cols-4
    w-full
    items-center
    justify-between
    py-3
    px-3
    mb-4
  "
>
  <p class="col-span-2">${element.item}</p>
  <p>$ ${element.price}</p>
  <div class="flex justify-end">
    <p
      onclick="deleteitem(${element.itemID})"
      class="
        bg-red-500
        px-5
        py-2
        rounded
        text-white
        hover:bg-red-900
        cursor-pointer
      "
    >
      Delete
    </p>
  </div>
</div>`;
  });
  document.getElementById("grid").innerHTML = html;
}

function deleteitem(itemID) {
  console.log(itemID);
  console.log(_items);
  removeByAttr(_items, "itemID", itemID);
  console.log(_items);
  displayItems(_items);
}
function removeByAttr(arr, attr, value) {
  var i = arr.length;
  while (i--) {
    if (
      arr[i] &&
      arr[i].hasOwnProperty(attr) &&
      arguments.length > 2 &&
      arr[i][attr] === value
    ) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
