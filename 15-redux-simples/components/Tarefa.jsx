import React, { PropTypes } from 'react';

const Tarefa = ({ text }) => (
    <li>
        { text }
    </li>
);

Tarefa.propTypes = {
    text: PropTypes.string.isRequired
};

export default Tarefa;
