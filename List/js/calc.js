var sub1 = 0;
var tax = 0;
var dis = 0;
var total = 0;
var payment = 0;
var balance = 0;

document.getElementById("frm1").onclick = function () {
  var sub = 0;
  var chk = document.getElementsByName("orders");
  for (let i = 0; i < chk.length; i++) {
    if (chk[i].checked == true) {
      sub = sub + parseFloat(chk[i].value);
    }
  }
  // subtotal
  document.getElementById("sub").innerHTML = sub.toFixed(2);
  // tax
  sub1 = sub;
  tax = sub * 0.1;
  document.getElementById("tax").innerHTML = tax.toFixed(2);

  // gratetotal
  total = sub + tax - sub * dis * 0.01;
  document.getElementById("total").innerHTML = total.toFixed(2);

  // balance
  balance = total - payment;
  document.getElementById("balance").innerHTML = balance.toFixed(2);
};

// discounnt
