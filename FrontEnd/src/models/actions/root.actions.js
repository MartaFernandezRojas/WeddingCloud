import axios from'axios';
const invitadoResultado = payload => ({ payload, type: 'GET_INV' });

export const getInv = inv => dispatch => {
    axios.get('http://localhost:3000/invitados/getMofificar', { params: { idb: inv.idb, id: inv.id } })
      .then(response => {
        dispatch(invitadoResultado(response.data[0]))

      })
}