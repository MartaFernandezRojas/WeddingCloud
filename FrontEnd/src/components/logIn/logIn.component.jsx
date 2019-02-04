// Import libraries
import React, { Component } from 'react';
import axios from 'axios';

import styles from '../../routes/router/router.styles.css';
// import stylesform from './formulario.styles.css';
// Import global resources

// Import local resources
// import styles from './galeria.styles.css';

//import componenet react-materialize
// import {Button} from 'react-materialize';

///////////// Component ////////////////
export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailregistro: '',
        passwordregistro: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });

  }
  insertUser() {
      console.log(this.state)
  }
  render() {
    return (
      <div>
        <h5>Log In</h5>
        <form >
          <label form="email">Email:</label>
          <input className="form-control validate" id="emailregistro" type="email" name="Email" placeholder="Email"  value={this.state.email} onChange={this.handleChange} />
          <label form="password">Passsword:</label>
          <input className="form-control" id="passwordregistro" type="password" name="Password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          <input type='button' onClick={() => {
              this.insertUser();
          }
          } className={styles.button} value='Confirmar' />
        </form>
      </div>
    );
  }
}

