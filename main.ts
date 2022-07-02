devices.onGamepadButton(MesDpadButtonInfo._3Up, function () {
    RingbitCar.brake()
})
devices.onGamepadButton(MesDpadButtonInfo._4Up, function () {
    RingbitCar.brake()
})
devices.onGamepadButton(MesDpadButtonInfo._2Up, function () {
    RingbitCar.brake()
})
devices.onGamepadButton(MesDpadButtonInfo._3Down, function () {
    RingbitCar.turnleft()
})
devices.onGamepadButton(MesDpadButtonInfo._1Up, function () {
    RingbitCar.brake()
})
devices.onGamepadButton(MesDpadButtonInfo._4Down, function () {
    RingbitCar.turnright()
})
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    RingbitCar.forward()
})
devices.onGamepadButton(MesDpadButtonInfo._2Down, function () {
    RingbitCar.back()
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    for (let index = 0; index < 10; index++) {
        basic.showArrow(ArrowNames.West)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 30)
        basic.pause(200)
        basic.showArrow(ArrowNames.East)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 30)
        basic.pause(200)
    }
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Ghost)
basic.pause(500)
basic.showIcon(IconNames.Skull)
basic.pause(500)
basic.forever(function () {
	
})
