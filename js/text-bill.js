// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var type = document.querySelector(".billTypeText");
var button = document.querySelector(".addToBillBtn");
var callThree = document.querySelector(".callTotalOne");
var smsThree = document.querySelector(".smsTotalOne");
var totalThree = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;


const phoneBill = textBill();

function calculateBtnClicked() {
    var billString = type.value;
    phoneBill.calculateTotals(billString)
    totalThree.classList.add(phoneBill.totalClassName())
    

    callThree.innerHTML = phoneBill.getTotalCallCost().toFixed(2);
    smsThree.innerHTML = phoneBill.getTotalSmsCost().toFixed(2);
    totalThree.innerHTML = phoneBill.getTotalCost().toFixed(2)
}


button.addEventListener("click", calculateBtnClicked);