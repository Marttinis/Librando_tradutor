// src/gestures/LetterVGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterV = new GestureDescription('V')

// Indicador e médio estendidos
letterV.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterV.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

// Anelar e mínimo curvados
letterV.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterV.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

// Polegar semicurlado
letterV.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)

export default letterV
