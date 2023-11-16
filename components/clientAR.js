import { useEffect, useMemo } from "react";

export default function ClientAR() {
    useEffect(()=>{
        document.querySelector('#test').innerHTML = "No markers visible";
    
        // Get a reference to the AR.js scene
        const scene = document.querySelector('a-scene');
    
        // Add an event listener for when an image is detected
        scene.addEventListener('markerFound', (event) => {
            // Log something to the console when an image is detected
            document.querySelector('#test').innerHTML = `${event.target.getAttribute('name')} Marker Detected`;
            console.log('Image detected:', event.target.getAttribute('name'));
        });
    
        scene.addEventListener('markerLost', (event) => {
            document.querySelector('#test').innerHTML = "No markers visible";
        });
        
      }, [])

    return (
        <div>
         <div  style={{backgroundColor: "grey", width: "100%", height: "10%", marginTop: "100px"}}>
       <h1 id="test" style={{zIndex: "9999999", position: "fixed", left: "0", color: "white", fontSize: "x-large"}}></h1>
     </div>
   
     <a-scene embedded arjs="sourceType: webcam;">
       {/*Define your image marker */} 
       <a-marker preset="custom" type="pattern" url="image_descriptors/pattern-C1-Logo.patt" name="C1">
           {/*Add your 3D content here */}
           <a-entity position="0 0 -1" rotation="0 0 0" width="5" height="5" htmlembed>
             <div className="ar-wrapper">
             <h1 className="ar-text">Hello World!</h1>
             <p className="ar-text">This is a demo of Attendy's augmented reality signage.</p>
             <p className="ar-text">Using an anchor point on the scren, this box of text is placed above the camera view and secured in place. We're planning to use these boxes to hold importnant information about the campus, and display personalised details regarding upcoming lectures and naviagation help.</p>
             <img src="/image_descriptors/brighton-uni-logo.jpg" style={{width: "200px"}}/>
             <img src="/image_descriptors/Attendy_Logo.png" style={{width: "200px"}}/>
             </div>
             {/*<a-image src="/Attendy_Navigation/image_descriptors/Example Sign.png"  width="2" height="2" position="0 -1 0" rotation="-90 0 0" shadow event-set__enter="_event: mouseenter; color: #76D7C4" event-set__leave="_event: mouseleave; color: #FFD700">
             </a-image>*/}
           </a-entity>
   
           {/*<a-text value="C1 Marker" position="0 0.5 0"></a-text>
              <a-box position="0 0.5 0" material="color: red;"></a-box>*/}
       </a-marker>
   
       <a-marker preset="custom" type="pattern" url="image_descriptors/pattern-C2-Logo.patt" name="C2">
         {/*Add your 3D content here */}
         <a-entity position="0 0 -1" rotation="-15 0 0" width="5" height="5" htmlembed>
           <div className="ar-wrapper">
           <h1 className="ar-text">Hello Second Marker</h1>
           <p className="ar-text">Here is different important information...</p>
           <p className="ar-text" style={{paddingBottom: "25px"}}><span style={{fontWeight: "bold"}}>More</span> important information!</p>
           <img src="/image_descriptors/IMG_2003.jpeg" width="200px"/>
           </div>
           
           {/*<a-image src="/Attendy_Navigation/image_descriptors/Example Sign.png"  width="2" height="2" position="0 -1 0" rotation="-90 0 0" shadow event-set__enter="_event: mouseenter; color: #76D7C4" event-set__leave="_event: mouseleave; color: #FFD700">
           </a-image>*/}
         
         </a-entity>
   
         {/*<a-text value="C1 Marker" position="0 0.5 0"></a-text>-->
         <!--<a-box position="0 0.5 0" material="color: red;"></a-box>*/}
     </a-marker>    
   
       <a-entity camera></a-entity>
   </a-scene>
       </div>
     )
}