// src/gestures/LetterHGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterH = new GestureDescription('H')

// Indicador e médio estendidos
letterH.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterH.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

// Os outros dedos dobrados
letterH.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
letterH.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterH.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

export default letterH
