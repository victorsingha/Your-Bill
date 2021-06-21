$("#add-item-form").submit(function (e) {
  return false;
});

var item = "";
var price = "";
var customer = "";
var phone = "";

var count = 1;
var order = {
  id: "",
  item: "",
  price: "",
};

var orders = [];

function getitem() {
  item = $("#item").val();
  console.log(item);
}
function getprice() {
  price = $("#price").val();
  console.log(price);
}
function additem() {
  order.id = count;
  order.item = item;
  order.price = price;
  orders.push(order);
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
