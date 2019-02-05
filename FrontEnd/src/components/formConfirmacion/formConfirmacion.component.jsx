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
      id_boda: 2,
      id:2

    };
    this.handleChange = this.handleChange.bind(this);
  }
  show() {
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  componentDidMount() {
    axios.get('http://localhost:3000/invitados/getMofificar')
      .then(response => {
        let invitados = []
        this.setState({invitados: response.data[this.state.id-1]})
        // let invitados = []
        // response.data.forEach(i => {
        //   invitados.push(i)
        // });
        // this.setState({invitados: invitados})
      })
  }
  render() {
    return (
      <div>
        <h5>Registro de Invitados</h5>
        <form >
          <label form="nombre">Nombre</label>
          <input className="form-control" id="nombre" type="text" name="nombre" placeholder={this.state.invitados?this.state.invitados.nombre:'null'} value={this.state.nombre} onChange={this.handleChange} />
          <label form="apellido">Apellido:</label>
          <input className="form-control" id="apellido" type="text" name="apellido" placeholder={this.state.invitados?this.state.invitados.apellido:'null'} value={this.state.apellido} onChange={this.handleChange} />
          <label form="email">Email:</label>
          <input className="form-control validate" id="email" type="email" name="Email" placeholder={this.state.invitados?this.state.invitados.email:'null'} value={this.state.email} onChange={this.handleChange} />

          <p>Confirmación de asistencia:</p>
          <label>
            <input className="form-control validate" name="confirmacion" id="confirmacion" type="radio" value={this.state.email} onChange={this.handleChange} />
            <span>Si puedo</span>
          </label>
          <label>
            <input className="form-control validate" name="confirmacion" id="confirmacion" type="radio" value={this.state.confirmacion} onChange={this.handleChange} />
            <span>No puedo</span>
          </label>
          <p>Alergia o intolerancia</p>
          <label>
            <input className="form-control validate" id="id_alergia" type="radio" name="alergia" value={this.state.id_alergia} onChange={this.handleChange} />
            <span>Celiaco</span>
          </label>
          <label>
            <input className="form-control validate" id="id_alergia" type="radio" name="alergia" value={this.state.id_alergia} onChange={this.handleChange} />
            <span>Lactosa</span>
          </label>

          <p>Vienes de parte de:</p>
          <label>
            <input className="form-control validate" id="parte" type="radio" name="parte" value={this.state.parte} onChange={this.handleChange} />
            <span>Novia</span>
          </label>
          <label>
            <input className="form-control validate" id="parte" type="radio" name="parte" value={this.state.parte} onChange={this.handleChange} />
            <span>Novio</span>
          </label>

          <p>Familia o Amigo</p>
          <label>
            <input className="form-control validate" id="familia" type="radio" name="familia" value={this.state.familia} onChange={this.handleChange} />
            <span>Familia</span>
          </label>
          <label>
            <input className="form-control validate" id="familia" type="radio" name="familia" value={this.state.familia} onChange={this.handleChange} />
            <span>Amigo</span>
          </label>

          <p>Asistiras a nuestra gran fiesta preboda</p>
          <label>
            <input className="form-control validate" id="fiestapreboda" type="radio" name="fiestapreboda" value={this.state.fiestapreboda} onChange={this.handleChange} />
            <span>Si, a darlo todo</span>
          </label>
          <label>
            <input className="form-control validate" id="fiestapreboda" type="radio" name="fiestapreboda" value={this.state.fiestapreboda} onChange={this.handleChange} />
            <span>No, me reservo para la  gran boda</span>
          </label>
          <p>DEJANOS TUS COMENTARIOS, EMOCIONES, PETICIONES DE CANCIONES....</p>
          <div className="input-field col s6">
            <i className="material-icons prefix">mode_edit</i>
            <textarea id="icon_prefix2" className="materialize-textarea" value={this.state.comentarios} ></textarea>
            <label for="icon_prefix2"></label>
          </div>

          <input type='button' onClick={() => {
            this.insertUser();
          }
          } className={styles.button} value='Confirmar' />
        </form>
      </div>
    );
  }
}

