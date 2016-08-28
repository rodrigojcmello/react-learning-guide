import React from 'react';
import { connect } from 'react-redux';
import { tarefaAdicionar } from '../actions';

let AplicacaoTarefa = ({ dispatch }) => {
    return (
        <form onSubmit={ e => {
            e.preventDefault();
            if (input.value.trim()) {
                dispatch(tarefaAdicionar(input.value)); // Dispacha a ação com o novo valor
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
