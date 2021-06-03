import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageD from '../../../assets/images/Home/sectionD/photo-cel.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Button, Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'
import SendSms from '../../../Services/NewsLatter/SendSms';


import { Link } from 'react-router-dom';

function sectionD() {

  let mobileNumber = React.createRef();
  const message = "☺¡Muchas gracias por suscribirte! Te damos la bienvenida a la familia de Lanatax, expertos ayudando a latinos en sus impuestos y auditorías, si no has descargado la app ingresa aquí 👉Para dispositivos iOS https://apps.apple.com/co/app/lanatax/id1556736650 Para dispostivos Android  https://play.google.com/store/apps/details?id=com.lanatax  y empieza a disfrutar de nuestros servicios. ";

  const Send = async() => {
    console.log('enviar sms')
    try {
      let request = {
          "phoneNumber": mobileNumber.current.value,
           "message": message
      }
      console.log('enviando sms: ',request)
     
      await SendSms(request);

  } catch (err) {
      console.error("Error al enviar mensaje", err);
  }
    
}


  return (
    <div className='homebackground'>
      <Grid className='sectionD'>
        <div className="GridLeft">
          <h1 className='CONECTAR-CON-TU-ASES'>
            RESOLVIENDO <br/>CON <br />TRANSPARENCIA<br />
          </h1>
          <h1 className='textD'>
            Conéctate con los expertos en impuestos que han servido <br />a la comunidad hispana por más de 20 años.
          </h1>
          <h1 className='textD1'>
            SUSCRIBETE PARA TENERTE AL DÍA VIA SMS
          </h1>
          <input ref={mobileNumber} className="Boton-Nombre-d" placeholder="Enter your phone number" /><br/>
            <Button onClick={Send} className="BotonConectarD" >conectar</Button>
        </div>
        <div className="GridRight ">
          <img className="imageD" src={imageD} alt="imageD" />
        </div>
      </Grid>
      <Grid className='sectionDMovil'>
        <div className="GridRight ">
          <img className="imageD" src={imageD} alt="imageD" />
        </div>
        <div className="GridLeft">
          <h1 className='CONECTAR-CON-TU-ASES'>
            RESOLVIENDO <br/>CON <br />TRANSPARENCIA<br />
          </h1>
          <h1 className='textD'>
            Conéctate con los expertos en impuestos que han servido <br />a la comunidad hispana por más de 20 años.
          </h1>
          <h1 className='textD1'>
            SUSCRIBETE PARA TENERTE AL DÍA VIA SMS
          </h1>
            <input ref={mobileNumber} className="Boton-Nombre-d" placeholder="Enter your phone number" /><br/>
            <Button onClick={Send} className="BotonConectarD" >conectar</Button>
        </div>
      </Grid>
    </div>
  );
}

export default sectionD;
