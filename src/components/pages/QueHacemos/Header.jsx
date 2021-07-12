import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../../assets/styles/QueHacemos/QueHacemos.scss'
import desktopHeader from '../../../assets/images/WeDo/sectionAHeader.jpg'
import tabletHeader from '../../../assets/images/WeDo/tabletHeader.webp'
import mobileHeader from '../../../assets/images/WeDo/mobileHeader.webp'

function Header() {
const useStyles = makeStyles((theme) => ({
  title: {
    width: '5em',
    heigth: 'auto',
    fontFamily: 'PoppinsExtraBold',
    fontWeight: 'bold',
    color: '#009245',
    fontSize: '5em',
    lineHeight: '1em',
    marginTop: '2.53125em',
    marginLeft:'4em',
    marginBottom:'0.5em',
    [theme.breakpoints.up('xl')]: {
      marginTop: '3.625em'
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '4em',
    },[theme.breakpoints.down('sm')]: {
      width: '80%',
      marginInline:'auto',
      marginTop: '18.3em',
      marginBottom: '1.5em',
      textAlign:'center',
      fontSize: '4.375em',
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
      marginBottom:'12.5em',
      [theme.breakpoints.down('lg')]: {
        marginLeft:'16em',
      },[theme.breakpoints.down('sm')]: {
        marginInline:'auto',
        textAlign:'center',
        width:'75%',
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
        marginBlock:'2em',
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
      backgroundImage: `url(${desktopHeader})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      maxWidth:'1600px',
      marginInline:'auto',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(${tabletHeader})`,
        height: '86.8em',
      },
      [theme.breakpoints.down('xs')]: {
        backgroundImage: `url(${mobileHeader})`,
        height: 'inherit',
      },
    },
}));

const classes = useStyles();

const textTitle = 'Entender el sistema de impuestos de los Estados Unidos de América puede resultar complicado y en la mayoría de los casos desconocemos que la obligación de rendir sus impuestos también representa beneficios para los  contribuyentes activos.';
const textBody = 'Nuestra comunidad latina merece tener el mejor servicio en materia de impuestos y de asesoría de negocios en su idioma. Lanatax  garantiza a nuestra comunidad la asesoría completa en cuestión tributaria para usted y para su negocio.'

  return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.content} > 
            <p className={classes.title}>QUÉ HACEMOS</p>
            <p className={classes.titleDescripcion}>{textTitle}</p>
        </Grid>
        <p className={classes.headerDescription}>{textBody}</p>
      </Grid>
  );
}

export default Header;