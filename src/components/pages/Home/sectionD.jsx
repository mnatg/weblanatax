// React
import React, { useState } from 'react';
// Components
import {
  Button,
  Grid,
  makeStyles,
  TextField
} from '@material-ui/core';
import MaterialUiPhoneNumber from 'material-ui-phone-number';
// Assets
import image from '../../../assets/images/Home/sectionD/photo-cel.webp'
import bgImage from '../../../assets/images/Home/sectionD/bg.webp'
// Services
import SendSms from '../../../Services/NewsLatter/SendSms';
// Utils
import Toast from '../../../utils/Toast';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBlock: '1em',
  },
  contentText: {
    paddingLeft: '15%',
    [theme.breakpoints.down('sm')]: {
      order: 1,
      paddingLeft: 0,
      textAlign: 'center',
    },
  },
  title: {
    fontFamily: 'PoppinsExtraBold',
    fontSize: '3.6875em',
    fontWeight: 900,
    lineHeight: 1.1,
    color: '#009245',
    marginBlock: '1em',
    [theme.breakpoints.down('sm')]: {
      width: '65%',
      marginInline: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5em',
      width: '100%',
    },
  },
  body: {
    fontSize: '1em',
    color: '#a6a6a6',
    marginBlock: '1em',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      marginInline: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: '1.25em',
    marginBottom: '1em',
    [theme.breakpoints.down('sm')]: {
      marginInline: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: '50%',
    },
  },
  img: {
    maxWidth: '70%',
    marginLeft: '15%',
  },
  phoneInput: {
    backgroundColor: '#d6d6d6',
    marginLeft: '25%',
    borderRadius: 25,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  btn: {
    marginLeft: '35%',
    marginTop: '2em',
    backgroundColor: '#009245',
    color: 'white',
    paddingInline: '2em',
    borderRadius: 25,
    height: 'max-content',
    '&:hover': {
      backgroundColor: '#009245ad',
    },
    [theme.breakpoints.down('sm')]: {
      marginInline: 'auto',
    },
  },
}))

const SectionD = () => {

  const [mobile, setMobile] = useState('');

  const message = "☺¡Muchas gracias por suscribirte! Te damos la bienvenida a la familia de Lanatax, expertos ayudando a latinos en sus impuestos y auditorías, si no has descargado la app ingresa aquí 👉Para dispositivos iOS https://apps.apple.com/co/app/lanatax/id1556736650 Para dispostivos Android  https://play.google.com/store/apps/details?id=com.lanatax  y empieza a disfrutar de nuestros servicios. ";

  const Send = async () => {
    if (mobile.length == 0) {
      Toast("Debe ingresar un número movil", "error");
    } else {
      try {
        let request = {
          "phoneNumber": mobile,
          "message": message
        }
        console.log('enviando sms: ', request)
        await SendSms(request);
        Toast("Suscripción exitosa", "success");
      } catch (err) {
        Toast("Ha ocurrido un error, contacte al administardor", "error");
        console.error("Error al enviar mensaje", err);
      }
    }
  }

  const classes = useStyles();

  return (
    <Grid container item xs={12} className={classes.container} >
      <Grid item container xs={12} md={6} className={classes.contentText} >
        <p className={classes.title} >Resolviendo con transparencia</p>
        <p className={classes.body} >Conéctate con los expertos que han servido a la comunidad latina por más de 20 años.</p>
        <p className={classes.subTitle} >SUSCRÍBETE PARA ESTAR INFORMADO VÍA SMS</p>
        <Grid item xs={12} >
          <MaterialUiPhoneNumber defaultCountry={'us'}
            onChange={setMobile}
            className={classes.phoneInput}
            InputProps={{disableUnderline: true}}
          />
        </Grid>
        <Button variant="contained" onClick={Send} className={classes.btn} >
          Conectar
        </Button>
      </Grid>
      <Grid item xs={12} md={6} >
        <img src={image} alt="Telefono" className={classes.img} />
      </Grid>
    </Grid>
  );
}

export default SectionD;
