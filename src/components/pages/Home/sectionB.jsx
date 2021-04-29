import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageA from '../../../assets/images/Home/sectionA/photo.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'
import billetes from '../../../assets/images/Home/initA/billetes.png'
import iconllamada from '../../../assets/images/Home/initA/icon-llamada.png'
import bolsitadinero from '../../../assets/images/Home/initA/bolsitadinero.png'
import ahorratiempo from '../../../assets/images/Home/initA/ahorratiempo.png'
import estadistica from '../../../assets/images/Home/initA/estadistica.png'
import hojas from '../../../assets/images/Home/initA/hojas.png'
import personas from '../../../assets/images/Home/initA/personas.png'
import planeta from '../../../assets/images/Home/initA/planeta.png'
import torta from '../../../assets/images/Home/initA/torta.png'

import { Link } from 'react-router-dom';

function sectionB() {
  return (
    <div className='homebackground'>
      <Grid className='sectionB'>
        <div className="GridLefB">
          <p className='TextB'>La mejor <br />combinación<br />
          entre personas<br />
          + tecnología
        </p>
        </div>
        <Grid className='GridRightB' >
          <div className='gridtest'>
            <img className="ICON" src={iconllamada} alt="iconllamada" />
            <p className='TEXT'> Videollamada Gratis. </p>
          </div>
          <div className='gridtest'>
            <img className="ICON" src={ahorratiempo} alt="bolsitadinero" />
            <p className='TEXT'>Ahorra Tiempo.</p>
          </div>
          <div className='gridtest'>
            <img className="ICON" src={billetes} alt="billetes" />
            <p className='TEXT'> Simple, fácil y seguro. </p>
          </div>
          <div className='gridtest'>
            <img className="TORTA" src={torta} alt="torta" />
            <p className='TEXT'> Obtén una revisión y análisis<br />completo.</p>
          </div>
          <div className='gridtest'>
            <img className="ICON" src={personas} alt="personas" />
            <p className='TEXT'>Calidad con la que<br />puedes contar.</p>
          </div>
          <div className='gridtest'>
            <img className="ICON" src={estadistica} alt="estadistica" />
            <p className='TEXT'>Te mantendremos informado</p>
          </div>
          <div className='gridtest'>
            <img className="ICON" src={planeta} alt="planeta" />
            <p className='TEXT'>Te ayudaremos en donde<br />quiera que estes</p>
          </div>
          <div className='gridtest'>
            <img className="ICON" src={hojas} alt="hojas" />
            <p className='TEXT'>Ten acceso a todos tus<br />documentos. </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default sectionB;