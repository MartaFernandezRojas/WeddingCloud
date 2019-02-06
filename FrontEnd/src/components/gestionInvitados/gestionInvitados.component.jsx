// Import libraries
import React, { Component } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];


import { Navbar } from '@Components'
//Import Stilos


///////////// Component ////////////////
export class GestionInvitados extends Component {

  state = {
    nombre: '',
    invitados: []
  };


  componentDidMount() {
    var invitado = JSON.parse(localStorage.getItem("invitado"));
    this.state.nombre = invitado.nombre;
    axios.get('http://localhost:3000/invitados/get', { params: { idb: invitado.id_boda } })
      .then(response => {
        this.setState({ invitados: response.data })
        console.log(this.state)

      })

  }
  render() {
    return (<div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-l12">
            <h1> Panel de administrador de: {this.state.nombre}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-l12">
            <ul>
              {this.state.invitados.map((e, index) => {
                return <p>{e.nombre}</p>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}