import dynamic from "next/dynamic";

const ClientAR = dynamic(() => import('../components/clientSideWebXR'), {ssr: false});

export default function App() {
  return(
    <ClientAR/>
  )
}