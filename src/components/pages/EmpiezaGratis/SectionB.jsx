import React from 'react';
import '../../../assets/styles/Home/Home.scss'
import '../../../assets/styles/QuienesSomos/QuienesSomos.scss'
import imagenB from '../../../assets/images/QuienesSomos/free-phone-12-mockup.png'
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';


function SectionA() {
  return (
    <div className='Rectangle-quiene'>
      <Grid className="ContainerGrid">
        <div className="GridLeft">
          <img className="imagenBQuienes" src={imagenB} alt="imagenB" /></div>
        <div className="GridRight">
          <p className='SecondTitle'>PROPOSITO</p>
          <p className='SecondText'>
            Como corporación es brindar a nuestros clientes facilidad y calidad al momento de llevar a cabo nuestros servicios sin
            la necesidad de tener que acudir a una oficina presencial, de esta manera buscamos no sólo ahorrar tiempo a nuestros clientes sino alinearnos a su beneficio.
          <br></br>
        Es además, traer la tecnología a las manos de nuestros clientes combinándolo con nuestros servicios profesionales,
        sabemos que los tiempos van cambiando y hoy más que nunca estamos comprometidos con nuestros clientes para ayudarles
         a resolver los problemas más complejos y también identificar las oportunidades. Siempre comprometidos a la calidad y
         profesionalismo con el fin de  sobrepasar las expectativas de nuestros clientes.</p>
        </div>
      </Grid>
      <Grid className="ContainerGridTablet">
        <div className="GridsUp">
          <img className="imagenBQuienes" src={imagenB} alt="imagenB" /></div>
        <div className="GridUnder">
          <p className='SecondTitle'>PROPOSITO</p>
          <p className='SecondText'>
            Como corporación es brindar a nuestros clientes facilidad y calidad al momento de llevar a cabo nuestros servicios sin
            la necesidad de tener que acudir a una oficina presencial, de esta manera buscamos no sólo ahorrar tiempo a nuestros clientes sino alinearnos a su beneficio.
          <br></br>
          <br></br>
        Es además, traer la tecnología a las manos de nuestros clientes combinándolo con nuestros servicios profesionales,
        sabemos que los tiempos van cambiando y hoy más que nunca estamos comprometidos con nuestros clientes para ayudarles
         a resolver los problemas más complejos y también identificar las oportunidades. Siempre comprometidos a la calidad y
         profesionalismo con el fin de  sobrepasar las expectativas de nuestros clientes.</p>
        </div>
      </Grid>
    </div>



  );
}

export default SectionA;