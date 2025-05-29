// src/gestures/LetterLGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterL = new GestureDescription('L')

// Polegar e indicador estendidos
letterL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
letterL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)

// Os outros dedos totalmente curvados
letterL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
letterL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

export default letterL
