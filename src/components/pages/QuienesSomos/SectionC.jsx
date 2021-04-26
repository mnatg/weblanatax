import React from 'react';
import '../../../App.scss';
import '../../../assets/styles/QuienesSomos/QuienesSomos.scss'
import imagenB from '../../../assets/images/QuienesSomos/free-phone-12-mockup.png'
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';


function SectionA() {
  return (
    <div className='Rectangle-quiene'>
      <Grid className="ContainerSectionC">
        <div className="Container">
          <p className='SecondTitle'>nuestra gente</p>
          <p className='SecondText'>
            Nuestro equipo nos separa de la competencia trayendo un sin par de valores a nuestros clientes.
            <br></br>
            <br></br>
            La amabilidad y calidad de nuestro equipo nos destaca frente a la competencia, otorgando una experiencia única frente al mercado. </p>
        </div>
      </Grid>
    </div>



  );
}

export default SectionA;