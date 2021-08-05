input.onButtonPressed(Button.A, function () {
    basline = input.magneticForce(Dimension.Strength)
})
let basline = 0
radio.setGroup(179)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 4 + basline) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendString("P4FULL")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        radio.sendString("P4EMPTY")
    }
})
