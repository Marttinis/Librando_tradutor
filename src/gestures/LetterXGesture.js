// src/gestures/LetterXGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterX = new GestureDescription('X')

// Indicador curvado
letterX.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)

// Todos os outros dedos completamente curvados
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterX.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

// Polegar semicurlado
letterX.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)

export default letterX
