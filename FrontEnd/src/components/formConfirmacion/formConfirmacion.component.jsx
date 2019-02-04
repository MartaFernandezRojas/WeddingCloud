// Import libraries
import React, { Component } from 'react';
import axios from 'axios';

//Import Stilos
import styles2 from './formConfirmacion.styles.css';
import styles from '../../routes/router/router.styles.css';

///////////// Component ////////////////
export class FormularioConfirmacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id_boda: null,
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        rol:0,
        id_alergia:'',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  show(){
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  insertUser() {
      axios.post('http://localhost:3000/invitados/post', this.state)
      .then(response => {
        console.log('insertado')
      })
  
  }
  render() {
    return (
        <div>
        <h5>Registro de Invitados</h5>
        <form >
          <label >ID Boda:</label>
          <input className="form-control" id="id_boda" type="text" name="boda" placeholder="ID Boda" value={this.state.id_boda} onChange={this.handleChange} />
          <label form="nombre">Nombre:</label>
          <input className="form-control" id="nombre" type="text" name="nombre" placeholder="Nombre" value={this.state.nombre} onChange={this.handleChange} />
          <label form="apellido">Apellido:</label>
          <input className="form-control" id="apellido" type="text" name="apellido" placeholder="Apellido" value={this.state.apellido} onChange={this.handleChange} />
          <label form="email">Email:</label>
          <input className="form-control validate" id="email" type="email" name="Email" placeholder="Email"  value={this.state.email} onChange={this.handleChange} />
          <label form="password">Passsword:</label>
          <input className="form-control" id="password" type="password" name="Password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          <input type='button' onClick={() => {
              this.insertUser();
          }
          } className={styles.button} value='Confirmar' />
        </form>
      </div>
    );
  }
}

