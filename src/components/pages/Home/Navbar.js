import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../../../assets/styles/Home/Navbar.css';
import '../../../assets/styles/Home/Home.css'
import logo from '../../../assets/images/Home/init/lana@3x.png';


function Navbar() {
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
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
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
             
            <li className='nav-item nav-btn'>
            {button && <Button onClick={closeMobileMenu} buttonStyle='btn--outline'>Sing In</Button>}
            </li>

            <li className='nav-item nav-btn'>
            {button && <Button onClick={closeMobileMenu} buttonStyle='btn--outlinetest' buttonSize='btn--large'>Sing Up</Button>}
            </li>

          </ul>
          
          </div>

        
      </nav>
    </>
  );
}

export default Navbar;
