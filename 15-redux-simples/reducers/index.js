import { combineReducers } from 'redux';
import tarefas from './tarefas';

const tarefaApp = combineReducers({
    tarefas
});

export default tarefaApp;
