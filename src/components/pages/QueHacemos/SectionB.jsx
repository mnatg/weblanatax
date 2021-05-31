// React
import React from 'react';
// Assets
import rocket from '../../../assets/images/WeDo/rocket.webp';
import defaultImage from '../../../assets/images/QuienesSomos/shutterstock-104304026.png';
// Styles
import '../../../assets/styles/WeDo/SectionB.scss'
import { Colors } from '../../../Theme/index';
import {
  Grid,
  Box,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '4.375em',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'PoppinsExtraBold',
    width: '70%',
    [theme.breakpoints.up('xl')]: {
      width: '80%'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.4375em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  rocket: {
    position: 'absolute',
    height: '24.25em',
    width: '25.66875em',
    marginLeft: '50%',
    marginTop: '-14em',
    [theme.breakpoints.down('sm')]: {
      height: '18.25em',
      width: '19.66875em',
      marginTop: '-10.5em',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
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
        <Box color={Colors.aquamarine} bgcolor={Colors.shadowGray} flexDirection='row' py={4.8125} >
          <h1 className={classes.title} >AUDITORÍAS</h1>
          <img src={rocket} alt="Rocket" className={classes.rocket} />
        </Box>
      </Grid>
      <Grid item xs={12} style={{ backgroundImage: `url(${defaultImage})`, backgroundRepeat: 'round', marginBottom: '-2.375em' }} >
        <Grid item xs={6} style={{ marginInlineStart: 'auto' }} >
          <Box color={Colors.aquamarine} my={21.875} py={6.5} px={4} borderRadius={8} style={{ backgroundColor: 'rgba(233, 233, 233, 0.7)', width: '33.75em', textAlign: 'right', fontSize: '1em' }} >
            <p>{textContentP1}</p>
            <p>{textContentP2}</p>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SectionA;