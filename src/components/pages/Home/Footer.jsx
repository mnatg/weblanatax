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
import '../../../assets/styles/Home/Home.scss'
import '../../../assets/styles/Home/Navbar.scss'



function Footer() {
  return (
    <div className='homebackground'>
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
          <a href='https://www.facebook.com/mnataxgroup'>
            <img className="icon" src={facebook} alt="facebook"/>
            </a>
          <a href=''>
            <img className="icon hideIcon" src={twitter} alt="twitter"/>
            </a>
          <a href='https://www.instagram.com/mnataxgroup/'>
            <img className="icon" src={instagram} alt="instagram"/>
            </a>
          <a href='https://apps.apple.com/co/app/lanatax/id1556736650'>
            <img className="icon apple" src={apple} alt="apple"/>
            </a>
          <a href='https://play.google.com/store/apps/details?id=com.lanatax'>
            <img className="icon" src={googleplay} alt="googleplay"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
