import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import taxes from '../../../assets/images/Home/init/impuestos.png'
import accounting from '../../../assets/images/Home/init/contabilidad.png'
import audits from '../../../assets/images/Home/init/auditorias.png'
import payroll from '../../../assets/images/Home/init/nomina.png'
import corporations from '../../../assets/images/Home/init/corporaciones.png'
import planning from '../../../assets/images/Home/init/planificacion.png'
import { Link } from 'react-router-dom';

function Cards() {
  return (

    
    <div className='base homebackground'>
      <div > 
        <Link to='/' >
        <img className="taxes" src={taxes} alt="taxes"/>
        </Link>
        <p className='servicios-lanatax servicios-lanatax-taxes'>Impuestos</p>
        </div>

        <div>
        <Link to='/'>
        <img className="accounting" src={accounting} alt="accounting"/>
        </Link>
        <p className='servicios-lanatax servicios-lanatax-accounting'>Contabilidad</p>
        </div>

        <div className='center-services' >
        <Link to='/' >
        <img className="audits" src={audits} alt="audits"/>
        </Link>
        <p className='servicios-lanatax servicios-lanatax-audits'>Auditorias</p>
        </div>
        <div className='center-services' >
        <Link to='/'>
        <img className="payroll" src={payroll} alt="payroll"/>
        </Link>
        <p className='servicios-lanatax servicios-lanatax-payroll'>Nomina</p>
        </div>
        <div>
        <Link to='/' >
        <img className="corporations" src={corporations} alt="corporations"/>
        </Link>
        <p className='servicios-lanatax servicios-lanatax-corporations'>Coorporaciones</p>
        </div>
        <div>
        <Link to='/'>
        <img className="planning" src={planning} alt="planning"/>
        </Link>
        <p className='servicios-lanatax servicios-lanatax-planning'>Planificacion</p>
        </div>


    </div>
  );
}

export default Cards;
