// src/gestures/LetterWGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterW = new GestureDescription('W')

// Indicador, médio e anelar estendidos
letterW.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterW.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
letterW.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)

// Mínimo curvado
letterW.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

// Polegar semicurlado
letterW.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)

export default letterW
