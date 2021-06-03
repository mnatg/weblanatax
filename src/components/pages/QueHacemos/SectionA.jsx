import React from 'react';
import '../../../assets/styles/Home/Home.scss'
import '../../../assets/styles/QuienesSomos/QuienesSomos.scss'
import imagenA from '../../../assets/images/QuienesSomos/q-s-celu.png'
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Balls from '../../../assets/images/WeDo/graphics-copy.webp';
import BallTablet from '../../../assets/images/WeDo/ballstablet.webp';

import plan1 from '../../../assets/images/WeDo/card-small-free.webp';
import plan2 from '../../../assets/images/WeDo/card-small-basic.webp';
import plan3 from '../../../assets/images/WeDo/card-small-premium.webp';
import plan4 from '../../../assets/images/WeDo/card-small-deluxe.webp';
import plan5 from '../../../assets/images/WeDo/card-small-deluxe-copy.webp';
import bgWeDodesktop from '../../../assets/images/WeDo/shutterstock-1606546729.png';
import bgWeDoTablet from '../../../assets/images/WeDo/bgatablet.webp';
import bgWeDoMovil from '../../../assets/images/WeDo/gbamovil.png';


function SectionA() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
      alignContent: 'center',
      textAlign: 'center',
      backgroundColor: '#e9e9e9',
      paddingTop: '5%',
      paddingBottom: '5%',
      marginTop:'4%',
      [theme.breakpoints.down('xs')]: {
        paddingTop: '15%',
        paddingBottom: '15%',
        marginTop:'12%',
      },

    },
    title: {
      width: '100%',
      fontFamily: 'PoppinsExtraBold',
      fontWeight: 'bold',
      color: '#009245',
      fontSize: '6em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '3em',
      },
    },
    p: {
      color: '#009245',
      padding: '12%',
      textAlign: 'center',
    },
    paper: {
      backgroundColor: 'rgba(233, 233, 233, 0.7)'
    },
    content: {
      marginTop: '-0.8%',
      backgroundColor: 'none',
      backgroundImage: `url(${bgWeDodesktop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      [theme.breakpoints.down('lg')]: {
        marginTop: '-0.8%',
      },
      [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${bgWeDoTablet})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('xs')]: {
          backgroundImage: `url(${bgWeDoMovil})`,
        },

      }
    },
    contentTex: {
      fontSize: '1em',
      marginLeft: '5em',
      marginTop: '5em',
      marginBottom: '5em',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '80%',
        textAlign: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '120%',
      },
    },
    Balls: {
    marginTop: '-18em',
    width: '79%',
    marginLeft: '10%',
    marginRight: '10%',
    [theme.breakpoints.down('lg')]: {
      display: 'block'
    },
    [theme.breakpoints.down('sm')]: {
      display:'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
    BallsMovil: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display:'block',
      marginTop: '-18em',
      width: '95%',
      marginLeft: '2.5%',
      marginRight: '2.5%',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
    plan: {
    marginTop: '-7%',
    width: '90%',
    marginBottom: '2em',
    [theme.breakpoints.down('lg')]: {
      width: '95%',
      marginBottom: '2em',
      marginTop: '-7%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginTop: '0',
      marginLeft: '10%',
      marginRight: '10%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      marginBottom: '2em',
    },
  },
    plan2: {
    width: '90%',
    marginBottom: '2em',
    [theme.breakpoints.down('lg')]: {
      width: '95%',
      marginBottom: '2em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginTop: '0',
      marginLeft: '10%',
      marginRight: '10%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      marginBottom: '2em',
    },
  },

    destop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  }

  }));
const classes = useStyles();

return (

  <Grid container>
    <Grid item xs={12}>
      <Paper className={classes.header}><p className={classes.title} >TAXES</p></Paper>
    </Grid>
    <Grid item xs={12} className={classes.content}>
      <img src={Balls} alt="Balls" className={classes.Balls} />
      <img src={BallTablet} alt="Balls" className={classes.BallsMovil} />
      <Grid item lg={5} md={9} xs={9} className={classes.contentTex}>
        <Paper className={classes.paper}><p className={classes.p} >Hasta para los servicios básicos necesitamos tener al día nuestras cuentas de taxes (impuestos)
        y debido a que en nuestros países latinos no es un tema relevante, chocamos cuando ya viviendo
        en EEUU las cosas con los impuestos cambian, ya que como persona natural  debes declarar tanto tus
        gastos y ganancias absolutamente todos los años y como sabemos que tienes otras cosas por las cuales
        ocuparse claramente los taxes quedan para lo último y muchas veces se te olvida ¡Y no queremos que eso
                                                                         te ocurra!. Por eso Lana Tax está siempre contigo desde tu celular, déjalo en nuestras manos.<br></br>
          <br></br>
                                                                        Debido a que cada persona es diferente, Lana tax ha creado varios planes para cada una de ellas, ya que no
                                                                         es lo mismo realizar planes para una persona que trabaja para una empresa, que realizar taxes para una
                                                                         persona quien es propietaria de la empresa. A continuación te mostraremos el plan que hemos diseñado para
                                                                         cada tipo de persona.</p></Paper>
      </Grid>
    </Grid>
    <Grid container direction="row" justify="center" alignItems="center" >
      <Grid item xs={9} sm={6} lg={3}>
        <img src={plan1} alt="card-small-free" className={classes.plan} />
      </Grid>
      <hr className={classes.tablet}></hr>
      <Grid item xs={9} sm={6} lg={3}>
        <img src={plan2} alt="card-small-basic" className={classes.plan} />
      </Grid>
      <Grid item xs={9} sm={6} lg={3} >
        <img src={plan3} alt="card-small-premium" className={classes.plan} />
      </Grid>
      <hr className={classes.destop}></hr>
      <Grid item xs={9} sm={6} lg={3} >
        <img src={plan4} alt="card-small-deluxe" className={classes.plan2} />
      </Grid>
      <Grid item xs={9} sm={6} lg={3}>
        <img src={plan5} alt="card-small-deluxe-copy" className={classes.plan2} />
      </Grid>
    </Grid>
  </Grid >




);
}

export default SectionA;