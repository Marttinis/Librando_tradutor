// src/gestures/LetterSGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterS = new GestureDescription('S')

// Todos os dedos curvados
for (let finger of Finger.all) {
  letterS.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

export default letterS
