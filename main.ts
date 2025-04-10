input.onPinPressed(TouchPin.P0, function () {
    basic.showString("WIN!")
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
})
