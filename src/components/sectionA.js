import React from 'react';
import '../assets/styles/Home.css';
import imageA from '../assets/images/pagina3/photo.png'
import textA from '../assets/images/pagina3/textA.png'
import { Grid } from '@material-ui/core';

import { Link } from 'react-router-dom';

function sectionA() {
  return (
    <div className='sectionA'>
       
        <img className="imageA" src={imageA} alt="imageA"/>

        <div>
        <img className="textA" src={textA} alt="textA"/>
        <h1 className='Nuestra-videollamada'>
        Nuestra videollamada es Simple, Fácil y Segura. <br/>
Todos Empiezan  completamente GRATIS*

        </h1>

        <Grid  className='Botones'>
                    <input className="Boton-Nombre" placeholder="Nombre" />
                    <input className="Boton-CorreoElectronico" placeholder="Correo Electronico"  />
                </Grid>

        </div>
        
       
    </div>
  );
}

export default sectionA;
