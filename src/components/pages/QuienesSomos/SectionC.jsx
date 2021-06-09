import React from 'react';
import '../../../assets/styles/QuienesSomos/QuienesSomos.scss'
import imagenB from '../../../assets/images/QuienesSomos/free-phone-12-mockup.png'
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';


function SectionA() {
  return (
    <div className='Rectangle-quiene'>
      <Grid className="ContainerSectionC">
        <div className="Container">
          <p className='ThirdTitle'>NUESTRA GENTE</p>
          <p className='ThirdText'>
          <p className='negrilla'>Nos diferenciamos  de la competencia por los valores y calidez humana que nuestro equipo tiene con los clientes como tu.</p>
            <br></br>
            <br></br>
            La amabilidad y calidad de nuestro equipo nos destaca frente a la competencia, otorgando una experiencia única frente al mercado. </p>
        </div>
      </Grid>
    </div>



  );
}

export default SectionA;