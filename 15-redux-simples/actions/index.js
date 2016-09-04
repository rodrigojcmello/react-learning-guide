let tarefaId = 0;

export const adicionarTarefa = (texto) => {
    return {
        type: 'ADICIONAR_TAREFA',
        id: tarefaId++,
        texto
    };
};

export const alternaTarefa = (id) => {
    return {
        type: 'ALTERNA_TAREFA',
        id
    };
};
