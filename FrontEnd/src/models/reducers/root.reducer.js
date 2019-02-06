const initialRootState = {
    invitadoResultado:{}

}
export function rootReducer(state = initialRootState, action) {
    switch (action.type) {
        case 'GET_INV':
        return{
            ...state,
            invitadoResultado: action.payload,
        }
        default:
            return state;
    }
}