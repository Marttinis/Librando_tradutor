// src/gestures/LetterOGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterO = new GestureDescription('O')

// Todos os dedos semicurlados para formar um círculo
for (let finger of Finger.all) {
  letterO.addCurl(finger, FingerCurl.HalfCurl, 1.0)
}

export default letterO
