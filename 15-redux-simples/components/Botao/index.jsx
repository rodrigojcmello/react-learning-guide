import React from 'react';
import { connect } from 'react-redux';
import alternaBotao from './action';

const Botao = (p) => (
    <button
        onClick={ p.onClick }
    >
        { p.texto ? p.texto : 'Padrão' }
    </button>
);

const mapStateToProps = (state) => {
    return {
        botoes: state.tarefas
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(alternaBotao(id));
        }
    };
};

Botoes = connect(
    mapStateToProps,
    mapDispatchToProps
)(Botao);

export default Botoes;
