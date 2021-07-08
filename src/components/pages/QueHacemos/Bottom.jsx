import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../../assets/styles/QueHacemos/QueHacemos.scss'
import iconllamada from '../../../assets/images/Home/initA/icon-llamada.png'
import BottomBackground from '../../../assets/images/WeDo/BottomBackground.jpg'
import BottomBackgroundTablet from '../../../assets/images/WeDo/ButtonBackgroundTablet.png'
import BottomBackgroundMobile from '../../../assets/images/WeDo/ButtonBackgroundMobile.png'
import Cohete from '../../../assets/images/WeDo/cohete.png'


import { Height } from '@material-ui/icons';

function Bottom() {
  const useStyles = makeStyles((theme) => ({
    root: {
    },
    colorOne:{
      [theme.breakpoints.down('xl')]: {
        backgroundColor: 'transparent', 
      },
      [theme.breakpoints.down('md')]: {
        backgroundColor: 'rgba(0,146,69,0.8)', 
    
      },
      [theme.breakpoints.down('xs')]: {
     
      },
    
    },
    colorTwo:{
      [theme.breakpoints.down('xl')]: {
        backgroundColor: 'rgba(0,146,69,0.8)', 
      },
      [theme.breakpoints.down('md')]: {
        backgroundColor: 'transparent', 
    
      },
      [theme.breakpoints.down('xs')]: {
        
      },
    
    },
    colorThree:{
      [theme.breakpoints.down('xl')]: {
        backgroundColor: 'rgba(0,146,69,0.8)',   
      },
      [theme.breakpoints.down('md')]: {
        
        backgroundColor: 'rgba(0,146,69,0.8)', 
      },
      [theme.breakpoints.down('xs')]: {
        
      },
    
    },
    colorFour:{
      [theme.breakpoints.down('xl')]: {
        backgroundColor: 'transparent',  
      },
      [theme.breakpoints.down('md')]: {
        
        backgroundColor: 'transparent', 
      },
      [theme.breakpoints.down('xs')]: {
        
      },
    
    },
    textOne: {
      width: '21em',
      heigth: 'auto',
      fontFamily: 'Poppins',
      fontWeight: 'normal',
      color: '#a6a6a6',
      fontSize: '1em',
      lineHeight: '1.5em',
      marginTop: '3em',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      [theme.breakpoints.down('lg')]: {
    

      }, [theme.breakpoints.down('md')]: {
        color: '#ffffff',
        textAlign:'center',
        marginTop: '11em',

      }, [theme.breakpoints.down('xs')]: {
    
        color: '#ffffff',
        textAlign:'center',
        marginTop: '5em',
      }
    },
    textTwo: {
      width: '21em',
      heigth: 'auto',
      fontFamily: 'Poppins',
      fontWeight: 'normal',
      color: '#ffffff',
      fontSize: '1em',
      lineHeight: '1.5em',
      marginTop: '3em',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      
      [theme.breakpoints.down('lg')]: {
     

      }, [theme.breakpoints.down('md')]: {
        color: '#a6a6a6',
        textAlign:'center',
        marginTop: '10em',

      }, [theme.breakpoints.down('xs')]: {
        color: '#a6a6a6',
        textAlign:'center',
        marginTop: '10em',
    
      }
    },
    textThree: {
      width: '21em',
      heigth: 'auto',
      fontFamily: 'Poppins',
      fontWeight: 'normal',
      color: '#ffffff',
      fontSize: '1em',
      lineHeight: '1.5em',
      marginTop: '22em',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      [theme.breakpoints.down('lg')]: {
      
      }, [theme.breakpoints.down('md')]: {
        marginTop: '15em',
        textAlign:'center',
      }, [theme.breakpoints.down('xs')]: {
        marginTop: '15em',
        textAlign:'center',
      }
    },
    textFour: {
      width: '21em',
      heigth: 'auto',
      fontFamily: 'Poppins',
      fontWeight: 'normal',
      color: '#a6a6a6',
      fontSize: '1em',
      lineHeight: '1.5em',
      marginTop: '22em',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      [theme.breakpoints.down('lg')]: {
      

      }, [theme.breakpoints.down('md')]: {
        marginTop: '15em',
        textAlign:'center',
      }, [theme.breakpoints.down('xs')]: {
        marginTop: '15em',
        textAlign:'center',

      }
    },
    bottomDescription: {
      width: '42em',
      heigth: '9.5em',
      fontFamily: 'Poppins',
      color: '#d9e021',
      fontSize: '2em',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '3em',
      marginTop: '3em',
      textAlign: 'center',
      fontWeight: '600',
      [theme.breakpoints.down('lg')]: {
        marginTop: '1em',
        width: '38em',

      }, [theme.breakpoints.down('md')]: {
        fontSize: '1.7em',
        width: '15em',
        width: '27em',
        marginTop: '8em',

      }, [theme.breakpoints.down('xs')]: {
        fontSize: '1em',
        width: '20em',
      }

    },
    content: {
      marginTop: '0em',
      backgroundColor: 'none',
      backgroundImage: `url(${BottomBackground})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '90em',
      maxWidth: '1600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '0',
      marginBottom: '10em',
      [theme.breakpoints.down('lg')]: {

      },
      [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${BottomBackgroundTablet})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '120em',
        marginBottom: '14em',
        marginTop: '0em',
      },
      [theme.breakpoints.down('xs')]: {
        backgroundImage: `url(${BottomBackgroundMobile})`,
        backgroundSize: 'contain',
        backgroundPosition: 'inherit',
        marginBottom: '-10em'
      },
    },
    cohete: {
      backgroundImage: `url(${Cohete})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      marginTop: '0em',
      maxWidth: '1600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
   
      [theme.breakpoints.down('lg')]: {

      },
      [theme.breakpoints.down('md')]: {
        marginTop: '0em',
      },
      [theme.breakpoints.down('xs')]: {
     
      },
    },
    cohetep: {
     
      marginTop: '0em',
      maxWidth: '1600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
   
      [theme.breakpoints.down('lg')]: {

      },
      [theme.breakpoints.down('md')]: {
    
        marginTop: '0em',
      },
      [theme.breakpoints.down('xs')]: {
     
      },
    },
  }));

  const classes = useStyles();
  const textContentP1 = 'Hasta para los servicios básicos necesitamos tener al día nuestras cuentas de taxes (impuestos) y debido a que en nuestros países latinos no es un tema relevante, chocamos cuando ya viviendo en EEUU las cosas con los impuestos cambian, ya que como persona natural  debes declarar tanto tus gastos y ganancias absolutamente todos los años y como sabemos que tienes otras cosas por las cuales ocuparse claramente los taxes quedan para lo último y muchas veces se te olvida ¡Y no queremos que eso te ocurra!. Por eso Lana Tax está siempre contigo desde tu celular, déjalo en nuestras manos.'
  const textContentP2 = 'Debido a que cada persona es diferente, Lana tax ha creado varios planes para cada una de ellas, ya que no es lo mismo realizar planes para una persona que trabaja para una empresa, que realizar taxes para una persona quien es propietaria de la empresa. A continuación te mostraremos el plan que hemos diseñado para cada tipo de persona.'


  return (
    <div className='pngcontainer1'>
      <img src={Cohete} ></img>
      <div className='circleOne hideCircles'></div>
      <div className='circleTwo hideCircles'></div>
      <div className='circleThree hideCircles'></div>
      <div className='circleFour hideCircles'></div>
      <Grid container className={classes.root} className={classes.content}>
        <Grid item xs={12} lg={6} xl={6} className={classes.colorOne}>
          <p className={classes.textOne}>Lamentablemente, nuestra comunidad ha sido víctima de personas inescrupulosas quienes sin estar habilitadas han practicado ante el IRS y los Departamentos de Impuestos Estatales, colocando a personas y negocios de nuestra comunidad en serios problemas tributarios.
</p></Grid>
        <Grid item xs={12} lg={6} xl={6} className={classes.colorTwo}>
          <p className={classes.textTwo}>Lanatax le brinda a nuestra comunidad EN SU IDIOMA un servicio profesional, personalizado, seguro y de calidad. Nosotros nos encargamos de hacerte fácil y seguro tu camino de impuestos (taxes).</p>
        </Grid>

        <Grid item xs={12} lg={6} xl={6} className={classes.colorThree}>
          <p className={classes.textThree}>Adiós a las malas experiencias y si quieres iniciarte en impuestos somos la compañía correcta, Lanatax no te abandona desde el principio hasta el final de tu proceso de impuestos.
</p></Grid>
        <Grid item xs={12} lg={6} xl={6} className={classes.colorFour}>
          <p className={classes.textFour}>¡No queremos que te sientas inseguro en temas tributarios, déjalos en nuestras manos!. Por eso Lanatax está siempre contigo desde tu celular, cerca de ti.
</p>
        </Grid>

      </Grid>
      <p className={classes.bottomDescription}>Lanatax ha creado planes que se ajustan a tu realidad tributaria, pues no es lo mismo proceso para un contratista, inversionista o un empleado. A continuación te mostraremos el plan que hemos diseñado para cada tipo de situación tributaria.
</p>
    </div>
  );
}

export default Bottom;