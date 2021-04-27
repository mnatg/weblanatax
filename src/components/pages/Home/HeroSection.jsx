import React from 'react';
import '../../../App.scss';
import { Button } from './Button';
import '../../../assets/styles/Home/HeroSection.scss';
import '../../../assets/styles/Home/Home.scss'
import text from '../../../assets/images/Home/init/text.png'
import initbutton from '../../../assets/images/Home/init/boton-empezar.png'
import storelabels from '../../../assets/images/Home/init/app-store.png'
import storelabels2 from '../../../assets/images/Home/init/google-play.png'
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='Photo'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <p className='no-te'>UNA MEJOR EXPERIENCIA EN:</p>
      <p className='impuestos'>IMPUESTOS</p>
      <h1 className='Nos-encargamos'>Nos encargamos de</h1>
      <h1 className='Nos-encargamos'>todo por ti</h1>
      <p className='Ven-a'>Ven a recibir la mejor atención</p>
      <div className='empezar-gratis'>
        <Link to='/' >
          <img className="btn-start" src={initbutton} alt="initbutton"/>
        </Link>
      </div>
      <div className='empezar-gratis-logos'>
        <a href='https://apps.apple.com/co/app/lanatax/id1556736650' >
          <img className="Logo-store" src={storelabels} alt="storelabels"/>
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.lanatax' >
          <img className="Logo-store" src={storelabels2} alt="storelabels2"/>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
