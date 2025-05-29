// src/gestures/LetterJGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterJ = new GestureDescription('J')

// Igual ao gesto da letra I
letterJ.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring]) {
  letterJ.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

export default letterJ
