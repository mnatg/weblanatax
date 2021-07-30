import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import {
  Grid,
  Box,
  makeStyles
} from '@material-ui/core';
import { Colors } from '../../../Theme/index';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      marginBlock: '1em',
      maxWidth: '55%',
    }
  },
  containerNumber: {
    fontSize: '9.375em',
    height: '1.5em',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      width: '2.55em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '1.7em'
    },
  },
  containerText: {
    fontSize: '1em',
    height: '12.5em',
    paddingTop: '1.5625em',
    [theme.breakpoints.down('sm')]: {
      width: '24em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '16em'
    },
  },
  text: {
    marginInline: '2.3125em',
    [theme.breakpoints.down('sm')]: {
      marginInline: '4.3125em',
    },
    [theme.breakpoints.down('xs')]: {
      marginInline: '0.3125em',
    },
  },
  default: { margin: 0 }
}))

const FlipCards = ({ number, text }) => {

  const classes = useStyles();

  const [flip, setFlip] = useState(false);

  let mt = false;
  if(number == 3) {
    mt = true;
  }

  const handleFlip = () => {
    setFlip(!flip);
  }

  const ContentBox = ({text, back = false}) => {
    return(
      <Box color='#ffffff' bgcolor={Colors.aquamarine} textAlign='center' borderRadius={8} className={back ? classes.containerText : classes.containerNumber}  >
        <div style={ (text != '3.' && mt ) ? { marginTop: '2em' } : { marginTop: 0 }} >
          <p className={back ? classes.text : classes.default } >{text}</p>
        </div>
      </Box>)
  }

  return (
    <Grid item xs={3} className={classes.container}
      onMouseEnter={handleFlip} onMouseLeave={handleFlip} >
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <ContentBox text={number + '.'} />
        <ContentBox back={true}
          text={text} />
      </ReactCardFlip>
    </Grid>)
}

export default FlipCards;