import { GestureEstimator } from 'fingerpose';
import letterA from './gestures/LetterAGesture';

// Inicializa o estimador com os gestos que você quer detectar
const GE = new GestureEstimator([letterA]);

// Dentro do loop de reconhecimento (após obter as landmarks da mão):
const gesture = await GE.estimate(landmarks, 7.5); // Sensibilidade 7.5

if (gesture.gestures.length > 0) {
  const result = gesture.gestures.reduce((p, c) => (p.score > c.score) ? p : c);
  console.log("Gesto detectado:", result.name); // Deve imprimir "A"
}
