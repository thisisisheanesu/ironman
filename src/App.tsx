import './App.css'
// import * as THREE from 'three'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import Ironman from './lib/model'
import Main from './layouts/main'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <div>      
              <Main />
              <div className="canvas-container">
                <Canvas camera={{ position: [0, 0, 0], fov: 55 }}>
                  <pointLight position={[10, 10, 10]} intensity={1.5} />
                  <Suspense fallback={null}>
                    <group rotation={[4.5, -0.3, 8.4]} position={[3.7, 0, -5]} scale={0.8}>
                      <Ironman />
                    </group>
                    <Environment preset="city" />
                  </Suspense>
                  <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
                  <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
                </Canvas>
              </div>
            </div>} />
        </Routes>
      </Router>
    </>
  )
}