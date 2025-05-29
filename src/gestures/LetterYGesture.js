// src/gestures/LetterYGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterY = new GestureDescription('Y')

// Mínimo e polegar estendidos
letterY.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
letterY.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)

// Os outros dedos curvados
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  letterY.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

export default letterY
