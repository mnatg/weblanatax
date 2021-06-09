import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import taxes from '../../../assets/images/Home/init/impuestos.svg'
import audits from '../../../assets/images/Home/init/audito.png'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

function Cards() {
  return (
    <Grid className='base'>
      <div className='center-services caja-services'>
        <div className="iconServices">
        <Link  to='/' >
          <img className="iconServices-taxes" src={taxes} alt="taxes" />
        </Link>
        <p className='servicios-lanatax'>IMPUESTOS</p>
        </div>
        <p className='servicios-lanatax-des'>Nunca fue tan simple, rápido y seguro</p>
      </div>

      <div className='center-servicesA caja-services' >
        <div className="extraicon">
        <Link  to='/' >
          <img className="iconServices-audits" src={audits} alt="audits" />
        </Link>
        <p className='servicios-lanatax'>AUDITORÍAS</p>
        </div>
        <p className='servicios-lanatax-des'>¿Te llegó una carta del IRS? con Lanatax será la manera más simple de resolver tus deudas </p>
      </div>

    </Grid>
  );
}

export default Cards;
