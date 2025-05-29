// src/gestures/LetterRGesture.js
import { Finger, FingerCurl, GestureDescription } from 'fingerpose'

const letterR = new GestureDescription('R')

letterR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
letterR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

letterR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
letterR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)

letterR.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)

export default letterR
