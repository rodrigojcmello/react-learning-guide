import React, { PropTypes } from 'react';

const Tarefa = ({ texto }) => (
    <li>
        { texto }
    </li>
);

Tarefa.propTypes = {
    text: PropTypes.string.isRequired
};

export default Tarefa;
