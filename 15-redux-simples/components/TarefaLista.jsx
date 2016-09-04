import React, { PropTypes } from 'react';
import Tarefa from './Tarefa';

const TarefaLista = ({ tarefas }) => (
    <ul>
        { tarefas.map(tarefa =>
            <Tarefa
                key={tarefa.id}
                {...tarefa}
            />
        ) }
    </ul>
);

TarefaLista.propTypes = {
    tarefas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
};

export default TarefaLista;
