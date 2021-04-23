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
      <Grid className="ContainerGrid">
        <div className="GridLeft">
        <p className='FirstTitle'>{'QUIENES \n SOMOS'}</p>
        <p className='FirstTesx'>Lanatax es una compañía que combina gente y tecnología para innovar los servicios profesionales que proveemos en el sector financiero. La base de nuestros principios son valores que promueven eficiencia y eficacia para asegurar la mejor calidad a nuestros clientes.
</p>
        </div>
        <div className="GridRight">
          <img className="imagenAQuienes" src={imagenA} alt="imagenA" />
        </div>
      </Grid>
    </div>



  );
}

export default SectionA;