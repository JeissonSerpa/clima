import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({ resultado }) => {

   //Extraer Valores
   const {main, name} = resultado;
   if(!main) return null;
   const temperatura = parseFloat(main.temp - 273.15, 10).toFixed(2);
   const temperaturaMax = parseFloat(main.temp_max - 273.15, 10).toFixed(2);
   const temperaturaMin = parseFloat(main.temp_min - 273.15, 10).toFixed(2);

   return ( 
      <div className="card-panel white col s12">
         <div className="black-text">
            <h2>El clima de {name} es:</h2>
            <p className="temperatura">
               {temperatura}&deg; C
            </p>
            <p>
               Temperatura Max:
               {temperaturaMax}&deg; C
            </p>
            <p>
               Temperatura Min:
               {temperaturaMin}&deg; C
            </p>
         </div>
      </div>
    );
}

Clima.protoTypes = {
   resultado: PropTypes.object.isRequired
}
 
export default Clima;