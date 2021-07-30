import React from 'react';
import taxes from '../../../assets/images/Home/init/impuestos.webp'
import audits from '../../../assets/images/Home/init/audito.webp'
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Cards() {
  const useStyles = makeStyles((theme) => ({
    container: {
      background: "rgba(233, 233, 233, 0.6)",
      paddingBlock: '5%',
      justifyContent: 'center',
    },
    card: {
      background: "d8d8d8",
      borderRadius: '15px',
      margin:'2em',
      [theme.breakpoints.down('xs')]: {
        marginTop: '5em',

      }
    },
    Textcards: {
      background: '#d8d8d8',
      padding: '1.5em',
      height: '8em',
      color: '#009245',
      fontSize: '1em',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.21',
      letterSpacing: 'normal',
      [theme.breakpoints.down('xs')]: {
        height: '18em',
      }
    },
    AuditImgCards: {
      width: '9em',
      height: '8em',
      padding: '2em 0px 2em 0px',
      background: '#009245',
      borderRadius: '14px',
      position: 'static',
      marginLeft: '2em',
      marginTop: '-7em',
      [theme.breakpoints.down('lg')]: {
        width: '6em',
        height: '4em',
        marginTop: '-4em',
      },
      [theme.breakpoints.down('xs')]: {
        width: '8em',
        height: '6em',
        marginTop: '-4em',
        marginLeft: '20%',
      }
    },
    TaxImgCards: {
      width: '6em',
      height: '8em',
      padding: '2em 1.5em 2em 1.5em',
      background: '#009245',
      borderRadius: '14px',
      position: 'static',
      marginLeft: '2em',
      marginTop: '-7em',
      [theme.breakpoints.down('lg')]: {
        width: '3em',
        height: '4em',
        marginTop: '-4em',
      },
      [theme.breakpoints.down('xs')]: {
        width: '5em',
        height: '6em',
        marginTop: '-6em',
        marginLeft: '20%',
      }
    },
    title: {
      textAlign: 'center',
      marginTop: '-2em',
      marginBottom: '1em',
      position: 'static',
      fontFamily: 'PoppinsExtraBold',
      fontSize: '2em',
      color: '#009245',
      marginLeft:'2em',
      [theme.breakpoints.down('md')]: {
        textAlign: 'end',
      },
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        marginTop:'0.5em',
        marginLeft:0,
        marginBottom:'0.5em'
      }
    }

  }));
  const TaxCard = 'Nunca fue tan simple, rápido y seguro';
  const AuditCard = '¿Te llegó una carta del IRS? con Lanatax será la manera más simple de resolver tus deudas'
  const classes = useStyles();
  return (
    <Grid container item xl={12} className={classes.container}>
      <Grid item xs={9} sm={7} md={5} lg={4} xl={3} className={classes.card}>
        <Paper className={classes.Textcards}>
          <Link to='/' >
            <img className={classes.TaxImgCards} src={taxes} alt="taxes" />
          </Link>
          <h1 className={classes.title}>IMPUESTOS:</h1>
          <h3>{TaxCard}</h3>
        </Paper>
      </Grid>
      <Grid item xs={9} sm={7} md={5} lg={4} xl={3} className={classes.card}>
        <Paper className={classes.Textcards}>
          <Link to='/' >
            <img className={classes.AuditImgCards} src={audits} alt="audits" />
          </Link>
          <h1 className={classes.title}>AUDITORÍAS:</h1>
          <h3>{AuditCard}</h3>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Cards;
