import React from 'react';
import '../../../App.css';
import { Button } from './Button';
import '../../../assets/styles/Home/HeroSection.css';
import '../../../assets/styles/Home/Home.css'
import text from '../../../assets/images/Home/init/text.png'
import initbutton from '../../../assets/images/Home/init/boton-empezar.png'
import storelabels from '../../../assets/images/Home/init/logos-tiendas.png'
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='Photo'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <p className='no-te'>NO TE
COMPLIQUES
CON TUS
TAXES,</p>
<p className='Nos-encargamos'>Nos encargamos de todo por ti</p>
<p className='Ven-a'>Ven a recibir la mejor atención</p>
<div className='empezar-gratis'>
<Link to='/' >
          <img className="BotonEmpezar" src={initbutton} alt="initbutton"/>
          </Link>
          </div>

          <div className='empezar-gratis'>
          <Link to='/' >
          <img className="Logos-tiendas" src={storelabels} alt="storelabels"/>
          </Link>
          </div>


    </div>
    
  );
}

export default HeroSection;
