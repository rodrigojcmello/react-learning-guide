import React, { PropTypes } from 'react';

const Tarefa = (prop) => (
    <li
        onClick={prop.onClick}
    >
        { prop.texto }
    </li>
);

Tarefa.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    texto: PropTypes.string.isRequired
};

export default Tarefa;
