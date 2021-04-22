import React from 'react';
import '../../../App.css';
import '../../../assets/styles/Home/Home.scss'
import '../../../assets/styles/QuienesSomos/QuienesSomos.scss'
import imagenA from '../../../assets/images/QuienesSomos/q-s-celu.png'
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';


function SectionA() {
  return (
    <div className='homebackground sectionA-columns-quienes Rectangle-quienes'>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <p className='QuienesSomos'>{'QUIENES \n SOMOS'}</p>
        <p className='TextQuienes'>Lanatax es una compañía que combina gente y tecnología para innovar los servicios profesionales que proveemos en el sector financiero. La base de nuestros principios son valores que promueven eficiencia y eficacia para asegurar la mejor calidad a nuestros clientes.
</p>
        </Grid>
        <Grid item xs={2} className="imgQuienes">
          <img className="imagenAQuienes" src={imagenA} alt="imagenA" />
        </Grid>
      </Grid>
    </div>



  );
}

export default SectionA;