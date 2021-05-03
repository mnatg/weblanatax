import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageD from '../../../assets/images/Home/sectionD/photo-cel.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Button, Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'


import { Link } from 'react-router-dom';

function sectionD() {
  return (
    <div className='homebackground'>
      <Grid className='sectionD'>
        <div className="GridLeft">
          <h1 className='CONECTAR-CON-TU-ASES'>
            RESOLVIENDO <br/>CON <br />TRANSPARENCIA<br />
          </h1>
          <h1 className='textD'>
            Conéctate con los expertos en impuestos que han servido <br />a la comunidad hispana por más de 20 años.
          </h1>
          <h1 className='textD1'>
            SUSCRIBETE PARA TENERTE AL DÍA VIA SMS
          </h1>
            <input className="Boton-Nombre-d" placeholder="Enter your phone number" /><br/>
            <Button className="BotonConectarD" >conectar</Button>
        </div>
        <div className="GridRight ">
          <img className="imageD" src={imageD} alt="imageD" />
        </div>
      </Grid>
    </div>
  );
}

export default sectionD;
