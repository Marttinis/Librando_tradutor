import { Finger, FingerCurl, GestureDescription } from 'fingerpose';

const letterA = new GestureDescription('A');

// Todos os dedos (exceto o polegar) dobrados
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterA.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// Polegar esticado (sem dobra)
letterA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

export default letterA;
