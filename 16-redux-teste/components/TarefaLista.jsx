import React, { PropTypes } from 'react';
import Tarefa from './Tarefa';

import { connect } from 'react-redux';
import { alternaTarefa } from '../actions';

const TarefaLista = ({ tarefas, onTodoClick }) => (
    <ul>
        {tarefas.map(tarefa =>
            <Tarefa
                key={tarefa.id}
                {...tarefa}
                onClick={() => onTodoClick(tarefa.id)}
            />
        )}
    </ul>
);

const mapStateToProps = (state) => {
    return {
        tarefas: state.tarefas
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(alternaTarefa(id));
        }
    };
};

const TarefaListaAtiva = connect(
    mapStateToProps,
    mapDispatchToProps
)(TarefaLista);

export default TarefaListaAtiva;
