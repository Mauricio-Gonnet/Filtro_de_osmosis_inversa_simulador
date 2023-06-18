basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
