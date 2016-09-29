const botao = (state = {}, action) => {
    switch (action.type) {
        case 'ALTERNA_BOTAO':
            // if (state.id !== action.id) {
            //     return state;
            // }
            return Object.assign({}, state, {
                texto: state.texto == 'mouse' ? 'teclado' : 'mouse'
            });
        default:
            return state;
    }
};

const botoes = (state = [], action) => {
    switch (action.type) {
        case 'ALTERNA_BOTAO':
            return state.map(t => botao(t, action));
        default:
            return state;
    }
};

export default botoes;
