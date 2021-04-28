import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageA from '../../../assets/images/Home/sectionA/photo.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'


import { Link } from 'react-router-dom';

function sectionA() {
  return (
    <div className='homebackground'>
      <div className='sectionA'>
        <img className="imageA" src={imageA} alt="imageA" />
        <div className='form-container' >
          <h1 className='TUS-IMPUESTOS'>
            TODOS EMPIEZAN <br />
            COMPLETAMENTE <br />
            <p className='TUS-IMPUESTOS text-style-1'>GRATIS</p>
          </h1>
          <h1 className='Nuestra-videollamada'>
            Nuestra videollamada es Simple, Fácil y Segura.
          </h1>
          <Grid container>
            <input className="input-form" placeholder="Nombre" />
          </Grid>
          <Grid container>
            <input className="input-form" placeholder="Correo Electronico" />
          </Grid>
          <div className='divbase'>
            <Link to='/' >
              <img className="BotonConectar" src={botonConectar} alt="botonConectar" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sectionA;
