$("#add-item-form").submit(function (e) {
  return false;
});

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
  order.item = $("#item").val();
  console.log(order.item);
}
function getprice() {
  order.price = $("#price").val();
  console.log(order.price);
}
function additem() {
  order.id = count;
  orders.push(order);
  count = count + 1;
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
