import React, { PropTypes } from 'react';
import TarefaListaItem from './TarefaListaItem';

const TarefaLista = ({ tarefas }) => (
    <ul>
        { tarefas.map( todo =>
            <TarefaListaItem
                key={todo.id}
                {...todo}
            />
        ) }
    </ul>
);

TarefaLista.propTypes = {
    tarefas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        texto: PropTypes.string.isRequired
    }).isRequired).isRequired,
};

export default TarefaLista;
