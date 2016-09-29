import React, { PropTypes } from 'react';
import Tarefa from './Tarefa';

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

// TarefaLista.propTypes = {
//     tarefas: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         texto: PropTypes.string.isRequired
//     }).isRequired).isRequired,
//     onTodoClick: PropTypes.func.isRequired
// };

export default TarefaLista;
