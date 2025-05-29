// src/gestures/LetterMGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterM = new GestureDescription('M')

// Todos os dedos curvados
for (let finger of Finger.all) {
  letterM.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

export default letterM
