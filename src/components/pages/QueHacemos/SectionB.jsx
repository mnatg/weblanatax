// React
import React from 'react';
// Assets
import rocket from '../../../assets/images/WeDo/rocket.webp';
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

  return (
    <Grid container  >
      <Grid item xs={12} >
        <Box color={Colors.aquamarine} bgcolor={Colors.shadowGray} flexDirection='row' py={4.8125} >
          <h1 className={classes.title} >AUDITORÍAS</h1>
          <img src={rocket} alt="Rocket" className={classes.rocket} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SectionA;