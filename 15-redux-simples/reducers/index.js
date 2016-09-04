import { combineReducers } from 'redux';
import tarefas from './tarefas';

const todoApp = combineReducers({
    tarefas
});

export default todoApp;
