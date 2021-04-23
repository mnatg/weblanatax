import React from 'react';
import '../../../App.css';
import '../../../assets/styles/Home/Home.scss'
import '../../../assets/styles/QuienesSomos/QuienesSomos.css'
import imagenA from '../../../assets/images/QuienesSomos/q-s-celu.png'
import { Link } from 'react-router-dom';


function SectionA() {
  return (
<div className='homebackground sectionA-columns-quienes Rectangle-quienes'> 
    <h1 className='QUIENES-SOMOS'>QUIENES SOMOS</h1>
    <img className="imagenA-quienes" src={imagenA} alt="imagenA"/>

    </div>


    
  );
}

export default SectionA;