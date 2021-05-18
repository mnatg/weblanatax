// React
import React from 'react';
import callBtn from '../../../assets/images/EmpiezaGratis/callBtn.png';

const AdviserLobby = ({adviser}) => {
    return (
        <div style={{ marginTop: '5.5em', paddingLeft: '1em' }} >
            <p style={{color:"gray", fontSize:"3.5em"}}>{adviser.fullname}</p>
            <p style={{color:"gray", fontSize:"1.5em", marginTop:"0.5em"}}>Asesor Comercial</p>

            <p style={{color:"black", fontSize:"3em", marginTop:"2em"}}>Su asesor  {adviser.state ? 'está disponible' : 'no está disponible'}</p>
            <p style={{color:"gray", fontSize:"1.5em", marginTop:"0.5em"}}>Tenemos tos caneles de comunicación disponibles para usted</p>
            <div style={{
                width: '3.5em',
                borderBottom: 'solid #f5bf21' ,
                marginTop: '1%',
                marginBottom: '1%'}} >
            </div>

            <button style={{border:"none", background:"none"}}><img src={callBtn}></img></button>

        </div>
    )
}

export default AdviserLobby