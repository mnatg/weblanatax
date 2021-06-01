import React from 'react';
import '../../../assets/styles/Home/Home.scss'
import '../../../assets/styles/QuienesSomos/QuienesSomos.scss'
import imagenA from '../../../assets/images/QuienesSomos/q-s-celu.png'
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Balls from '../../../assets/images/WeDo/graphics-copy.webp';
import plan1 from '../../../assets/images/WeDo/card-small-free.webp';
import plan2 from '../../../assets/images/WeDo/card-small-basic.webp';
import plan3 from '../../../assets/images/WeDo/card-small-premium.webp';
import plan4 from '../../../assets/images/WeDo/card-small-deluxe.webp';
import plan5 from '../../../assets/images/WeDo/card-small-deluxe-copy.webp';
import bgWeDodesktop from '../../../assets/images/WeDo/shutterstock-1606546729.webp';

function SectionA() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
      alignContent: 'center',
      textAlign: 'center',
      backgroundColor: '#e9e9e9',
      paddingTop: '8em',
      paddingBottom: '8em'

    },
    title: {
      fontFamily: 'PoppinsExtraBold',
      fontWeight: 'bold',
      color: '#009245',
      fontSize: '6em',
    },
    p: {
      color: '#009245',
      padding: '12%',
      textAlign: 'justify',
    },
    paper:{
      backgroundColor: 'rgba(233, 233, 233, 0.7)'
    },
    content: {
      marginTop: '-0.8%',
      backgroundColor: '#e9e9e9',
      backgroundImage: `url(${bgWeDodesktop})`,
      backgroundSize:'cover',
      backgroundPosition:'center'
    },
    contentTex: {
      marginLeft: '5em',
      marginTop: '5em',
      marginBottom: '5em',
      
    },
    Balls: {
      marginTop: '-18em',
      width: '79%',
      marginLeft: '10%',
      marginRight: '10%'
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
      [theme.breakpoints.down('md')]: {
        width: '80%',
        marginTop: '0',
        marginLeft:'10%',
        marginRight:'10%'
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
      [theme.breakpoints.down('md')]: {
        width: '80%',
        marginTop: '0',
        marginLeft:'10%',
        marginRight:'10%'
      },
      [theme.breakpoints.down('xs')]: {
        width: '90%',
        marginBottom: '2em',
      },
    },

    destop: {
      [theme.breakpoints.down('md')]: {
        display:'none'
      },
      [theme.breakpoints.down('xs')]: {
        display:'none'
      },
    }

  }));
  const classes = useStyles();

  return (

    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.header}><p className={classes.title} >TAXES</p></Paper>
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <img src={Balls} alt="Balls" className={classes.Balls} />
        <Grid item xs={4} className={classes.contentTex}>
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
        <Grid item xs={9} md={9} lg={3}>
          <img src={plan1} alt="card-small-free" className={classes.plan} />
        </Grid>
        <Grid item xs={9} md={6} lg={3}>
          <img src={plan2} alt="card-small-basic" className={classes.plan} />
        </Grid>
        <Grid item xs={9} md={6} lg={3} >
          <img src={plan3} alt="card-small-premium" className={classes.plan} />
        </Grid>
        <hr className={classes.destop}></hr>
        <Grid item xs={9} md={6} lg={3} >
          <img src={plan4} alt="card-small-deluxe" className={classes.plan2} />
        </Grid>
        <Grid item xs={9} md={6} lg={3}>
          <img src={plan5} alt="card-small-deluxe-copy" className={classes.plan2} />
        </Grid>
      </Grid>
    </Grid >




  );
}

export default SectionA;