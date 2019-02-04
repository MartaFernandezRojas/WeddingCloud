// Import libraries
import React, { Component } from 'react';
// Import global resources
import { logo2 } from '../../assets';
import { Text, Galeria, Formulario } from '../../components';

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

  componentDidMount() {
    if (this.props.getProduct) this.props.getProduct();
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={logo2} className={styles.image} />
        <h1 className={styles.title}>Wedding Cloud</h1>
        <div className={styles.subContainer}>
        <Formulario/>
        <hr className={styles.linea}/>
        <Formulario/>
          {/* <a onClick={this.handdleStore} className={styles.button}>
            Ver el Store
          </a>
          <a onClick={this.handdleDispatch} className={styles.button}>
            Lanzar Acción
          </a> */}
        </div>
        {/* <div className={styles.text}>
          <Text />
        </div>
        <Galeria/> */}
        {/* {products.map((i) => <Galeria key={i.id} data={i} />)} */}
      </div>
    );
  }
}
