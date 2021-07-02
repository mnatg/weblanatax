import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import '../../../assets/styles/Home/Home.scss';
import iconllamada from '../../../assets/images/Home/initA/icon-llamada.png'
import desktopHeader from '../../../assets/images/WeDo/sectionAHeader.png'


function Header() {
  return (
    <div>

      <Grid container>
        <Grid item xs={12} lg={6}>
            <img className="ICON" src={iconllamada} alt="iconllamada" />
            <img className="ICON" src={desktopHeader} alt="desktopHeader" />
        </Grid>
      </Grid>
           
    </div>
  );
}

export default Header;