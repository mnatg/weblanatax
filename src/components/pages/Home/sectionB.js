import React from 'react';
import '../../../assets/styles/Home/Home.css';
import imageA from '../../../assets/images/Home/sectionA/photo.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'
import billetes from '../../../assets/images/Home/initA/billetes.png'
import iconllamada from '../../../assets/images/Home/initA/icon-llamada.png'
import bolsitadinero from '../../../assets/images/Home/initA/bolsitadinero.png'
import estadistica from '../../../assets/images/Home/initA/estadistica.png'
import hojas from '../../../assets/images/Home/initA/hojas.png'
import personas from '../../../assets/images/Home/initA/personas.png'
import planeta from '../../../assets/images/Home/initA/planeta.png'
import torta from '../../../assets/images/Home/initA/torta.png'




import { Link } from 'react-router-dom';

function sectionB() {
  return (
    <div className='homebackground'>
    <div className='sectionB'>
       
    <p className='Le-ayudaremos-a-hace'>Le ayudaremos a <br/> hacer bien sus <br/>
     impuestos,<br/>
como tu elijas.</p>


<div>


<div className='gridtest-area'>

<div className='gridtest'>
<img className="ICON-LLAMADA" src={iconllamada} alt="iconllamada"/>
<p className='Videollamada-Gratis'> Videollamada Gratis. </p>
</div>

<div className='gridtest'>
<img className="BOLSITADINERO" src={bolsitadinero} alt="bolsitadinero"/>
<p className='Videollamada-Gratis'> Reembolso Máximo <br/> Garantizado. </p>
</div>
</div>

<div className='gridtest-area'>

<div className='gridtest'>
<img className="BILLETES" src={billetes} alt="billetes"/>
<p className='Simple-fcil-y-segu'> Simple, fácil y seguro. </p>
</div>

<div className='gridtest'>
<img className="TORTA" src={torta} alt="torta"/>
<p className='Revisin-Completa'> Revisión Completa - Obtén una <br/> revisión y análisis completo con <br/>nuestro software y asegúrate <br/>
que estás obteniendo el <br/> máximo reembolso. </p>
</div>

</div>

<div className='gridtest-area'>

<div className='gridtest'>
<img className="PERSONAS" src={personas} alt="personas"/>
<p className='Conctate-con-EAs'> Conéctate con EA’s (Agentes <br/> Inscritos) cada vez para <br/>obtener consejos y <br/>revisiones de tu declaración <br/> de impuestos.  </p>
</div>

<div className='gridtest'>
<img className="ESTADISTICA" src={estadistica} alt="estadistica"/>
<p className='Notificaciones-push'> Notificaciones push - Haremos <br/> que sea fácil estar informado <br/> sobre tu declaración de <br/>impuestos con notificaciones<br/> enviadas directamente a tu<br/> celular. </p>
</div>

</div>

<div className='gridtest-area'>

<div className='gridtest'>
<img className="PLANETA" src={planeta} alt="planeta"/>
<p className='haz-tus-taxes'> Haz tus taxes de donde sea.  </p>
</div>

<div className='gridtest'>
<img className="HOJAS" src={hojas} alt="hojas"/>
<p className='Ten-acceso-a-todos-t'> Ten acceso a todos tus<br/> documentos. </p>
</div>

</div>




</div>

        
       
    </div>

    </div>
  );
}

export default sectionB;