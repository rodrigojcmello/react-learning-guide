let tarefaId = 0;

export const adicionarTarefa = (texto) => {
    return {
        type: 'ADICIONAR_TAREFA',
        id: tarefaId++,
        texto
    };
};
