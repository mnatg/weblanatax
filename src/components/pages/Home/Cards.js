import React from 'react';
import '../../../assets/styles/Home/Home.css';
import taxes from '../../../assets/images/Home/init/impuestos.png'
import accounting from '../../../assets/images/Home/init//contabilidad.png'
import audits from '../../../assets/images/Home/init/auditorias.png'
import payroll from '../../../assets/images/Home/init//nomina.png'
import corporations from '../../../assets/images/Home/init//corporaciones.png'
import planning from '../../../assets/images/Home/init//planificacion.png'
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='base'>
        <Link to='/' >
        <img className="taxes" src={taxes} alt="taxes"/>
        </Link>

        <Link to='/'>
        <img className="accounting" src={accounting} alt="accounting"/>
        </Link>

        <Link to='/' >
        <img className="audits" src={audits} alt="audits"/>
        </Link>

        <Link to='/'>
        <img className="payroll" src={payroll} alt="payroll"/>
        </Link>

        <Link to='/' >
        <img className="corporations" src={corporations} alt="corporations"/>
        </Link>

        <Link to='/'>
        <img className="planning" src={planning} alt="planning"/>
        </Link>


    </div>
  );
}

export default Cards;
