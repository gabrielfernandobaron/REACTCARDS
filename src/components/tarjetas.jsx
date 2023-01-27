import React from "react";
import '../styles/tarjetas.css'

function Tarjetas({id,image,abilidad,type,descripcion}) {
return (
    <div className="tarjetas" key={id}>
    <div className="complete_card">
    
        <div className="card_front">
            <img src={image} alt=""/>
            </div>
            
            <div className="card_text">
                <h2>Nombre: {abilidad}</h2>
                <p ><b>type: </b>{type}</p>
                <p ><b>categoria: </b>{descripcion}</p>
            </div>
        </div>
    </div>
    
);
}

export default Tarjetas;
