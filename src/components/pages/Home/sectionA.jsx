import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageA from '../../../assets/images/Home/sectionA/photo.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'


import { Link } from 'react-router-dom';
import FlipCards from './FlipCards';
import FlipCardsTwo from './FlipCardsTwo';
import FlipCardsThree from './FlipCardsThree';

function sectionA() {
  return (
    <div className='homebackground'>
  
        <div className='center-text'>
     <p className='Una-experiencia-dife'>UNA EXPERIENCIA DIFERENTE CON LANATAX</p>
     </div>

     <div className='center-text'>
     <p className='pasos-a-seguir'>pasos a seguir</p>
     </div>
    
  <Grid className='flip-cards-grid'>
     <FlipCards></FlipCards>
     <FlipCardsTwo></FlipCardsTwo>
     <FlipCardsThree></FlipCardsThree>
     <div className='space'></div>
     </Grid>

   
    </div>
  );
}

export default sectionA;
