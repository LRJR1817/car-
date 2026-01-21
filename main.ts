input.onButtonPressed(Button.A, function () {
    MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
})
input.onButtonPressed(Button.B, function () {
    MiniCar.motor(Motorlist.M1, Direction1.Backward, 0)
    MiniCar.motor(Motorlist.M2, Direction1.Backward, 0)
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 E C5 E C5 E C5 E ", 120), music.PlaybackMode.UntilDone)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
    basic.pause(100)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
    basic.pause(100)
})
