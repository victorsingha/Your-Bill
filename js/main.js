$("#add-item-form").submit(function (e) {
  return false;
});

var item = "";
var price = "";
var customer = "";
var phone = "";

function getitem() {
  item = $("#item").val();
  console.log(item);
}
function getprice() {
  price = $("#price").val();
  console.log(price);
}
function getcustomer() {
  customer = $("#customer").val();
  console.log(customer);
}
function getphone() {
  phone = $("#phone").val();
  console.log(phone);
}
function additem() {
  console.log(item + price);
}
