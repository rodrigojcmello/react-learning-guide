import { combineReducers } from 'redux';
import tarefas from './tarefas';
import botao from '../components/Botao/reducer';

const todoApp = combineReducers({
    tarefas,
    botao
});

export default todoApp;
