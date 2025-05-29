// src/gestures/LetterPGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterP = new GestureDescription('P')

// Igual à letra K: indicador e médio estendidos, o resto curvado
letterP.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterP.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

letterP.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterP.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
letterP.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)

export default letterP
