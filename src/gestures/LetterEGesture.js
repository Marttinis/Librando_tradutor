// src/gestures/LetterEGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterE = new GestureDescription('E')

// Todos os dedos meio curvados ou totalmente curvados
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterE.addCurl(finger, FingerCurl.HalfCurl, 1.0)
  letterE.addCurl(finger, FingerCurl.FullCurl, 0.9) // permite um pouco mais fechado
}

export default letterE
