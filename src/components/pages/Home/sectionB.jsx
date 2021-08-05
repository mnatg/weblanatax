// React
import React from 'react';
// Components
import { Grid, makeStyles } from '@material-ui/core';
// Assets
import call from '../../../assets/images/Home/sectionB/call.webp';
import timer from '../../../assets/images/Home/sectionB/timer.png';
import money from '../../../assets/images/Home/sectionB/money.webp';
import cake from '../../../assets/images/Home/sectionB/cake.webp';
import people from '../../../assets/images/Home/sectionB/people.webp';
import statistic from '../../../assets/images/Home/sectionB/statistic.webp';
import earth from '../../../assets/images/Home/sectionB/earth.webp';
import papers from '../../../assets/images/Home/sectionB/papers.webp';

const content = [{
  img: call,
  alt: 'Videollamada',
  text: 'Videollamada Gratis.'
}, {
  img: timer,
  alt: 'Reloj',
  text: 'Ahorra tiempo.'
}, {
  img: money,
  alt: 'Billetes',
  text: 'Simple, rápido y seguro.'
}, {
  img: cake,
  alt: 'Torta',
  text: 'Obtén una revisión y análisis completo.'
}, {
  img: people,
  alt: 'Personas',
  text: 'Calidad al alcance de tu bolsillo.'
}, {
  img: statistic,
  alt: 'Estadistica',
  text: 'Te mantendremos informado.'
}, {
  img: earth,
  alt: 'Planeta',
  text: 'Te ayudaremos en donde sea que estés.'
}, {
  img: papers,
  alt: 'Hojas',
  text: 'Ten acceso a todos tus documentos.'
},]

const IconRender = ({img, alt, text, classes}) => <>
      <Grid item xs={4} sm={2} >
        <img src={img} alt={alt} className={classes.img} />
      </Grid>
      <Grid item xs={8} sm={4} >
        <p className={classes.text} >{text}</p>
      </Grid>
    </>

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    marginBlock: '1em',
  },
  title: {
    fontSize: '2.1875em',
    fontWeight: 'bold',
    lineHeight: 1.43,
    color: '#009245',
    fontFamily: 'PoppinsBold',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginLeft: 0,
    },
  },
  iconContainer: {
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '15%',
    },
  },
  img: {
    maxWidth: '4.8125em',
    maxHeight: '6em',
    marginTop: '1em',
  },
  text: {
    fontSize: '0.9375em',
    color: '#a6a6a6',
    lineHeight: 1.73,
    marginRight: '3em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  }
}))

const SectionB = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.container} >
      <Grid item xs={12} md={5} >
        <p className={classes.title} >La mejor combinación entre personas + tecnología</p>
      </Grid>
      <Grid item container xs={12} md={7} className={classes.iconContainer} >
        {content.map(item => {
          return (
            <IconRender img={item.img} alt={item.alt} text={item.text} classes={classes} />
          )
        })}
      </Grid>
    </Grid>
  );
}

export default SectionB;