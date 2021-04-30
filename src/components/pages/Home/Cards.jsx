import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import taxes from '../../../assets/images/Home/init/impuestos.png'
import accounting from '../../../assets/images/Home/init/contabilidad.png'
import audits from '../../../assets/images/Home/init/auditorias.png'
import payroll from '../../../assets/images/Home/init/nomina.png'
import corporations from '../../../assets/images/Home/init/corporaciones.png'
import planning from '../../../assets/images/Home/init/planificacion.png'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

function Cards() {
  return (
    <Grid className='base'>
      <div className='center-services'>
        <Link to='/' >
          <img className="iconServices" src={taxes} alt="taxes" />
        </Link>
        <p className='servicios-lanatax '>Impuestos</p>
      </div>

      <div className='center-services'>
        <Link to='/'>
          <img className="iconServices" src={accounting} alt="accounting" />
        </Link>
        <p className='servicios-lanatax '>Contabilidad</p>
      </div>

      <div className='center-services  ' >
        <Link to='/' >
          <img className="extraicon" src={audits} alt="audits" />
        </Link>
        <p className='servicios-lanatax '>Auditorias</p>
      </div>

      <div className='center-services' >
        <Link to='/'>
          <img className="extraicon" src={payroll} alt="payroll" />
        </Link>
        <p className='servicios-lanatax '>Nomina</p>
      </div>

      <div className='center-services'>
        <Link to='/' >
          <img className="extraicon" src={corporations} alt="corporations" />
        </Link>
        <p className='servicios-lanatax '>Coorporaciones</p>
      </div>

      <div className='center-services'>
        <Link to='/'>
          <img className="extraicon" src={planning} alt="planning" />
        </Link>
        <p className='servicios-lanatax '>Planificacion</p>
      </div>
    </Grid>
  );
}

export default Cards;
