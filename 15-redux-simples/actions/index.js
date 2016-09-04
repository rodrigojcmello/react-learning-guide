let tarefaId = 0;

export const adicionarTarefa = (text) => {
    return {
        type: 'ADICIONAR_TAREFA',
        id: tarefaId++,
        text
    };
};
