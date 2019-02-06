// Import libraries
import React, { Component } from 'react';
import axios from 'axios';


//Import Stilos
import styles2 from './formConfirmacion.styles.css';
import styles from '../../routes/router/router.styles.css';
import { Navbar } from '../navbar/navbar.component'
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

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
      comentarios: 'Escribe lo que quieras',

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
        <Navbar />
        <div className="container">

          <div className="row">
            <div className="col l6">
              <h4>Bienvenid@ {this.state.nombre} {this.state.apellido}</h4>
              <h5>Rellena el formulario de confirmación</h5>
              <form >
                <label form="nombre">Nombre</label>
                <input className="form-control" id="nombre" type="text" name="nombre" placeholder={this.state.invitados ? this.state.invitados.nombre : 'null'} value={this.state.nombre} onChange={this.handleChange} />
                <label form="apellido">Apellido:</label>
                <input className="form-control" id="apellido" type="text" name="apellido" placeholder={this.state.invitados ? this.state.invitados.apellido : 'null'} value={this.state.apellido} onChange={this.handleChange} />
                <label form="email">Email:</label>
                <input className="form-control validate" id="email" type="email" name="Email" placeholder={this.state.invitados ? this.state.invitados.email : 'null'} value={this.state.email} onChange={this.handleChange} />
                <p>Confirmación de asistencia:</p>
                <label>
                  <input className="form-control validate" name="confirmacion" id="confirmacion" type="radio" checked={this.state.confirmacion === 'Si'} value='Si' onChange={this.handleChange} />
                  <span>Si puedo</span>
                </label>
                <label>
                  <input className="form-control validate" name="confirmacion" id="confirmacion" type="radio" checked={this.state.confirmacion === 'No'} value='No' onChange={this.handleChange} />
                  <span>No puedo</span>
                </label>
                <p>Alergia o intolerancia</p>
                <label>
                  <input className="form-control validate" id="id_alergia" type="radio" name="alergia" checked={this.state.id_alergia === 'Celiaco'} value='Celiaco' onChange={this.handleChange} />
                  <span>Celiaco</span>
                </label>
                <label>
                  <input className="form-control validate" id="id_alergia" type="radio" name="alergia" checked={this.state.id_alergia === 'Lactosa'} value='Lactosa' onChange={this.handleChange} />
                  <span>Lactosa</span>
                </label>
                <p>Vienes de parte de:</p>
                <label>
                  <input className="form-control validate" id="parte" type="radio" name="parte" checked={this.state.parte === 'Novia'} value='Novia' onChange={this.handleChange} />
                  <span>Novia</span>
                </label>
                <label>
                  <input className="form-control validate" id="parte" type="radio" name="parte" checked={this.state.parte === 'Novio'} value='Novio' onChange={this.handleChange} />
                  <span>Novio</span>
                </label>
                <p>Familia o Amigo</p>
                <label>
                  <input className="form-control validate" id="familia" type="radio" name="familia" checked={this.state.familia === 'Si'} value='Si' onChange={this.handleChange} />
                  <span>Familia</span>
                </label>
                <label>
                  <input className="form-control validate" id="familia" type="radio" name="familia" checked={this.state.familia === 'No'} value='No' onChange={this.handleChange} />
                  <span>Amigo</span>
                </label>
                <p>Asistiras a nuestra gran fiesta preboda</p>
                <label>
                  <input className="form-control validate" id="fiestapreboda" type="radio" name="fiestapreboda" checked={this.state.fiestapreboda === 'Si'} value='Si' onChange={this.handleChange} />
                  <span>Si, a darlo todo</span>
                </label>
                <label>
                  <input className="form-control validate" id="fiestapreboda" type="radio" name="fiestapreboda" checked={this.state.fiestapreboda === 'No'} value='No' onChange={this.handleChange} />
                  <span>No, me reservo para la  gran boda</span>
                </label>
                <p>DEJANOS TUS COMENTARIOS, EMOCIONES, PETICIONES DE CANCIONES....</p>
                <div className="input-field">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea className="materialize-textarea" id="comentarios" value={this.state.comentarios} onChange={this.handleChange}></textarea>
                </div>
                <input type='button' onClick={() => {
                  this.insertUser();
                }
                } className={styles.button} value='Confirmar' />
              </form>
            </div>
            <div className="col l6 lateral" >
                <MDBContainer>
                  <MDBCard className="card-body" style={{ width: "30rem", marginTop: "1rem" }}>
                    <MDBCardTitle>Los datos que hemos enviado a los novios son:</MDBCardTitle>
                    <MDBCardText>
                    <ul>
                  <li>Nombre: {this.state.nombre}</li>
                  <li>Apellido: {this.state.apellido}</li>
                  <li>Email: {this.state.email}</li>
                  <li>Parte: {this.state.parte}</li>
                  <li>Confirmacion: {this.state.confirmacion}</li>
                  <li>Familia: {this.state.familia}</li>
                  <li>Fiesta preboda: {this.state.fiestapreboda}</li>
                  <li>Alergias: {this.state.id_alergia}</li>
                  <li>Comentarios: {this.state.comentarios}</li>
                </ul>
                    </MDBCardText>
                  </MDBCard>
                </MDBContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

