import React, { useState } from 'react';
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
import SendEmail from '../../../Services/NewsLatter/SendEmail';
import Toast from '../../../utils/Toast';
import validator from 'validator'


function Footer() {

  let email = React.createRef();

  const message = "";

  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const handleClickFooter = () => {
    setAcceptPolicy(!acceptPolicy);
    console.log("accept policy: ", acceptPolicy)
  }
  const Send = async () => {
    console.log('enviar email', email.current.value)
    if (emailError == "OK") {

      if (email.current.value == null || email.current.value == undefined || email.current.value == "") {

        Toast("Debe ingresar un correo", "error");
      } else {
        try {
          let request = {
            "email": email.current.value,
            "message": message,
            "topic":'newslatter'
          }
          console.log('enviando mail: ', request)

          await SendEmail(request);
          Toast("Suscripción exitosa", "success");
        } catch (err) {
          Toast("Ha ocurrido un error, contacte al administardor: ", "error");
          console.error("Error al enviar mensaje", err);
        }

      }

    }
    else {
      Toast("Por favor ingrese un correo válido", "error");
    }
  }


  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('OK')

    } else {
      setEmailError('EROR')
    }
  }


  return (
    <div className='homebackground'>
      <p className='line-copy'></p>
      <div className='sectionFooter'>
        <Link to='/'  >
          <img className="LANA-FOOTER" src={logo} alt="logo" />
        </Link>
        <div className='first'>
          <p className='Enlaces-rpidos'>Enlaces Rápidos</p>
          <Link className='link-decoration' to='/quienes-somos' >
            <p className='About-Us'>Quienes Somos</p>
          </Link>
          <Link className='link-decoration' to='/que-hacemos' >
            <p className='About-Us'>Que Hacemos</p>
          </Link>
        </div>
        <div className='third'>
          <p className='suscribete'>Suscribete a nuestro <br />Newslatter</p>
          <Grid container>
            <input ref={email} className="Rectangle-5-Copy" placeholder="Email" onChange={(e) => validateEmail(e)} />

            <Grid container direction="row" justify="left" alignItems="​center" >
              <a className='center-text' href='https://firebasestorage.googleapis.com/v0/b/dev-lanatax.appspot.com/o/Privacy_policy%2F9233184a-bfbc-11eb-a980-0cc47a792c0a_id_9233184a-bfbc-11eb-a980-0cc47a792c0a.html?alt=media&token=5a71f1b0-ff86-4efd-aca5-9bf49fa8f14a'>
                ¿Ya leiste nuestras politicas de privacidad ?
            </a>
            </Grid>


          </Grid>
          <button disable={acceptPolicy} onClick={Send} className='signup-now-button'>Registrar</button>
        </div>
      </div>
      <p className='line-copy'></p>
      <div className='redes-sociales'>
        <p className='MA-Tax-Group'>©2021 M&A Tax Group. All rights reserved</p>
        <div className='icons' >
          <a href='https://www.facebook.com/mnataxgroup'>
            <img className="icon" src={facebook} alt="facebook" />
          </a>
          <a href=''>
            <img className="icon hideIcon" src={twitter} alt="twitter" />
          </a>
          <a href='https://www.instagram.com/mnataxgroup/'>
            <img className="icon" src={instagram} alt="instagram" />
          </a>
          <a href='https://apps.apple.com/co/app/lanatax/id1556736650'>
            <img className="icon apple-icon" src={apple} alt="apple" />
          </a>
          <a href='https://play.google.com/store/apps/details?id=com.lanatax'>
            <img className="icon" src={googleplay} alt="googleplay" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
