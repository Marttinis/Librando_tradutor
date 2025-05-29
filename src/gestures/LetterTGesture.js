// src/gestures/LetterTGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterT = new GestureDescription('T')

// Indicador e médio curvados
letterT.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
letterT.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)

// Anelar e mínimo curvados
letterT.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterT.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

// Polegar semicurlado
letterT.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)

export default letterT
