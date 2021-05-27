import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageA from '../../../assets/images/Home/sectionA/photo.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'


import { Link } from 'react-router-dom';
import FlipCards from './FlipCards';

function sectionA() {
  return (
    <div className='homebackground'>
      <Grid >
     <p className='Una-experiencia-dife'>Una experiencia diferente con lanatax</p>
     <p className='pasos-a-seguir'>pasos a seguir</p>
     </Grid>
    
     <FlipCards></FlipCards>
    </div>
  );
}

export default sectionA;
