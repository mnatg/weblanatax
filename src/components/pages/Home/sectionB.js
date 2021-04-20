import React from 'react';
import '../../../assets/styles/Home/Home.css';
import imageA from '../../../assets/images/Home/sectionA/photo.png'
import textA from '../../../assets/images/Home/sectionA/textA.png'
import { Grid } from '@material-ui/core';
import botonConectar from '../../../assets/images/Home/sectionA/boton-conectar.png'
import billetes from '../../../assets/images/Home/initA/billetes.png'
import iconllamada from '../../../assets/images/Home/initA/icon-llamada.png'
import bolsitadinero from '../../../assets/images/Home/initA/bolsitadinero.png'
import ahorratiempo from '../../../assets/images/Home/initA/ahorratiempo.png'
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
       
    <p className='Le-ayudaremos-a-hace display-mobile'>La mejor <br/>combinación<br/>
     entre personas<br/>
+ tecnología</p>

<p className='Le-ayudaremos-a-hace display-tablet'>La mejor combinación entre<br/>personas+ tecnología</p>
<div>
  


<div className='gridtest-area'>

<div className='gridtest'>
<img className="ICON-LLAMADA" src={iconllamada} alt="iconllamada"/>
<p className='Videollamada-Gratis'> Videollamada Gratis. </p>
</div>

<div className='gridtest'>
<img className="BOLSITADINERO" src={ahorratiempo} alt="bolsitadinero"/>
<p className='Videollamada-Gratis'>Ahorra Tiempo.</p>
</div>
</div>

<div className='gridtest-area'>

<div className='gridtest'>
<img className="BILLETES" src={billetes} alt="billetes"/>
<p className='Simple-fcil-y-segu'> Simple, fácil y seguro. </p>
</div>

<div className='gridtest'>
<img className="TORTA" src={torta} alt="torta"/>
<p className='Revisin-Completa'> Obtén una revisión y análisis<br/>completo.</p>
</div>

</div>

<div className='gridtest-area'>

<div className='gridtest'>
<img className="PERSONAS" src={personas} alt="personas"/>
<p className='Conctate-con-EAs'>Calidad con la que<br/>puedes contar.</p>
</div>

<div className='gridtest'>
<img className="ESTADISTICA" src={estadistica} alt="estadistica"/>
<p className='Notificaciones-push'>Te mantendremos informado</p>
</div>

</div>

<div className='gridtest-area'>

<div className='gridtest'>
<img className="PLANETA" src={planeta} alt="planeta"/>
<p className='haz-tus-taxes'>Te ayudaremos en donde<br/>quiera que estes</p>
</div>

<div className='gridtest'>
<img className="HOJAS" src={hojas} alt="hojas"/>
<p className='Ten-acceso-a-todos-t'>Ten acceso a todos tus<br/>documentos. </p>
</div>

</div>




</div>

        
       
    </div>

    </div>
  );
}

export default sectionB;