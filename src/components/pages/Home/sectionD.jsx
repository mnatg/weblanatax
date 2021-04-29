import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageD from '../../../assets/images/Home/sectionD/photo-cel.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'


import { Link } from 'react-router-dom';

function sectionD() {
  return (
    <div className='homebackground'>
      <div className='sectionD'>
        <div>
          <h1 className='CONECTAR-CON-TU-ASES'>
            RESOLVIENDO CON <br/>TRANSPARENCIA<br/>
          </h1>
          <h1 className='textD'>
            Conéctate con los expertos en impuestos que han servido <br/>a la comunidad hispana por más de 20 años.
          </h1>
          <h1 className='textD1'>
            SUSCRIBETE PARA TENERTE AL DÍA VIA SMS
          </h1>
          <Grid container >
            <input className="Boton-Nombre-d" placeholder="Enter your phone number" />
          </Grid>            
          <Link to='/' >
            <img className="BotonConectarD" src={botonConectar} alt="botonConectar"/>
          </Link>
        </div>
        <img className="imageD" src={imageD} alt="imageD"/>
      </div>
    </div>
  );
}

export default sectionD;
