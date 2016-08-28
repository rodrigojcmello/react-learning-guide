import React from 'react';
import { render } from 'react-dom';

import { combineReducers } from 'redux';

import { connect } from 'react-redux';

// Ação ------------------------------------------------------------------------

const alternaTexto = (texto, id) => {
    return {
        type: 'ALTERNA_TEXTO',
        id,
        texto
    };
};

// Redutor ---------------------------------------------------------------------

const cliqueRedutor = (state = {}, action) => {
    switch (action.type) {
        case 'ALTERNA_TEXTO':
            if (state.id !== action.id) {
                return state;
            }
            let texto = (state.texto == 'Texto 01') ? 'Texto 02' : 'Texto 01';
            return Object.assign({}, state, {
                texto: texto
            });
        default:
            return state;
    }
};

const botaoApp = combineReducers({
    cliqueRedutor
});

// Componente ------------------------------------------------------------------

let ComponenteBotao = ({ dispatch }) => {
    return (
        <div>
            <h1>Redux!!</h1>
            <button onClick={ e => {
                dispatch(alternaTexto('Texto 01'));
            } }>Vázio</button>
        </div>
    );
};

render(<ComponenteBotao/>, document.getElementById('app'));
