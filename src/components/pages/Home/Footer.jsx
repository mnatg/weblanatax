import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Home/init/lana@3x.png';
import { Grid } from '@material-ui/core';
import facebook from '../../../assets/images/Home/sectionD/facebook.png';
import twitter from '../../../assets/images/Home/sectionD/twitter.png';
import instagram from '../../../assets/images/Home/sectionD/instagram.png';
import apple from '../../../assets/images/Home/sectionD/apple.png';
import googleplay from '../../../assets/images/Home/sectionD/googleplay.png';


function Footer() {
  return (
    <div className='homebackground movilbackground-footer'>
      <p className='line-copy'></p>
      <div className='sectionFooter'>
        <Link to='/'  >
          <img className="LANA-FOOTER" src={logo} alt="logo"/>
        </Link>
        <div className='first'>
          <p className='Enlaces-rpidos'>Enlaces Rápidos</p>
          <Link className='link-decoration' to='/' >
            <p className='About-Us'>About Us</p>
          </Link>
          <Link className='link-decoration' to='/' >
            <p className='About-Us'>Blog</p>
          </Link>
          <Link className='link-decoration' to='/' >
            <p className='About-Us'>Contact</p>
          </Link>
          <Link className='link-decoration' to='/' >
            <p className='About-Us'>FAQ</p>
          </Link>
        </div>
        <div className='second'>
          <p className='Legales'>Legales</p>
          <Link className='link-decoration' to='/' >
            <p className='About-Us'>Disclaimer</p>
          </Link>
          <Link className='link-decoration' to='/' >
            <p className='About-Us'>Financing</p>
          </Link>
          <Link className='link-decoration' to='/' >
            <p className='About-Us'>Privacy Policy</p>
          </Link>
          <Link className='link-decoration' to='/' >
            <p className='About-Us'>Terms of Service</p>
          </Link>
        </div>
        <div className='third'>
          <p className='suscribete'>Suscribete a nuestro <br/>Newslatter</p>
          <Grid container>
            <input className="Rectangle-5-Copy" placeholder="Email" />
          </Grid>
          <button className='signup-now-button'>Registrar</button>
        </div>
      </div>
      <p className='line-copy'></p>
      <div className='redes-sociales'>
        <p className='MA-Tax-Group'>©2021 M&A Tax Group. All rights reserved</p>
        <div className='icons' >
          <Link>
            <img className="icon" src={facebook} alt="facebook"/>
          </Link>
          <Link>
            <img className="icon" src={twitter} alt="twitter"/>
          </Link>
          <Link>
            <img className="icon" src={instagram} alt="instagram"/>
          </Link>
          <Link>
            <img className="icon apple" src={apple} alt="apple"/>
          </Link>
          <Link>
            <img className="icon" src={googleplay} alt="googleplay"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
