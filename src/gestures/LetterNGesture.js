// src/gestures/LetterNGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterN = new GestureDescription('N')

// Todos os dedos curvados
for (let finger of Finger.all) {
  letterN.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

export default letterN
