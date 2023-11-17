import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { XR, VRButton, ARButton, XRButton, useXREvent } from '@react-three/xr'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, Text } from '@react-three/drei'
import ThreeContent from '../components/ThreeContent'

function Model(props) {
  const group = useRef()
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, 0.3, 0]}>
        {' '}
        {/* Plane Mesh that HTML Content anchors too. Controls HTML position/rotation. */}
        <mesh>
          {/* Drei's HTML component can "hide behind" canvas geometry */}
          <Html className="content" rotation-x={0} scale={50} position={[0, 0, 0.06 ]}  transform >
            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
              <div className='relative w-full text-center flex'>
              <ThreeContent/>
              </div>
            </div>
          </Html>
        </mesh>
      </group>
    </group>
  )
}

export default function ClientXR() {

  return (
    <>
    {/*<div style={{zIndex: 1000, position: "relative"}}>*/}
    <ARButton />
 {/* </div>*/}
    <Canvas 
      style={{ position: 'absolute', top: 0, left: 0 }} 
      camera={{ position: [-5, 0, -15], fov: 55, zoom: 5}}
      >
      <XR referenceSpace='local'>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, 0, 0]} position={[0, 1, 0]}>
          <Model />
        </group>
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
      </XR>
    </Canvas>
    <div id='e'>OK</div>
    </>
  )

}
