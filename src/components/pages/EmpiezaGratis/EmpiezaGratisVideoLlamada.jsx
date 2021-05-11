import React from 'react';
import Footer from '../Home/Footer';
import ContactoAsesor from './ContactoAsesor'
import { useHistory, useParams } from 'react-router-dom'




function EmpiezaGratisVideollamada(props) {
  
  /*let { name } = useParams();
  let { apellido } = useParams();

  
  console.log("name: ",name)
  console.log("apellido: ",apellido)*/
  return (
    <>
      <ContactoAsesor/>
      <Footer />
    </>
  );
}

export default EmpiezaGratisVideollamada;


