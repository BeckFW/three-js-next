const ClientSideAR = dynamic(
    () => import('../components/clientAR'),
     {
       ssr: false
     }
    );
  
  const ClientSideThree = dynamic(
    () => import('../components/threeAR'), 
    {
      ssr: false
    }
  
  );
  
  function Home() {
  
  return (
    <ClientSideThree />
  )
  }
  
  export default Home