// src/gestures/LetterGGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterG = new GestureDescription('G')

// Indicador estendido
letterG.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)

// Polegar meio curvado (pode apontar ao lado)
letterG.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)
letterG.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)

// Outros dedos dobrados
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterG.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

export default letterG
