const tarefa = (state = {}, action) => {
    switch (action.type) {
        case 'ADICIONAR_TAREFA':
            return {
                id: action.id,
                texto: action.texto,
                completed: false
            };
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
        default:
            return state;
    }
};

export default tarefas;
