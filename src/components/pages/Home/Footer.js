import React from 'react';
import '../../../assets/styles/Home/Footer.css';
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
    <div className='homebackground'>

    <p className='line'></p>

    <div className='sectionFooter'>
    <Link to='/'  >
          <img className="LANA-FOOTER" src={logo} alt="logo"/>
          </Link>

       
          <div className='first'>

                  <p className='Enlaces-rpidos'>Enlaces Rápidos</p>
                  <Link className='link-decoration' to='/'  >


              <p className='About-Us'>About Us</p>
                </Link>
                <Link className='link-decoration' to='/'  >
              <p className='About-Us'>Blog</p>
                </Link>
                <Link className='link-decoration' to='/'  >
              <p className='About-Us'>Contact</p>
                </Link>
                <Link className='link-decoration' to='/'  >
              <p className='About-Us'>FAQ</p>
                </Link>


          </div>

          <div className='second'>

          <p className='Legales'>Legales</p>
                  <Link className='link-decoration' to='/'  >


              <p className='About-Us'>Disclaimer</p>
                </Link>
                <Link className='link-decoration' to='/'  >
              <p className='About-Us'>Financing</p>
                </Link>
                <Link className='link-decoration' to='/'  >
              <p className='About-Us'>Privacy Policy</p>
                </Link>
                <Link className='link-decoration' to='/'  >
              <p className='About-Us'>Terms of Service</p>
                </Link>

          </div>


          <div className='third'>
          <p className='suscribete'>Suscribete para tenerte al <br/>día via SMS</p>

          <Grid   container>
                    <input className="Rectangle-5-Copy" placeholder="Enter your phone Number" />
                
                </Grid>
<button className='signup-now-button'>Sign Up Now</button>
            
          </div>



        </div>


        <p className='line-copy'></p>


        <div className='redes-sociales'>
<p className='MA-Tax-Group'>©2021 M&A Tax Group. All rights reserved</p>

<div>
  <Link>
<img className="facebook" src={facebook} alt="facebook"/>
</Link>
<Link><img className="twitter" src={twitter} alt="twitter"/></Link>

<Link><img className="instagram" src={instagram} alt="instagram"/></Link>

<Link><img className="apple" src={apple} alt="apple"/></Link>

<Link><img className="googleplay" src={googleplay} alt="googleplay"/></Link>

</div>
        </div>
 
    </div>



         
    
  );
}

export default Footer;
