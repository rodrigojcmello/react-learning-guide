import React from 'react';
import { connect } from 'react-redux';
import { adicionarTarefa } from '../actions';

let AdicionarTarefa = ({ dispatch }) => {
    let input;
    return (
        <form onSubmit={ e => {
            e.preventDefault();
            if (input.value.trim()) {
                dispatch(adicionarTarefa(input.value));
                input.value = '';
            }
        } }>
            <input ref={ node => { input = node; } } />
            <button type="submit">
                Adicionar
            </button>
        </form>
    );
};

export default AdicionarTarefa = connect()(AdicionarTarefa);
