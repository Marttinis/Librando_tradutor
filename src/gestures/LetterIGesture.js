// src/gestures/LetterIGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterI = new GestureDescription('I')

// Mindinho estendido
letterI.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)

// Os outros dedos totalmente curvados
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring]) {
  letterI.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

export default letterI
