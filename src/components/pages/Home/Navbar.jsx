// React
import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux'
import { onLogout } from '../../../Store/actions/Auth'
// Components
import {
  AppBar,
  Toolbar,
  IconButton
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Button } from './Button';
import { ButtonSignUp } from './ButtonSignUp';
import { ButtonSignOut } from './ButtonSignOut';
// Styles
import '../../../assets/styles/Home/Navbar.scss';
import '../../../assets/styles/Home/Home.scss'
// Assets
import logo from '../../../assets/images/Home/init/lana@3x.png';
// Icons
import { Menu } from '@material-ui/icons';
//Auth
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
// Util
import Toast from '../../../utils/Toast';


const Navbar = ({ user }) => {
  const dispatch = useDispatch()
  const firebase = useFirebaseApp();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  var autenticacion = false;

  var user = useUser();
  var email = "";

  let history = useHistory();

  if(user.data == null){
    console.log("usuario no está definido NavBar");
    
  } else {
    console.log("usuario está definido NavBar",user);
    email = user.data.email;
    //console.log("usuario está definido",user.data.email);
    autenticacion = true;
  }

  setTimeout(() => {
    // //setLoading(false)
   }, 5000);

  const signOut = async () => {
    console.log("hola sign out");
    try {
      console.log("hola action");
      await dispatch(onLogout({}));
      setTimeout(() => {
       // //setLoading(false)
      }, 5000);
    } catch (error) {
      //setLoading(false)
      Toast(error,"error")
    }
  }

  return (
    <AppBar className='navbar'>
      <Toolbar className='navbar-container'>
        <IconButton edge="end" className='menu-icon' aria-label="menu" onClick={handleClick} >
          <Menu fontSize='large' />
        </IconButton>
        <Link to='/' className='left' onClick={closeMobileMenu}>
        <img className="LANA" src={logo} alt="logo"/>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/quienes-somos' className='nav-links' onClick={closeMobileMenu}>
              Quienes Somos
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Que hacemos
            </Link>
          </li>
          <li className='nav-item hide'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Cómo Pensamos
            </Link>
          </li>
          <li className='hide'>
            <Link
              to='/sign-in'
              className= {!autenticacion ? 'nav-links-mobile' : 'hide' } 
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
           </li>
           <li>
            <Link
              to='/home'
              className={autenticacion ? 'nav-links-mobile' : 'hide' } 
              onClick={signOut}
            >
              Sign Out
            </Link>
            {!button &&<h1 className='user-avatar-mobile'>{email}</h1>}
           </li>
           <li className='hide'>
            <Link
              to='/sign-up'
              className= {!autenticacion ? 'nav-links-mobile' : 'hide' } 
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          <li className='hide'>
            {button && <Button onClick={closeMobileMenu} buttonStyle='btn--outline'>Sing In</Button>}
          </li>
          <li className='hide' >
          {button && <h1 className='user-avatar'>{email}</h1>}
          </li>
          <li className= 'hide'>
          {button &&<ButtonSignOut onClick={signOut} buttonStyle='btn--outlinetest' buttonSize='btn--large'>SignOut</ButtonSignOut>}
          </li>
          <li className= 'hide'>
            {button && <ButtonSignUp onClick={closeMobileMenu} buttonStyle='btn--outlinetest' buttonSize='btn--large'>Sing Up</ButtonSignUp>}
          </li>
        </ul>
      </Toolbar>        
    </AppBar>
  );
}

export default Navbar;
