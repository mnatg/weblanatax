// React
import React from 'react';
// Components
import {
  Grid,
  Box,
  Hidden
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Assets
import BottomBackground from '../../../assets/images/WeDo/BottomBackground.webp'
import BottomBackgroundTablet from '../../../assets/images/WeDo/BottonBackgroundTablet.webp'
import BottomBackgroundMobile from '../../../assets/images/WeDo/BottonBackgroundMobile.webp'
import rocket from '../../../assets/images/WeDo/rocket.webp'

function Bottom() {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundImage: `url(${BottomBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      maxWidth: '1600px',
      marginInline: 'auto',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(${BottomBackgroundTablet})`,
        alignItems: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        backgroundImage: `url(${BottomBackgroundMobile})`,
      },
    },
    primaryChange: {
      backgroundColor: 'rgba(0,146,69,0.8)',
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'transparent',
        color: '#a6a6a6',
      },
    },
    secondaryChange: {
      backgroundColor: 'transparent',
      color: '#a6a6a6',
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'rgba(0,146,69,0.8)',
        color: 'white',
      },
    },
    primary: {
      backgroundColor: 'rgba(0,146,69,0.8)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#a6a6a6',
    },
    texts: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        height: '10em'
      },
    },
    rocket: {
      position: 'absolute',
      marginTop: '30em',
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '110em',
        paddingInline: '0.5em',
      },
    },
    finalText: {
      color: '#009245',
      fontSize: '1.5em',
      textAlign: 'center',
      marginBlock: '2em',
      marginInline: 'auto',
      width: '65%',
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]: {
        width: '80%',
        marginTop: 0,
      },
    },
    smallBubble: {
      position: 'absolute',
      width: '2.1875em',
      height: '2.1875em',
      background: 'linear-gradient(to bottom, #fbe146, #f5bf21)',
      borderRadius: 25,
      marginRight: '75%',
      marginBottom: '180em',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    bigBubble: {
      position: 'absolute',
      width: '6.5625em',
      height: '6.5625em',
      background: 'linear-gradient(to bottom, #fbe146, #f5bf21)',
      borderRadius: 60,
      marginLeft: '70%',
      marginBottom: '111em',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    }
  }));

  const contentBox = (text) => (<Box px={{ xs: 5, sm: 25, md: 22 }} py={{ xs: 40, sm: 37, md: 35 }} className={classes.texts} >
    <p >{text}</p>
  </Box>)

  const classes = useStyles();


  return (<>
    <Grid item xs={12} container className={classes.container} >
      <Grid item xs={6} className={classes.smallBubble} />
      <Grid item xs={6} className={classes.bigBubble} />
      <Grid item xs={12} md={6} className={classes.secondaryChange} >
        {contentBox('Lamentablemente, nuestra comunidad ha sido víctima de personas inescrupulosas quienes sin estar habilitadas han practicado ante el IRS y los Departamentos de Impuestos Estatales, colocando a personas y negocios de nuestra comunidad en serios problemas tributarios.')}
      </Grid>
      <Grid item xs={12} md={6} className={classes.primaryChange} >
        {contentBox('Lanatax le brinda a nuestra comunidad EN SU IDIOMA un servicio profesional, personalizado, seguro y de calidad. Nosotros nos encargamos de hacerte fácil y seguro tu camino de impuestos (taxes).')}
      </Grid>
      <Grid item xs={12} className={classes.rocket} >
        <Box >
          <img src={rocket} alt="Rocket" style={{ maxWidth: '100%' }} />
        </Box>
      </Grid>
      <Hidden smUp >
        <Grid item xs={6} className={classes.smallBubble}
          style={{ marginBottom: 0, width: '3.0625em', height: '3.0625em', marginLeft: '5em' }} />
      </Hidden>
      <Grid item xs={12} md={6} className={classes.primary} >
        {contentBox('Adiós a las malas experiencias y si quieres iniciarte en impuestos somos la compañía correcta, Lanatax no te abandona desde el principio hasta el final de tu proceso de impuestos.')}
      </Grid>
      <Grid item xs={12} md={6} className={classes.secondary} >
        {contentBox('¡No queremos que te sientas inseguro en temas tributarios, déjalos en nuestras manos!. Por eso Lanatax está siempre contigo desde tu celular, cerca de ti.')}
      </Grid>
      <Hidden xsDown mdUp >
        <Grid item xs={6} className={classes.smallBubble} style={{ marginTop: '180em', marginBottom: 0 }} />
        <Grid item xs={6} className={classes.bigBubble} style={{ marginTop: '110em', marginBottom: 0 }} />
      </Hidden>
    </Grid>
    <p className={classes.finalText} >Lanatax ha creado planes que se ajustan a tu realidad tributaria, pues no es lo mismo proceso para un contratista, inversionista o un empleado. Para saber más de dichos planes ingresa a la app Lanatax desde tu móvil.</p>
  </>
  );
}

export default Bottom;