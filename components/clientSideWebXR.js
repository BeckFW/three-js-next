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
      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        {/* Plane Mesh that HTML Content anchors too. Controls HTML position/rotation. */}
        <mesh>
          <Html className="content" rotation-x={0} scale={100} position={[0, 0, 0 ]}  transform >
            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
              <div className='relative w-full text-center flex'>
                {/* HTML Content */}
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
    <ARButton />
    <Canvas 
      style={{ position: 'absolute', top: 0, left: 0 }} 
      camera={{ position: [-5, 0, -15], fov: 55, zoom: 50}}
      >
      <XR referenceSpace='local'>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
          <Model />
        </group>
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} />
      </XR>
    </Canvas>

    </>
  )

}
