describe("use values", function () {
    it("should be able to make calls", function () {
        let txtBill = textBill();

        txtBill.makeCall();
        txtBill.makeCall();

        assert.equal(5.50, txtBill.getTotalCost());
        assert.equal(5.50, txtBill.getTotalCallCost());
        assert.equal(0.00, txtBill.getTotalSmsCost());
    })

    it("should be able to send sms's", function () {
        let txtBill = textBill();

        txtBill.sendSms();
        txtBill.sendSms();

        assert.equal(1.50, txtBill.getTotalCost());
        assert.equal(0.00, txtBill.getTotalCallCost());
        assert.equal(1.50, txtBill.getTotalSmsCost());
    })
});


describe("warning & danger level", function () {
    it("it should return a class name of 'warning' if warning level is reached", function () {
        let txtBill = textBill();

        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();

        assert.equal("warning", txtBill.totalClassName());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let txtBill = textBill();

        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();

        assert.equal("danger", txtBill.totalClassName());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let txtBill = textBill();

        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();

        assert.equal(27.50, txtBill.getTotalCallCost());
        assert.equal(4.50, txtBill.getTotalSmsCost());
        assert.equal("warning", txtBill.totalClassName());

    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let txtBill = textBill();

        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        txtBill.makeCall();
        
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();
        txtBill.sendSms();

        assert.equal(41.25, txtBill.getTotalCallCost());
        assert.equal(9.00, txtBill.getTotalSmsCost());
        assert.equal("danger", txtBill.totalClassName());

    });
});