// React
import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux'
// Components
import {
  AppBar,
  Toolbar,
  IconButton,
  Button
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

// Styles
import '../../../assets/styles/Home/Navbar.scss';
import '../../../assets/styles/Home/Home.scss'
// Assets
import logo from '../../../assets/images/Home/init/lana@3x.png';
//Auth
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { createStyles, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        textAlign: 'end',
      },
    },
    appBar: {
      display:'inline-block',
      background: '#ffffff'
    },
    navBarButton: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      marginLeft: '0.5em',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      fontfamily: 'Poppins',
      fontSize: '0.875em',
      fontWeight: '600',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '2',
      letterSpacing: 'normal',
      color: '#a6a6a6',
      marginRight: '2em',
      textTransform:'none'
    },
    logo: {
      width: '6.5em',
      marginLeft: '10%',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    }
  }),
);


const Navbar = (props) => {
  const dispatch = useDispatch()
  const firebase = useFirebaseApp();
  const classes = useStyles();

  return (
    <div className={classes.title}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='black'
            aria-label='menu'
            className={classes.menuButton}
            onClick={() => props.handleDrawerToggle()}>
            <MenuIcon />
          </IconButton>
          <Link to='/' className={classes.title}>
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>
          <Button variant='text' href='/quienes-somos' className={classes.navBarButton} size="large"  
          color="primary" >
            Quienes somos
            </Button>
          <Button variant='text' href='/que-hacemos' className={classes.navBarButton} size="large"
            color="primary">
            Que Hacemos
            </Button>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default Navbar;
