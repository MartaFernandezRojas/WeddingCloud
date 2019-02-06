// Import libraries
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Store } from '@Models';
// Import global resources
import { cloud } from '../../assets';
import { Text, Galeria, Formulario, LogIn, FormularioConfirmacion, ResultadoInvitado, GestionInvitados } from '../../components';
import { Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

// Import local resources
import styles from './router.styles.css';

///////////// Component ////////////////
export class Router extends Component {
  state = {
    products: [],
  };

  handdleStore = () => {
    console.log('Click ver store');
  };

  handdleDispatch = () => {
    console.log('Click Lanzar accion');
  };

  // componentDidMount() {
  //   if (this.props.getProduct) this.props.getProduct();
  // }

  render() {
    return (
      <BrowserRouter>
        <Provider store={Store}>
          <Switch >
            <Route path="/" exact render={() => {
              return (
                <div className={styles.container}>
                        <img src={cloud} className={styles.image} />
                    <div className="row">
                      <div className="col-l6 mx-5">
                        <Formulario />
                      </div>
                      <div className="col-l6 mx-5">
                        <LogIn />
                      </div>
                    </div>
                    <div className={styles.animate}>

                    </div>
                </div>
              )
            }} />
            <Route path="/FormularioConfirmacion" exact component={FormularioConfirmacion} />
            <Route path="/gestionInvitados" exact component={GestionInvitados} />
          </Switch>
        </Provider>
      </BrowserRouter >
    );
  }
}
