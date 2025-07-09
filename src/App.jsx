import React, { useRef, useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import * as handpose from '@tensorflow-models/handpose'
import * as fp from 'fingerpose'
import '@tensorflow/tfjs'
import letterAGesture from './gestures/LetterAGesture'
import letterBGesture from './gestures/LetterBGesture'
import letterCGesture from './gestures/LetterCGesture'
import letterDGesture from './gestures/LetterDGesture'
// import letterEGesture from './gestures/LetterEGesture'
// import letterFGesture from './gestures/LetterFGesture'
// import letterGGesture from './gestures/LetterGGesture'
// import letterHGesture from './gestures/LetterHGesture'
// import letterIGesture from './gestures/LetterIGesture'
// import letterJGesture from './gestures/LetterJGesture'
// import letterKGesture from './gestures/LetterKGesture'
// import letterLGesture from './gestures/LetterLGesture'
// import letterMGesture from './gestures/LetterMGesture'
// import letterNGesture from './gestures/LetterNGesture'
// import letterOGesture from './gestures/LetterOGesture'
// import letterPGesture from './gestures/LetterPGesture'
// import letterQGesture from './gestures/LetterQGesture'
// import letterRGesture from './gestures/LetterRGesture'
// import letterSGesture from './gestures/LetterSGesture'
// import letterTGesture from './gestures/LetterTGesture'
// import letterUGesture from './gestures/LetterUGesture'
// import letterVGesture from './gestures/LetterVGesture'
// import letterWGesture from './gestures/LetterWGesture'
// import letterXGesture from './gestures/LetterXGesture'
// import letterYGesture from './gestures/LetterYGesture'









function App() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const [gesture, setGesture] = useState(null)

  useEffect(() => {
    const runHandpose = async () => {
      const net = await handpose.load()
      console.log('🤖 Modelo carregado')

      const GE = new fp.GestureEstimator([
        letterAGesture,
        letterBGesture,
        letterCGesture,
        letterDGesture,
        // letterEGesture,
        // letterFGesture,
        // letterGGesture,
        // letterHGesture,
        // letterIGesture,
        // letterJGesture,
        // letterKGesture,
        // letterLGesture,
        // letterMGesture,
        // letterNGesture,
        // letterOGesture,
        // letterPGesture,
        // letterQGesture,
        // letterRGesture,
        // letterSGesture,
        // letterTGesture,
        // letterUGesture,
        // letterVGesture,
        // letterWGesture,
        // letterXGesture,
        // letterYGesture,
        //  não é viável reconhecer o Z com fingerpose
      ])


      const detect = async () => {
        if (
          webcamRef.current &&
          webcamRef.current.video.readyState === 4
        ) {
          const video = webcamRef.current.video
          const videoWidth = video.videoWidth
          const videoHeight = video.videoHeight

          webcamRef.current.video.width = videoWidth
          webcamRef.current.video.height = videoHeight
          canvasRef.current.width = videoWidth
          canvasRef.current.height = videoHeight

          const hand = await net.estimateHands(video)
          const ctx = canvasRef.current.getContext('2d')
          ctx.clearRect(0, 0, videoWidth, videoHeight)

          if (hand.length > 0) {
            const landmarks = hand[0].landmarks
            const gestureEstimation = await GE.estimate(landmarks, 8)

            if (
              gestureEstimation.gestures &&
              gestureEstimation.gestures.length > 0
            ) {
              const bestMatch = gestureEstimation.gestures.reduce((p, c) =>
                p.score > c.score ? p : c
              )
              setGesture(bestMatch.name)
            } else {
              setGesture(null)
            }

            // Desenha os pontos da mão
            landmarks.forEach(([x, y]) => {
              ctx.beginPath()
              ctx.arc(x, y, 5, 0, 2 * Math.PI)
              ctx.fillStyle = 'red'
              ctx.fill()
            })
          }

          requestAnimationFrame(detect)
        } else {
          requestAnimationFrame(detect)
        }
      }

      detect()
    }

    runHandpose()
  }, [])

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: 'white',
        color: '#111',
      }}
    >
      <h2 style={{ margin: '1rem 0', textAlign: 'center' }}>Interpretador de Libras</h2>

      <div style={{ position: 'relative', width: 640, height: 480 }}>
        <Webcam
          ref={webcamRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 640,
            height: 480,
            zIndex: 1,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 640,
            height: 480,
            zIndex: 2,
          }}
        />
      </div>

      <div
        style={{
          marginTop: '1.5rem',
          fontSize: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80px', // define uma altura visível para centralizar verticalmente
          width: '100%',
          textAlign: 'center',
        }}
      >
        {gesture ? `Tradução: Letra ${gesture}` : '⏳ Nenhum sinal detectado'}
      </div>

    </div>
  )


}

export default App
