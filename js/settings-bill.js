// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var buttonSettings = document.querySelector(".updateSettings");
var buttonAddElement = document.querySelector(".buttonAdd");

var billItemType = document.querySelector(".billItemTypeWithSettings");
var callTotalElement = document.querySelector(".callTotalSettings");
var smsTotalElement = document.querySelector(".smsTotalSettings");
var total = document.querySelector(".totalSettings");

var callCost = document.querySelector(".callCostSetting");
var smsCost = document.querySelector(".smsCostSetting");
var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");

const settingsBill = BillWithSettings();


function buttonSettingsClicked() {
  settingsBill.setCallCost(Number(callCost.value));
  settingsBill.setSmsCost(Number(smsCost.value));
  settingsBill.setCriticalLevel(Number(criticalLevel.value));
  settingsBill.setWarningLevel(Number(warningLevel.value));
  color()
}

function buttonAddElementClicked() {
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (checkedRadioBtn) {
    var billItemEnter = checkedRadioBtn.value;

    if (billItemEnter === "call") {
      settingsBill.makeCall()
    }
    else if (billItemEnter === "sms") {
      settingsBill.sendSms()
    }
  }

  callTotalElement.innerHTML = settingsBill.getTotalCallCost().toFixed(2);
  smsTotalElement.innerHTML = settingsBill.getTotalSmsCost().toFixed(2);

  total.innerHTML = settingsBill.getTotalCost().toFixed(2);

  color()
}




function color() {
  total.classList.remove("critical");
  total.classList.remove("warning");
  total.classList.add(settingsBill.totalClassName())
}
buttonAddElement.addEventListener("click", buttonAddElementClicked);
buttonSettings.addEventListener("click", buttonSettingsClicked);