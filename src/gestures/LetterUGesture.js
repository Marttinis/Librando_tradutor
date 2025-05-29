// src/gestures/LetterUGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterU = new GestureDescription('U')

// Indicador e médio estendidos
letterU.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterU.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

// Anelar e mínimo curvados
letterU.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterU.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

// Polegar semicurlado
letterU.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)

export default letterU
