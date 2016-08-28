let proximaTarefaId = 0;

export const tarefaAdicionar = (texto) => {
    return {
        type: 'TAREFA_ADICIONAR',
        id: proximaTarefaId++,
        texto
    };
};
