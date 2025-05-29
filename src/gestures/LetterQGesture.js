// src/gestures/LetterQGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterQ = new GestureDescription('Q')

// Indicador e polegar estendidos
letterQ.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterQ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)

// Os outros dedos curvados
letterQ.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
letterQ.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterQ.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

export default letterQ
