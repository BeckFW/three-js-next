import dynamic from "next/dynamic";

// Import AR component and disable Server-Side Rendering. We want this on the client only
const ClientAR = dynamic(() => import('../components/clientSideWebXR'), {ssr: false});

export default function App() {
  return(
    // Display the AR component
    <ClientAR/>
  )
}