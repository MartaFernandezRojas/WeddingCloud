// Import libraries
import React, { Component } from 'react';
import axios from 'axios';

import styles from '../../routes/router/router.styles.css';
import stylesform from './formulario.styles.css';
// Import global resources

// Import local resources
// import styles from './galeria.styles.css';

//import componenet react-materialize
// import {Button} from 'react-materialize';

///////////// Component ////////////////
export class Formulario extends Component {

  render() {
    return (
      <div>
        <h5>Registro de Invitado</h5>
        <form >
          <label form="nombre">Nombre:</label>
          <input className="form-control" id="nombre" type="text" name="nombre" placeholder="Nombre" />
          <label form="nombre">Apellido:</label>
          <input className="form-control" id="apellido" type="text" name="apellido" placeholder="Apellido" />
          <label form="nombre">Email:</label>
          <input className="form-control" id="email" type="email" name="Email" placeholder="Email" />
          <label form="nombre">Passsword:</label>
          <input className="form-control" id="password" type="password" name="Password" placeholder="Password" />
          <input type='button' onClick={() => {
          }} className={styles.button} value='Confirmar' />
        </form>
      </div>

    );
  }
}
