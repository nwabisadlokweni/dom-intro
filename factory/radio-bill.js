function radioBill() {
  
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }

    function calculateTotals(itemtype) {
        if(itemtype === 'call'){
            callCostTotal +=  2.75;   
        }
        if(itemtype === 'sms')
        smsCostTotal += 0.75;
    
}


    function getTotalCallCost() {
        return callCostTotal;
    }
    function getTotalSmsCost() {
        return smsCostTotal;
    }


    function hasReachedDangerLevel() {
        return getTotalCost() >= 50;
    }

    function totalClassName() {
        if (hasReachedDangerLevel()) {
            return "critical";
        }
        if (getTotalCost() >= 30) {
            return "warning";
        }
    }
    return {
        calculateTotals,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        hasReachedDangerLevel,
        totalClassName
    }


}