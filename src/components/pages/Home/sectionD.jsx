import React, { useState } from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageD from '../../../assets/images/Home/sectionD/photo-cel.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Button, Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'
import SendSms from '../../../Services/NewsLatter/SendSms';
import Toast from '../../../utils/Toast';


import { Link } from 'react-router-dom';

function sectionD() {

  let mobile = React.createRef();
  let mobile2 = React.createRef();

  const message = "☺¡Muchas gracias por suscribirte! Te damos la bienvenida a la familia de Lanatax, expertos ayudando a latinos en sus impuestos y auditorías, si no has descargado la app ingresa aquí 👉Para dispositivos iOS https://apps.apple.com/co/app/lanatax/id1556736650 Para dispostivos Android  https://play.google.com/store/apps/details?id=com.lanatax  y empieza a disfrutar de nuestros servicios. ";
  
  const Send = async() => {
    var mobileNumber='';
    console.log("current value mobile",mobile.current.value);
    console.log("current value mobile2",mobile2.current.value);

    if(mobile.current.value!=null && mobile.current.value !=undefined && mobile.current.value != ""){

      console.log("if mobile")
      mobileNumber = mobile.current.value;
    }
  else{
      console.log("else mobile2")
      mobileNumber=mobile2.current.value;
    }
    console.log('enviar sms: ',mobileNumber);

    if (mobileNumber=='') { 
      Toast("Debe ingresar un número movil","error");
    }else
    {
    try {
      let request = {
          "phoneNumber": mobileNumber,
           "message": message
      }
      console.log('enviando sms: ',request)
     
      await SendSms(request);
      Toast("Suscripción exitosa","success");

  } catch (err) {
    Toast("Ha ocurrido un error, contacte al administardor","error");
      console.error("Error al enviar mensaje", err);
  }

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
            Conéctate con los expertos en impuestos que han servido a la comunidad hispana por más de 20 años.
          </h1>
          <h1 className='textD1'>
          SUCRÍBETE PARA ESTAR INFORMADO VÍA SMS
          </h1>
          <input ref={mobile} className="Boton-Nombre-d"  placeholder="Example : 14********" /><br/>
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
            Conéctate con los expertos en impuestos que han servido a la comunidad hispana por más de 20 años.
          </h1>
          <h1 className='textD1'>
          SUCRÍBETE PARA ESTAR INFORMADO VÍA SMS
          </h1>
          <input ref={mobile2} className="Boton-Nombre-d" placeholder="Example : 14********" /><br/>
            <Button onClick={Send} className="BotonConectarD" >conectar</Button>
        </div>
      </Grid>
    </div>
  );
}

export default sectionD;
