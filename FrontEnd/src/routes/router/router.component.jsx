// Import libraries
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Store } from '@Models';
// Import global resources
import { cloud } from '../../assets';
import { Text, Galeria, Formulario, LogIn, FormularioConfirmacion, ResultadoInvitado, GestionInvitados, Mesas, PaginaResgisLog,PaginaInicio,FormularioConfirmacionAdmin } from '../../components';
import { Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

// Import local resources
import styles from './router.styles.css';
import { style } from '../../../node_modules/react-toastify';

///////////// Component ////////////////
export class Router extends Component {
  // state = {
  //   products: [],
  // };

  render() {
    return (
      <BrowserRouter>
        <Provider store={Store}>
          <Switch >
            <Route path="/" exact render={() => {
              return ( 

                <PaginaInicio/>
                // <div className={styles.container}>
                //         <img src={cloud} className={styles.image} />
                //         <div className={styles.title}>Wedding Cloud</div>
                //     <div className="row">
                //       <div className="col-l6 mx-5">
                //         <Formulario />
                //       </div>
                //       <div className="col-l6 mx-5">
                //         <LogIn />
                //       </div>
                //     </div>
                //     <div className={styles.animate}>

                //     </div>
                // </div>
              )
            }} /> 
            <Route path="/PaginaResgisLog" exact component={PaginaResgisLog} />
            <Route path="/FormularioConfirmacion" exact component={FormularioConfirmacion} />
            <Route path="/FormularioConfirmacionAdmin" exact component={FormularioConfirmacionAdmin} />
            <Route path="/gestionInvitados" exact component={GestionInvitados} />
            <Route path="/mesas" exact component={Mesas} />
          </Switch>
        </Provider>
      </BrowserRouter >
    );
  }
}
