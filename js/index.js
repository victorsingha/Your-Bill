$(function () {
  $("#content").load("../pages/main.html");
  $("#home").addClass("text-purple-500");
});

$(document).ready(function () {
  $("#home").click(function () {
    $("#content").load("../pages/main.html");
    $("#home").addClass("text-purple-500");
    $("#allorders").removeClass("text-purple-500");
    $("#aboutus").removeClass("text-purple-500");
    $("#contact").removeClass("text-purple-500");
  });
});
$(document).ready(function () {
  $("#allorders").click(function () {
    $("#content").load("../pages/allorders.html");
    $("#home").removeClass("text-purple-500");
    $("#allorders").addClass("text-purple-500");
    $("#aboutus").removeClass("text-purple-500");
    $("#contact").removeClass("text-purple-500");
  });
});
$(document).ready(function () {
  $("#aboutus").click(function () {
    $("#content").load("../pages/aboutus.html");
    $("#home").removeClass("text-purple-500");
    $("#allorders").removeClass("text-purple-500");
    $("#aboutus").addClass("text-purple-500");
    $("#contact").removeClass("text-purple-500");
  });
});
$(document).ready(function () {
  $("#contact").click(function () {
    $("#content").load("../pages/contact.html");
    $("#home").removeClass("text-purple-500");
    $("#allorders").removeClass("text-purple-500");
    $("#aboutus").removeClass("text-purple-500");
    $("#contact").addClass("text-purple-500");
  });
});
