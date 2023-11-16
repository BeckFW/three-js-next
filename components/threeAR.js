import { useEffect, useRef } from 'react';
import * as THREE from 'three'
import { XRButton} from 'three/addons/webxr/XRButton.js'

export default function ThreeAR() { 

    const containerRef = useRef(null);

    useEffect(()=>{
        if (typeof window !== undefined) {
            const scene = new THREE.Scene(); 
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

            const gl = containerRef.current.firstChild.getContext("webgl", {xrCompatible: true});
            if (gl === null) {
                alert(
                "Unable to initialize WebGL. Your browser or machine may not support it."
                );
            } else {
                console.log('XR Compatible');
            }
            
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                canvas: containerRef.current.firstChild,
                context: gl,
                alpha: true
            });

            // Init XR
            document.body.appendChild(XRButton.createButton( renderer ));
            renderer.xr.enabled = true;
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 2;

            

            const geometry = new THREE.BoxGeometry();
            const planeGeo = new THREE.PlaneGeometry(1, 1); 
            const planeMat = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            const plane = new THREE.Mesh( planeGeo, planeMat );
            //scene.add(cube);
            scene.add(plane);
            plane.position.set(0, 0, 0); 
            //cube.position.set(0, 0, 0);


            scene.add( new THREE.HemisphereLight( 0xa5a5a5, 0x898989, 3 ) );

            renderer.setAnimationLoop( function () {
                cube.rotation.x += 0.01; 
                renderer.render( scene, camera );
            
            } );

            const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
        
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        
            renderer.setSize(width, height);
            };
        
            window.addEventListener('resize', handleResize);
        
            // Clean up the event listener when the component is unmounted
            return () => {
            window.removeEventListener('resize', handleResize);
            };
        }
    }, []); 

    return(
        <div ref={containerRef}>
            <canvas></canvas>
        </div>
    )
}