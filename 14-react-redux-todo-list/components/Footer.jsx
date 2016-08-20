import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
    <p>
        Exibir:
        {' '}
        <FilterLink filter='SHOW_ALL'>
            Todos
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_ACTIVE'>
            Ativo
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_COMPLETED'>
            Concluído
        </FilterLink>
    </p>
);

export default Footer;
