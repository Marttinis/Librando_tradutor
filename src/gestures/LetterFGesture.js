// src/gestures/LetterFGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterF = new GestureDescription('F')

// Polegar e indicador formando um círculo (dobrados)
letterF.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
letterF.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)

// Os outros dedos estendidos
letterF.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
letterF.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
letterF.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)

export default letterF
