import React from 'react';
import ProcTypes from 'prop-types';

const Error = ({ mensaje }) => {
   return ( 
      <p className="red darken-4 error">{mensaje}</p>
    );
}

Error.propTypes = {
   mensaje: ProcTypes.string.isRequired
}
 
export default Error;