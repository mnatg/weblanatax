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
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      display:'inline-block',
      background: '#ffffff'
    },
    navBarButton: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    logo: {
      width: 65
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
          color="primary">
            Quienes somos
            </Button>
          <Button variant='text' href='/que-hacemos' className={classes.navBarButton} size="large"
            color="primary">
            Que somos
            </Button>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default Navbar;
