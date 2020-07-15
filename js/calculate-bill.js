//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
const calculateBtn = document.querySelector (".calculateBtn");
const billTotalElement = document.querySelector (".billTotal");
const billStringField = document.querySelector(".billString");
const billTotalSpanElement = document.querySelector (".total");



function calculateBtnClicked(){

    var billString = billStringField.value;
    const roundedBillTotal = totalPhoneBill (billString);
    
    billTotalElement.innerHTML = roundedBillTotal;
    styleTotalColor (roundedBillTotal);
    }

function styleTotalColor (roundedBillTotal) {
const currentTotal = Number (roundedBillTotal);

billTotalSpanElement.classList.remove ("critical");
billTotalSpanElement.classList.remove ("warning");

if (currentTotal >= 30 ) {
billTotalSpanElement.classList.add ("critical");


} else if (currentTotal >= 20 && currentTotal < 30 ) {
billTotalSpanElement.classList.add ("warning");

}
}



calculateBtn.addEventListener ("click", calculateBtnClicked);