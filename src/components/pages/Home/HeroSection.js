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
      <img className="Text" src={text} alt="text"/>
      <Link to='/' >
          <img className="BotonEmpezar" src={initbutton} alt="initbutton"/>
          </Link>
          <Link to='/' >
          <img className="Logos-tiendas" src={storelabels} alt="storelabels"/>
          </Link>
    </div>
  );
}

export default HeroSection;
