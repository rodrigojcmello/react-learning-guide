let proximaTarefaId = 0;

const tarefaAdicionar = (texto) => {
    return {
        type: 'TAREFA_ADICIONAR',
        id: proximaTarefaId++,
        texto
    };
};
