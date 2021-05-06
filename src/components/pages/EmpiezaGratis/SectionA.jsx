import React, { useState, useEffect } from 'react';
import '../../../assets/styles/Home/Home.scss'
import '../../../assets/styles/QuienesSomos/QuienesSomos.scss'
import imagenA from '../../../assets/images/EmpiezaGratis/plan1.png'
import imagenAp from '../../../assets/images/EmpiezaGratis/plan1E.png'
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';

import '../../../assets/styles/Home/Home.scss'
import initbutton from '../../../assets/images/EmpiezaGratis/button_empieza-ya-es-gratis.png'

import { useFirebaseApp, useUser } from 'reactfire';
import SignIn from '../../../components/pages/SignIn/SignIn';
import Toast from '../../../utils/Toast';


function SectionA() {

  const [click, setClick] = useState(true);

  const showImageA = () => setClick(true);
  const showImageAp = () => setClick(false);


  var autenticacion = false;

  var user = useUser();
  var email = "";

  const messageToast = async (mensaje) => {
   
      Toast(mensaje,"error")
    
  }




  if(user.data == null){
    console.log("usuario no está definido");
    //messageToast("Registrate y/o Ingresa antes de comenzar")
  } else {
    console.log("usuario está definido",user);
    email = user.data.email;
    //console.log("usuario está definido",user.data.email);
    autenticacion = true;
  }



  if(autenticacion){
  return (


    <div className='Rectangle-quienes'>
      <Grid className="ContainerGrid">
        <div className="GridLeft">
          <p className='FirstTitle'>{'LANATAX \n PLANES'}</p>
          <p className='FirstText'>Elige Uno de nuestro Planes y empieza completamente gratis
</p>
{!click && <div className='empezar-gratis-videollamada'>
  
        <Link to='/empieza-gratis-videollamada/:Edna/:Ortega' >
          <img className="btn-start" src={initbutton} alt="initbutton"/>
        </Link>


      </div>}
        </div>
        <div className="GridRight">
          {click && <img onClick={showImageAp} className="imagenAQuienes" src={imagenA} alt="imagenA" />}
          {!click &&  <img  onClick={showImageA} className="imagenAQuienes" src={imagenAp} alt="imagenAp" />}
         

        </div>
      </Grid>


      <Grid className="ContainerGridTablet">

        <div className="GridUp">
          <img className="imagenAQuienes" src={imagenA} alt="imagenA" />
        </div>
        <div className="GridUnder">
          <p className='FirstTitle'>{'QUIENES \n SOMOS'}</p>
          <p className='FirstText'>Elige Uno de nuestro Planes y empieza completamente gratis
</p>
        </div>
      </Grid>
    </div>

  
    
    
    );
  }
  else{
    
    return (
      <div>


      <SignIn></SignIn>

      </div>

    );
  }



}

export default SectionA;