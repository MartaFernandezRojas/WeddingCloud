// Import libraries
import React, { Component } from 'react';
import axios from 'axios';


//Import Stilos
import styles2 from './formConfirmacion.styles.css';
import styles from '../../routes/router/router.styles.css';
import { NavbarInvitados } from '../navbarInvitados/navbarInvitados.component'
import { MDBCard, MDBCardText, MDBContainer} from "mdbreact";
import { style } from 'react-toastify';
import Card from '../../../node_modules/react-materialize/lib/Card';
import {CardExample} from '../cardInvitado/cardInvitado.component';

///////////// Component ////////////////
export class FormularioConfirmacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmacion: null,
      id_alergia: null,
      parte: null,
      familia: null,
      fiestapreboda: null,
      comentarios: 'Escribe lo que quieras'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  show() {
    // console.log(this.state);
  }

  insertUser() {

    // console.log(document.getElementById(confirmacion).value);
    let user = {
      id: this.state.id,
      id_boda: this.state.id_boda,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email,
      confirmacion: this.state.confirmacion,
      id_alergia: this.state.id_alergia,
      parte: this.state.parte,
      familia: this.state.familia,
      fiestapreboda: this.state.fiestapreboda,
      comentarios: this.state.comentarios
    }
    axios.post('http://localhost:3000/invitados/update', user)
      .then(response => {

      })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value

    });
    console.log(event.target.value);
  }
  componentDidMount() {
    var invitado = JSON.parse(localStorage.getItem("invitado"));
    this.setState(invitado);
    axios.get('http://localhost:3000/invitados/getMofificar', { params: { idb: invitado.id_boda, id: invitado.id } })
      .then(response => {
        this.setState(response.data[0])

      })
  }
  render() {
    return (
      <div>
        <NavbarInvitados />
        <div className="container">
          <h4>Bienvenid@ {this.state.nombre} {this.state.apellido}</h4>
          <h5>Rellena el formulario de confirmación</h5>
            <div className="row">
              <div className="col l6 mx-5">
                <form >
                  <label className={styles2.label} form="nombre">Nombre</label>
                  <input className="form-control" id="nombre" type="text" name="nombre" placeholder={this.state.invitados ? this.state.invitados.nombre : 'null'} value={this.state.nombre} onChange={this.handleChange} />
                  <label  className={styles2.label} form="apellido">Apellido:</label>
                  <input className="form-control" id="apellido" type="text" name="apellido" placeholder={this.state.invitados ? this.state.invitados.apellido : 'null'} value={this.state.apellido} onChange={this.handleChange} />
                  <label className={styles2.label} form="email">Email:</label>
                  <input className="form-control validate" id="email" type="email" name="Email" placeholder={this.state.invitados ? this.state.invitados.email : 'null'} value={this.state.email} onChange={this.handleChange} />
                  <p>Confirmación de asistencia:</p>
                  <div className="form-check">
                    <input className="form-check-input" name="confirmacion" id="confirmacion" type="radio" checked={this.state.confirmacion === 'Confirmado'} value='Confirmado' onChange={this.handleChange} />
                    <label  className={styles2.label}  for="Si puedo">Si</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" name="confirmacion" id="confirmacion" type="radio" checked={this.state.confirmacion === 'Ausente'} value='Ausente' onChange={this.handleChange} />
                    <label className={styles2.label}  for="Si puedo">No</label>
                  </div>
                  <p>Alergia o intolerancia</p>
                  <div className="form-check">
                    <input className="form-check-input validate" id="id_alergia" type="radio" name="alergia" checked={this.state.id_alergia === 'Celiaco'} value='Celiaco' onChange={this.handleChange} />
                    <label className={styles2.label} for="Si puedo">Celiaco</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input validate" id="id_alergia" type="radio" name="alergia" checked={this.state.id_alergia === 'Lactosa'} value='Lactosa' onChange={this.handleChange} />
                    <label className={styles2.label} for="Si puedo">Lactosa</label>
                  </div>
                  <p>Vienes de parte de:</p>
                  <div className="form-check">
                    <input className="form-check-input validate" id="parte" type="radio" name="parte" checked={this.state.parte === 'Novia'} value='Novia' onChange={this.handleChange} />
                    <label className={styles2.label} for="Si puedo">Novia</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input validate" id="parte" type="radio" name="parte" checked={this.state.parte === 'Novio'} value='Novio' onChange={this.handleChange} />
                    <label className={styles2.label} for="Si puedo">Novio</label>
                  </div>
                  <p>Familia o Amigo</p>
                  <div className="form-check">
                    <input className="form-check-input validate" id="familia" type="radio" name="familia" checked={this.state.familia === 'Familia'} value='Familia' onChange={this.handleChange} />
                    <label className={styles2.label} for="Si puedo">Familia</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input validate" id="familia" type="radio" name="familia" checked={this.state.familia === 'Amigo'} value='Amigo' onChange={this.handleChange} />
                    <label className={styles2.label} for="Si puedo">Amigo</label>
                  </div>
                  <p>Asistiras a nuestra gran fiesta preboda</p>
                  <div className="form-check">
                    <input className="form-check-input validate" id="fiestapreboda" type="radio" name="fiestapreboda" checked={this.state.fiestapreboda === 'Fiesta'} value='Fiesta' onChange={this.handleChange} />
                    <label className={styles2.label} for="Si puedo">Si, a darlo todo</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input validate" id="fiestapreboda" type="radio" name="fiestapreboda" checked={this.state.fiestapreboda === 'No Fiesta'} value='No Fiesta' onChange={this.handleChange} />
                    <label className={styles2.label} for="Si puedo">No, me reservo para la fiesta</label>
                  </div>
                  <div>
                    <p>DEJANOS TUS COMENTARIOS, EMOCIONES, PETICIONES DE CANCIONES....</p>
                    <div className="input-field">
                      <i className="material-icons prefix">mode_edit</i>
                      <textarea className="materialize-textarea" id="comentarios" value={this.state.comentarios} onChange={this.handleChange}></textarea>
                    </div>
                  </div>
                  <input className={style.button2} type='button' onClick={() => {
                    this.insertUser();
                  }
                  } className={styles.button} value='Confirmar' />
                </form>
              </div>
          
          <div className="col l6" >
          {/* <CardExample/> */}
            <MDBContainer>
              <MDBCard className="card-body" style={{ width: "30rem"}}>
                <h5>Datos proporcionados:</h5>
                <MDBCardText>
                  <ul>
                    <li className="list-group-item list-group-item-info">Nombre: {this.state.nombre}</li>
                    <li className="list-group-item list-group-item-warning">Apellido: {this.state.apellido}</li>
                    <li className="list-group-item list-group-item-danger">Email: {this.state.email}</li>
                    <li className="list-group-item list-group-item-success">Parte: {this.state.parte}</li>
                    <li className="list-group-item list-group-item-secondary">Confirmacion: {this.state.confirmacion}</li>
                    <li className="list-group-item list-group-item-primary">Familia: {this.state.familia}</li>
                    <li className="list-group-item list-group-item-dark">Fiesta preboda: {this.state.fiestapreboda}</li>
                    <li className="list-group-item list-group-item-danger">Alergias: {this.state.id_alergia}</li>
                    <li className="list-group-item list-group-item-info">Comentarios: {this.state.comentarios}</li>
                  </ul>
                </MDBCardText>
                <button type="button" id="logoutButton">Logout</button>
              </MDBCard>
            </MDBContainer>
          </div>
        </div>
      </div>
      </div >
    );
  }
}

