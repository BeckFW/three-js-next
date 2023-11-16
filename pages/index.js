import dynamic from 'next/dynamic';
import { Environment, ContactShadows, OrbitControls, Html } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeContent from '../components/ThreeContent';

import { useRef } from 'react';

  function Model(props) {
    const group = useRef();


  return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0, 0, 0]} rotation={[0, 0.5, 0]}>
          {/* Plane Mesh that HTML Content anchors too. Controls HTML position/rotation. */}
          <mesh>
            {/* Drei's HTML component can "hide behind" canvas geometry */}
            <Html className="content" rotation-x={0} position={[0, 0, 0]} transform occlude>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <ThreeContent />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
    )

}


  export default function Home() {
      return (
        <Canvas camera={{ position: [0, 0, 0], fov: 55 }}>
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <group rotation={[0, 0, 0]} position={[0, 1, 0]}>
            <Model />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows position={[0, 0, 0]} scale={20} blur={2} far={4.5} />
      </Canvas>
      )
  }