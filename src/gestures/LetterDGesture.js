// src/gestures/LetterDGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterD = new GestureDescription('D')

// Indicador estendido
letterD.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)

// Outros dedos dobrados
for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterD.addCurl(finger, FingerCurl.FullCurl, 1.0)
  letterD.addCurl(finger, FingerCurl.HalfCurl, 0.9) // pequena variação permitida
}

export default letterD
