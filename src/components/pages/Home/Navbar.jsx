import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ButtonSignUp } from './ButtonSignUp';
import { ButtonSignOut } from './ButtonSignOut';
import { Link } from 'react-router-dom';
import '../../../assets/styles/Home/Navbar.scss';
import '../../../assets/styles/Home/Home.scss'
import logo from '../../../assets/images/Home/init/lana@3x.png';
import { useUser } from 'reactfire';
import Toast from '../../../utils/Toast';

//Auth
import firebaseG from 'firebase/app';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';


//--Services
//Services

import LogOutEmployeeService from '../../../services/logoutEmployee';

//Util


const Navbar = ({ user }) => {
  const firebase = useFirebaseApp();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 961) {
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

  if(user.data == null){
    console.log("usuario no está definido");
  } else {
    console.log("usuario está definido",user);
    email = user.data.email;
    //console.log("usuario está definido",user.data.email);
    autenticacion = true;
  }

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      LogOutEmployeeService(user.data.uid);
      Toast("La sesión se cerró.", "success");
    }catch(err){
      console.error("Error al cerrar sesión:" , err);
      Toast("Error al cerrar sesión.", "error");
    }
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/'  onClick={closeMobileMenu}>
            <img className="LANA" src={logo} alt="logo"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
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
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cómo Pensamos
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li className={autenticacion ? 'hide' : 'nav-item nav-btn' }>
              {button && <Button onClick={closeMobileMenu} buttonStyle='btn--outline'>Sing In</Button>}
            </li>
            <li className={autenticacion ? 'user-avatar' : 'hide' }>
              {button && <h1>{email}</h1>}
              <ButtonSignOut onClick={signOut} buttonStyle='btn--outlinetest' buttonSize='btn--large'>SignOut</ButtonSignOut>
            </li>
            <li className={autenticacion ? 'display-tablet' : 'nav-item nav-btn' }>
              {button && <ButtonSignUp onClick={closeMobileMenu} buttonStyle='btn--outlinetest' buttonSize='btn--large'>Sing Up</ButtonSignUp>}
            </li>
          </ul>
        </div>        
      </nav>
    </>
  );
}

export default Navbar;
