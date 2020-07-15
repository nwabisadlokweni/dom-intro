describe("use values", function () {
    it("should be able to make calls", function () {
        let radioBtn = radioBill();

        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");

        assert.equal(5.50, radioBtn.getTotalCost());
        assert.equal(5.50, radioBtn.getTotalCallCost());
        assert.equal(0.00, radioBtn.getTotalSmsCost());
    })

    it("should be able to send sms's", function () {
        let radioBtn = radioBill();

        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");

        assert.equal(1.50, radioBtn.getTotalCost());
        assert.equal(0.00, radioBtn.getTotalCallCost());
        assert.equal(1.50, radioBtn.getTotalSmsCost());
    })
});


describe("warning & danger level", function () {
    it("it should return a class name of 'warning' if warning level is reached", function () {
        let radioBtn = radioBill();

        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        
        
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");

        assert.equal("warning", radioBtn.totalClassName());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let radioBtn = radioBill();

        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
    
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
       

        assert.equal("critical", radioBtn.totalClassName());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let radioBtn = textBill();

        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        
        
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");

        assert.equal(27.50, radioBtn.getTotalCallCost());
        assert.equal(4.50, radioBtn.getTotalSmsCost());
        assert.equal("warning", radioBtn.totalClassName());

    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let radioBtn = textBill();

        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
        radioBtn.calculateTotals("call");
    
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");
        radioBtn.calculateTotals("sms");

        assert.equal(41.25, radioBtn.getTotalCallCost());
        assert.equal(11.25, radioBtn.getTotalSmsCost());
        assert.equal("critical", radioBtn.totalClassName());

    });
});