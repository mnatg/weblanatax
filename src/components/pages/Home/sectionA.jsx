import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import FlipCards from './FlipCards';
import { Colors } from '../../../Theme/index';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBlock: '1em',
    fontSize: '4.0625em',
    fontWeight: 'bold',
    fontFamily: 'PoppinsExtraBold',
    lineHeight: 1.08,
    letterSpacing: -1.74,
    color: Colors.aquamarine,
    [theme.breakpoints.down('sm')]: {
      lineHeight: 1,
      marginInline: '5%'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.375em',
      lineHeight: 1.05,
      letterSpacing: -1.02,
      marginInline: '20%'
    },
  },
  subTitle: {
    fontSize: '2.4375em',
    fontWeight: 600,
    color: '#a6a6a6',
    marginBottom: '1em'
  },
  cardContainer: {
    justifyContent: 'space-around',
    marginBlock: '1em',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '-1.5em',
    },
  }
}))

const textCards = [
  'Usted podrá exponer su caso con el consultor quien está disponible siempre para usted,de esta manera entenderemos mejor el caso, recuerde que la consulta es totalmente gratis',
  'Se realiza el diagnóstico investigando a fondo el caso para proveer las mejores soluciones posibles, de esta manera otorgarte las tres mejores opciones',
  'De esta manera, queda a tu disposición tres escenarios donde puedes escoger la solución que más te convenga'
]

const flipCards = () => {
  return textCards.map((text, index) => <FlipCards number={index + 1} text={text} />)
}

const SectionA = () => {

  const classes = useStyles();

  return (
    <Grid container item xs={12} >
      <Grid item xs={12} style={{ textAlign: 'center' }} >
          <p className={classes.title} >UNA EXPERIENCIA DIFERENTE CON LANATAX</p>
          <p className={classes.subTitle} >pasos a seguir</p>
      </Grid>
      <Grid item container xs={12} className={classes.cardContainer} >
        {flipCards()}
      </Grid>
    </Grid>
  );
}

export default SectionA;
