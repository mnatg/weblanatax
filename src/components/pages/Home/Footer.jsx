import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Home/init/lana@3x.png';
import { Grid } from '@material-ui/core';
import facebook from '../../../assets/images/Home/sectionD/facebook.png';
import twitter from '../../../assets/images/Home/sectionD/twitter.png';
import instagram from '../../../assets/images/Home/sectionD/instagram.png';
import apple from '../../../assets/images/Home/sectionD/apple.png';
import googleplay from '../../../assets/images/Home/sectionD/googleplay.png';
import SendEmail from '../../../Services/Notication/EmailNotification';
import Toast from '../../../utils/Toast';
import validator from 'validator'
import { makeStyles } from '@material-ui/core/styles';

function Footer() {

  let email = React.createRef();

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
            "topic": 'newsLetter'
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
  const useStyles = makeStyles((theme) => ({
    ContainerFooter: {
      paddingInline: "10%",
      [theme.breakpoints.down('sm')]: {
        paddingInline: "0",
      },
    },
    GeneralFooter: {
      borderTop: "2px solid #008f45",
      borderBottom: "2px solid #008f45",
      marginBottom: "10px",
      paddingTop: "3em",
      paddingBottom: "2em"
    },
    LogoLana: {
      width: "40%",
      marginLeft: "1em",
      [theme.breakpoints.down('sm')]: {
        width: "60%"
      },
      [theme.breakpoints.down('xs')]: {
        marginInline: "40%",
        width: "40%",
      },
    },
    title: {
      fontSize: "1.25em",
      fontWeight: "bold",
      [theme.breakpoints.down('sm')]: {
        marginBottom: "2em"
      },

    },
    link: {
      marginTop: "1em",
      textDecoration: "none",
      color: "#544837",

    },
    inputEmail: {
      width: "85%",
      padding: "1em ",
      borderRadius: "4px",
      border: "solid 1px #bcd0e5",
      backgroundColor: "#ffffff",
      marginTop: "1em",
      marginBottom: "1em"
    },
    buttonRegister: {
      focus: {
        online: "none",
      },
      width: "12.5em",
      padding: "0.5em 0.9375em",
      borderRadius: "4px",
      backgroundColor: "#008f45",
      fontSize: "1em",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#ffffff",
      marginTop: "1em",
      border: "none",
      cursor: "pointer"
    },

    linkTerms: {
      fontSize: "80%",
      color: "#a9a8a7",
    },
    social: {
      marginTop: "2em",
      [theme.breakpoints.down('xs')]: {
        flexFlow: "wrap-reverse",
      },

    },
    icons: {
      textAlign: "right",
      [theme.breakpoints.down('xs')]: {
        textAlign: "center",
      },
    },
    textFooter: {
      margin: "10px 142px 14px 0",
      fontFamily: "Poppins",
      fontSize: "15px",
      fontWeight: "600",
      letterSpacing: "normal",
      color: "#a6a6a6",
      [theme.breakpoints.down('xs')]: {
        textAlign: "center",
        marginInline: "10%"
      },
    },
    icon: {
      marginInline: "1em",
      [theme.breakpoints.down('xs')]: {
        marginInline: "0.2em",
        display: "none"
      },
    },
    space: {
      [theme.breakpoints.up('md')]: {
        display: "none",

      },
    },
    sub: {
      [theme.breakpoints.down('sm')]: {
        marginTop: "4em"
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: "2em",
        marginTop: "5em"
      },
    },
    body: {
      [theme.breakpoints.down('xs')]: {
        marginLeft: "2em",
        marginTop: "5em"
      },
    },
    twitter: {
      display: "none"
    },
    iconsMovil: {
      [theme.breakpoints.up('sm')]: {
        display: "none",
      },
      [theme.breakpoints.down('xs')]: {
        textAlign: "center"
      },
    }
  }))
  const classes = useStyles();

  return (
    <Grid className={classes.ContainerFooter} item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Grid container className={classes.GeneralFooter}>
        <Grid item xs={10} sm={4} md={4} lg={4} xl={4}>
          <Link to='/'  >
            <img className={classes.LogoLana} src={logo} alt="logo" />
          </Link>
        </Grid>
        <Grid className={classes.body} item xs={10} sm={6} md={4} lg={4} xl={4}>
          <p className={classes.title}>Enlaces Rápidos</p>
          <Link className={classes.link} to='/quienes-somos' >
            <p className={classes.link}>Quienes somos</p>
          </Link>
          <Link className={classes.link} to='/que-hacemos' >
            <p className={classes.link}>Que Hacemos</p>
          </Link>
        </Grid>
        <Grid className={classes.space} item xs={12} sm={4} md={4} lg={4} xl={4}></Grid>
        <Grid className={classes.sub} item xs={9} sm={6} md={4} lg={4} xl={4}>
          <p className={classes.title}>Suscribete a nuestro <br />Newslatter</p>
          <input ref={email} className={classes.inputEmail} placeholder="Email" onChange={(e) => validateEmail(e)}  />
          <br />
          <Link className={classes.linkTerms} href='https://firebasestorage.googleapis.com/v0/b/dev-lanatax.appspot.com/o/Privacy_policy%2F9233184a-bfbc-11eb-a980-0cc47a792c0a_id_9233184a-bfbc-11eb-a980-0cc47a792c0a.html?alt=media&token=5a71f1b0-ff86-4efd-aca5-9bf49fa8f14a'>
            ¿Ya leiste nuestras politicas de privacidad ?
          </Link>
          <br></br>
          <button disable={acceptPolicy} onClick={Send} className={classes.buttonRegister}>Registrar</button>
        </Grid>

      </Grid>
      <Grid container className={classes.social} >
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <p className={classes.textFooter}>©2021 M&A Tax Group. All rights reserved</p>
        </Grid>
        <Grid item xs={6} sm={3} md={4} lg={4} xl={4} className={classes.icons}>
          <Link href='https://www.facebook.com/mnataxgroup'>
            <img className={classes.icon} src={facebook} alt="facebook" />
          </Link>
          <Link href=''>
            <img className={classes.twitter} src={twitter} alt="twitter" />
          </Link>
          <Link href='https://www.instagram.com/mnataxgroup/'>
            <img className={classes.icon} src={instagram} alt="instagram" />
          </Link>
        </Grid>
        <Grid item xs={6} sm={3} md={4} lg={4} xl={4} className={classes.icons}>
          <Link href='https://apps.apple.com/co/app/lanatax/id1556736650'>
            <img className={classes.icon} src={apple} alt="apple" />
          </Link>
          <Link href='https://play.google.com/store/apps/details?id=com.lanatax'>
            <img className={classes.icon} src={googleplay} alt="googleplay" />
          </Link>
        </Grid>
        <Grid item xs={12} className={classes.iconsMovil}>
          <Link href='https://www.facebook.com/mnataxgroup'>
            <img className={classes.iconMovil} src={facebook} alt="facebook" />
          </Link>
          <Link href=''>
            <img className={classes.twitter} src={twitter} alt="twitter" />
          </Link>
          <Link href='https://www.instagram.com/mnataxgroup/'>
            <img className={classes.iconMovil} src={instagram} alt="instagram" />
          </Link>
          <Link href='https://apps.apple.com/co/app/lanatax/id1556736650'>
            <img className={classes.iconMovil} src={apple} alt="apple" />
          </Link>
          <Link href='https://play.google.com/store/apps/details?id=com.lanatax'>
            <img className={classes.iconMovil} src={googleplay} alt="googleplay" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
