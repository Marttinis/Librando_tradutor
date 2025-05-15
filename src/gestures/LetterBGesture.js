// src/gestures/LetterBGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterB = new GestureDescription('B')

// Todos os dedos estendidos
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterB.addCurl(finger, FingerCurl.NoCurl, 1.0)
}

export default letterB
