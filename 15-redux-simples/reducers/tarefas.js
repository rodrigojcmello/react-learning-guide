const tarefa = (state = {}, action) => {
    switch (action.type) {
        case 'ADICIONAR_TAREFA':
            return {
                id: action.id,
                texto: action.texto,
                completed: false
            };
        case 'ALTERNA_TAREFA':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state;
    }
};

const tarefas = (state = [], action) => {
    switch (action.type) {
        case 'ADICIONAR_TAREFA':
            return [
                ...state,
                tarefa(undefined, action)
            ];
        case 'ALTERNA_TAREFA':
            return state.map(t => tarefa(t, action));
        default:
            return state;
    }
};

export default tarefas;
