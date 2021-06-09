// React
import React from 'react';
// Components
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
// Styles
import '../../../assets/styles/Home/Home.scss'
// Assets
import initbutton from '../../../assets/images/Home/init/boton-empezar.png'
import storelabels from '../../../assets/images/Home/init/app-store.png'
import storelabels2 from '../../../assets/images/Home/init/google-play.png'
import { useUser } from 'reactfire';
import Toast from '../../../utils/Toast';
import ImpuestosCarousel from '../../pages/Home/ImpuestosCarousel';

function HeroSection() {


  var user = useUser();
  var autenticacion = false;


  const validateHome = () => {

  if(user.data == null){
    console.log("validateHome");
    Toast("Resgistrate y/o Ingresa Gratis","error")
  } else {
    console.log("validateHome",user);
    //console.log("usuario está definido",user.data.email);
    Toast("Ingreso exitoso, Empieza Gratis","success")
    autenticacion = true;
  }

  }


  return (
    <Grid className='Photo'>
      <div className="GridLeft"></div>
      <div className="GridRight">
        {/*<video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        <p className='no-te'>UNA MEJOR EXPERIENCIA EN:</p>
        <ImpuestosCarousel></ImpuestosCarousel>
        <h1 className='Nos-encargamos'>Nos encargamos de todo por ti</h1>
        <div className='icons-stores'>
          <p className='descarga-apps' >Descarga Gratis nuestras apps: </p>
          <div>
              {'\n'}
          <a href='https://apps.apple.com/co/app/lanatax/id1556736650' >
            <img className="Logo-store" src={storelabels} alt="storelabels" />
          </a>
          <a href='https://play.google.com/store/apps/details?id=com.lanatax' >
            <img className="Logo-store" src={storelabels2} alt="storelabels2" />
          </a>
          </div>
        </div>

      </div>
    </Grid>
  );
}

export default HeroSection;
