import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../../assets/styles/QueHacemos/QueHacemos.scss'
import iconllamada from '../../../assets/images/Home/initA/icon-llamada.png'
import desktopHeader from '../../../assets/images/WeDo/sectionAHeader.jpg'
import tabletHeader from '../../../assets/images/WeDo/tabletHeader.png'

import { Height } from '@material-ui/icons';

function Header() {
const useStyles = makeStyles((theme) => ({
  root: {
  },
  title: {
    width: '5em',
    heigth: 'auto',
    fontFamily: 'PoppinsExtraBold',
    fontWeight: 'bold',
    color: '#009245',
    fontSize: '5em',
    lineHeight: '1em',
    marginTop: '3em',
    marginLeft:'4em',
    marginBottom:'1em',
    [theme.breakpoints.down('lg')]: {
      fontSize: '4em',
     
    },[theme.breakpoints.down('md')]: {
      marginTop: '19em',
      width: 'auto',
      marginLeft:'auto',
      marginRight:'auto',
      textAlign:'center',
  
    },[theme.breakpoints.down('xs')]: {
      marginTop: '10em',
      fontSize: '4em',
      width: '5em',

    }
  },
    titleDescripcion: {
      width: '20em',
      heigth: '9.5em',
      fontFamily: 'Poppins',
      color: '#2f281e',
      fontSize: '1em',
      marginLeft:'20em',
      marginBottom:'1em',
      [theme.breakpoints.down('lg')]: {
        marginLeft:'16em',

      },[theme.breakpoints.down('md')]: {
        marginLeft:'auto',
        marginRight:'auto',
        textAlign:'center',
        width:'31em',
        color:'#a6a6a6',

      },[theme.breakpoints.down('xs')]: {
        width:'17em',
        
      }
    
    },
   headerDescription: {
      width: '42em',
      heigth: '9.5em',
      fontFamily: 'Poppins',
      color: '#009245',
      fontSize: '2em',
      marginLeft:'auto',
      marginRight:'auto',
      marginBottom:'1em',
      marginTop:'3em',
      textAlign:'center',
      fontWeight:'600',
      [theme.breakpoints.down('lg')]: {
        marginTop:'1em',
        width: '33em',

      },[theme.breakpoints.down('md')]: {
        fontSize: '1.7em',
        width: '15em',
        width: '27em',

      },[theme.breakpoints.down('xs')]: {
        fontSize: '1em',
        width: '20em',
      }
    
    },
    content: {
      marginTop: '0em',
      backgroundColor: 'none',
      backgroundImage: `url(${desktopHeader})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height:'62em',
      maxWidth:'1600px',
      marginLeft:'auto',
      marginRight:'auto',
      border:'0',
      [theme.breakpoints.down('lg')]: {
        height:'14em',
      },
      [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${tabletHeader})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'81em',
        marginBottom:'14em'
      },
      [theme.breakpoints.down('xs')]: {
        backgroundImage: `url(${tabletHeader})`,
        backgroundSize: 'contain',
        backgroundPosition: 'inherit',
        marginBottom:'-10em'
      },
    },
}));

const classes = useStyles();
const textContentP1 = 'Hasta para los servicios básicos necesitamos tener al día nuestras cuentas de taxes (impuestos) y debido a que en nuestros países latinos no es un tema relevante, chocamos cuando ya viviendo en EEUU las cosas con los impuestos cambian, ya que como persona natural  debes declarar tanto tus gastos y ganancias absolutamente todos los años y como sabemos que tienes otras cosas por las cuales ocuparse claramente los taxes quedan para lo último y muchas veces se te olvida ¡Y no queremos que eso te ocurra!. Por eso Lana Tax está siempre contigo desde tu celular, déjalo en nuestras manos.'
const textContentP2 = 'Debido a que cada persona es diferente, Lana tax ha creado varios planes para cada una de ellas, ya que no es lo mismo realizar planes para una persona que trabaja para una empresa, que realizar taxes para una persona quien es propietaria de la empresa. A continuación te mostraremos el plan que hemos diseñado para cada tipo de persona.'


  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} lg={12} className={classes.content} > 
            <p className={classes.title}>QUÉ HACEMOS</p>
            <p className={classes.titleDescripcion}>Entender el sistema de impuestos de los Estados Unidos de América puede resultar complicado y en la mayoría de los casos desconocemos que la obligación de rendir sus impuestos también representa beneficios para los  contribuyentes activos. </p>
          
        </Grid>
      </Grid>  
      <p className={classes.headerDescription}>Nuestra comunidad latina merece tener el mejor servicio en materia de impuestos y de asesoría de negocios en su idioma. Lanatax  garantiza a
nuestra comunidad la asesoría completa en cuestión tributaria para usted y para su negocio. 
</p>
    </div>
  );
}

export default Header;