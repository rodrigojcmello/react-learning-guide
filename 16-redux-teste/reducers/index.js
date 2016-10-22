import { combineReducers } from 'redux';
import tarefas from '../tarefas/components/Tarefa/redux/reducer.js';

const todoApp = combineReducers({
    tarefas
});

export default todoApp;
