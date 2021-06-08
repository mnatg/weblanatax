// React
import React from 'react';
// Assets
import rocket from '../../../assets/images/WeDo/rocket.webp';
import background from '../../../assets/images/WeDo/sectionBbg.webp';
import backgroundTablet from '../../../assets/images/WeDo/sectionBbgTablet.webp';
import backgroundMovil from '../../../assets/images/WeDo/sectionBbgMovil.png';
// Styles
import '../../../assets/styles/WeDo/SectionB.scss'
import { Colors } from '../../../Theme/index';
import {
  Grid,
  Box,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '16.125em',
    marginTop: '2em',
    [theme.breakpoints.down('xs')]: {
      height: '9.625em'
    }
  },
  title: {
    fontSize: '4.8125em',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'PoppinsExtraBold',
    width: '70%',
    paddingTop: '1em',
    [theme.breakpoints.up('xl')]: {
      width: '80%'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.4375em',
      paddingTop: '1.69091em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      fontSize: '2.5em',
      paddingTop: '1.225em'
    }
  },
  rocket: {
    position: 'absolute',
    height: '35.25em',
    width: '36.66875em',
    marginLeft: '50%',
    marginTop: '-19em',
    [theme.breakpoints.down('sm')]: {
      height: '29.625em',
      width: '30.125em',
      marginTop: '-16em',
      marginLeft: '40%'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  content: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '-2.375em',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${backgroundTablet})`,
      justifyContent: 'flex-start'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `url(${backgroundMovil})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'inherit',
    }
  },
  card: {
    paddingRight: '22.125em',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      marginTop:'120%',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
    
  },
  contentTextCard: {
    backgroundColor: 'rgba(233, 233, 233, 0.7)',
    textAlign: 'left',
    fontSize: '1em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '48.0625em',
      textAlign: 'center',
      marginInline: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.75em',

    }
  }
}));

const SectionA = () => {

  const classes = useStyles();

  const textContentP1 = 'Cartas del IRS en cada momento llegan a tu casa para rectificar que tiene asuntos pendientes con dicha entidad y sabemos lo molesto que resulta  que te estén insistiendo.\nEs por eso que con  nuestra app  los asesores estarán con usted en todo momento para otorgarle la solución que más te convenga y así tener la tranquilidad de que has sanado cuentas con el IRS y  finalmente ser un buen residente en EEUU.'
  const textContentP2 = '\n\nComo latinos sabemos que no estamos acostumbrados a llevar cuentas tan estrictas de impuestos debido a los países de donde nacimos y entendemos que es un proceso totalmente nuevo para el inmigrante y por tanto es común que se tengan cuentas pendientes con el famoso IRS y más cuando hablamos de auditorías, no te angusties si te llegan cartas del IRS  ¡Aquí estamos para apoyarte! A continuación   mostraremos los pasos que se realizarán al momento de empezar el proceso contigo.'
  return (
    <Grid container  >
      <Grid item xs={12} >
        <Box className={classes.header}
          color={Colors.aquamarine} bgcolor={Colors.shadowGray} flexDirection='row' >
          <h1 className={classes.title} >AUDITORÍAS</h1>
          <img src={rocket} alt="Rocket" className={classes.rocket} />
        </Box>
      </Grid>
      <Grid item container xs={12} className={classes.content} >
        <Grid item xs={12} md={6} xs={11} className={classes.card}  >
          <Box  className={classes.contentTextCard}
            color={Colors.aquamarine} my={21.875} py={6.5} px={4} borderRadius={8} >
            <p>{textContentP1}</p>
            <br/>
            <p>{textContentP2}</p>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SectionA;