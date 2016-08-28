import React, { PropTypes } from 'react';

const TarefaListaItem = ({ text }) => (
    <li>
        { text }
    </li>
);

TarefaListaItem.propTypes = {
    text: PropTypes.string.isRequired
};

export default TarefaListaItem;
