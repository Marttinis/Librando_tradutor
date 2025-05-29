// src/gestures/LetterKGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterK = new GestureDescription('K')

// Indicador e médio estendidos
letterK.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterK.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

// Os outros dedos curvados
letterK.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
letterK.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterK.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

export default letterK
