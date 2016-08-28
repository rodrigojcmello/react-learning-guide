const tarefa = (state = {}, action) => {
    switch (action.type) {
        case 'TAREFA_ADICIONAR':
            return {
                id: action.id,
                texto: action.texto
            };
        default:
            return state;
    }
};

const tarefas = (state = [], action) => {
    switch (action.type) {
        case 'TAREFA_ADICIONAR':
            return [
                ...state,
                todo(undefined, action)
            ];
        default:
            return state;
    }
};

export default tarefas;
