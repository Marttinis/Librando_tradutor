// src/gestures/LetterCGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterC = new GestureDescription('C')

// Todos os dedos com dobra parcial (meio-curvados)
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterC.addCurl(finger, FingerCurl.HalfCurl, 1.0)
  letterC.addCurl(finger, FingerCurl.NoCurl, 0.5) // aceita um pouco mais esticado
}

export default letterC
