// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var radioBtn = document.querySelector(".radioBillAddBtn");
var billType = document.querySelector(".billItemTypeRadio");
var callElem = document.querySelector(".callTotalTwo");
var smsElem = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;
var billTotal = 0;

var radioInstance = radioBill();

function radioBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn) {
        var billItem = checkedRadioBtn.value;
        radioInstance.calculateTotals(billItem)
        totalTwo.classList.add(radioInstance.totalClassName())
        callElem.innerHTML = radioInstance.getTotalCallCost().toFixed(2)
        smsElem.innerHTML = radioInstance.getTotalSmsCost().toFixed(2)
        totalTwo.innerHTML = radioInstance.getTotalCost().toFixed(2)
    }
}

radioBtn.addEventListener("click", radioBtnClicked);




// var radioBtn = document.querySelector(".radioBillAddBtn");
// var billType = document.querySelector(".billItemTypeRadio");
// var callT = document.querySelector(".callTotalTwo");
// var smsT= document.querySelector(".smsTotalTwo");
// var total = document.querySelector(".totalTwo");

// var radioBillInstance = radioBill();

// function radioBill() {

//     var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  
//     var billItem = checkedRadioBtn.value;
    
//     radioBillInstance.radioBill(billItem);

//     callT.innerHTML = radioBillInstance.getCallCost().toFixed(2)
//     smsT.innerHTML = radioBillInstance.getSmsCost().toFixed(2)
//     total.innerHTML = radioBillInstance.getTotalCost().toFixed(2)
//     styleTotalColor();
// }

// function styleTotalColor() {
 
//     total.classList.remove("danger")
//     total.classList.remove("warning")

//     var currentStyle = radioBillInstance.styleTotalColor();
     
//     total.classList.add(currentStyle);
// }

// radioBtn.addEventListener("click", radioBtnClicked);

