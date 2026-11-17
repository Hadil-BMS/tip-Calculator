let bill_input = document.getElementById("bill-input");
let tip_btns_container = document.getElementById("tip-btns"); // the whole div
let tip_btns = tip_btns_container.querySelectorAll("button"); // all the buttons
let custom = document.getElementById("custom-input");
let people = document.getElementById("number-people");
let tipAmountOutput = document.getElementById("tip-amount-output");
let total = document.getElementById("total");
let resetBtn = document.getElementById("resetBtn");
let peopleError = document.getElementById("people-error");


function calculateTip(tipPercent) {
  let bill = parseFloat(bill_input.value);
  let num = parseFloat(people.value);

  if (isNaN(bill) || bill <= 0 || isNaN(num) || num <= 0) {
    tipAmountOutput.textContent = "$0.00";
    total.textContent = "$0.00";
    return;
  }

  let tipPerPerson = (bill * tipPercent) / num;
  let totalPerPerson = (bill / num) + tipPerPerson;

  tipAmountOutput.textContent = `$${tipPerPerson.toFixed(2)}`;
  total.textContent = `$${totalPerPerson.toFixed(2)}`;
}
tip_btns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    tip_btns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    let percentage = parseInt(btn.textContent) / 100;
    calculateTip(percentage);
  });
});

custom.addEventListener("input", function() {
  tip_btns.forEach(b => b.classList.remove("active"));
  let customValue = parseFloat(custom.value) / 100;
  calculateTip(customValue);
});

resetBtn.addEventListener("click", function() {
  bill_input.value = "";
  people.value = "";
  custom.value = "";

  tipAmountOutput.textContent = "$0.00";
  total.textContent = "$0.00";
});
