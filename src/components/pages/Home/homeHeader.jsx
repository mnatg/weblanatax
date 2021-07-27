// React
import React from 'react';
// Components
import { Grid, Paper } from '@material-ui/core';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Assets
import bgmovil from '../../../../src/assets/images/Home/init/photoMobile.webp'
import bgtablet from '../../../../src/assets/images/Home/init/photoTablet.webp'
import bgweb from '../../../../src/assets/images/Home/init/photo.webp'
import storelabels from '../../../assets/images/Home/init/app-store.png'
import storelabels2 from '../../../assets/images/Home/init/google-play.png'
import { useUser } from 'reactfire';
import Toast from '../../../utils/Toast';
import Carousel from 'react-material-ui-carousel';

function HomeHeader() {
  const items = [
    {
      id: 1,
      title: <p className='impuestos'>IMPUESTOS</p>
    },
    {
      id: 2,
      title: <p className='impuestos'>AUDITORÍAS</p>
    }
  ]

  var user = useUser();
  var autenticacion = false;


  const validateHome = () => {

    if (user.data == null) {
      console.log("validateHome");
      Toast("Resgistrate y/o Ingresa Gratis", "error")
    } else {
      console.log("validateHome", user);
      //console.log("usuario está definido",user.data.email);
      Toast("Ingreso exitoso, Empieza Gratis", "success")
      autenticacion = true;
    }

  }
  const useStyles = makeStyles((theme) => ({
    header: {
      background: `url(${bgweb}) no-repeat`,
      marginInline: 'auto',
      backgroundSize: '100%',
      padding: '15% 0% 15% 50%',

      [theme.breakpoints.down('md')]: {
        padding: '7% 0% 7% 50%',

      },
      [theme.breakpoints.down('sm')]: {
        background: `url(${bgtablet}) no-repeat`,
        backgroundSize: 'contain',
        padding: '21% 0% 21% 57%',
      },
      [theme.breakpoints.down('xs')]: {
        background: `url(${bgmovil}) no-repeat`,
        backgroundSize: 'contain',
        padding: '100% 0% 0% 0%',
      },


    },
    textTitle: {
      fontSize: '4em',
      fontWeight: '700',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '0.97',
      letterSpacing: '4.1px',
      color: '#fff',
      fontFamily: 'PoppinsExtraBold',
      width: '7em',
      maxWidth: '7em',
      [theme.breakpoints.down('md')]: {
        fontSize: '3em',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.3em',
      }
    },
    Carousel: {
      fontSize: '4em',
      fontWeight: '700',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '.97',
      letterSpacing: '4.1px',
      fontFamily: 'PoppinsExtraBold',
      color: '#009245',
      width: '7em',
      maxWidth: '7em',
      marginTop: '1em',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.3em',

      },
      [theme.breakpoints.down('md')]: {
        fontSize: '3em',
        with: '3em'
      }
    },
    textSubTitle: {
      fontSize: '1.4em',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      color: '#ffffff',
      fontFamily: 'PoppinsExtraBold',
    },
    iconStore: {
      marginTop: '6em',
    },
    textApp: {
      fontSize: '1.1em',
      fontWeight: '700',
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      color: '#fff',
      marginTop: '1.5%',
      [theme.breakpoints.down('md')]: {
        fontSize: '1em',
        margin: '0% 0% 10% 0%',
      },
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        fontSize: '1em',
        margin: '0% 0% 5% 0%',
      },
    },
    LogoStore: {
      margin: '0 16px 0 0',
      width: '42%',
      height: '70%',
      [theme.breakpoints.down('md')]: {
        width: '40%',

      },
      [theme.breakpoints.down('xs')]: {
      },


    },
  }));
  const classes = useStyles();

  const textTitle = 'UNA MEJOR EXPERIENCIA EN:';
  const textSupTitle = 'Nos encargamos de todo por ti';
  const textApp = 'Descarga la app gratis ';
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} xl={10} className={classes.header}>
      <Grid item xs={10} sm={12} md={12} lg={12} xl={12} className={classes.textContent}>
        <p className={classes.textTitle}>{textTitle}</p>
        <Carousel className={classes.Carousel} autoPlay={true} navButtonsAlwaysInvisible animation='slide' indicatorIconButtonProps={{ style: { color: '#efefef' } }} activeIndicatorIconButtonProps={{ style: { color: '#009245' } }} >
          {items.map(item => <div key={item.id}  >{item.title}</div>)}
        </Carousel>
        <p className={classes.textSubTitle}>{textSupTitle}</p>
      </Grid>
      <Grid container item xs={10} sm={12} md={12} lg={12} className={classes.iconStore}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <p className={classes.textApp}>{textApp}</p>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={6} xl={6}>
          <a href='https://apps.apple.com/co/app/lanatax/id1556736650' >
            <img className={classes.LogoStore} src={storelabels} alt="storelabels" />
          </a>
          <a href='https://play.google.com/store/apps/details?id=com.lanatax' >
            <img className={classes.LogoStore} src={storelabels2} alt="storelabels2" />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomeHeader;
