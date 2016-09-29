export const alternaBotao = (id) => {
    return {
        type: 'ALTERNA_BOTAO',
        id,
        onClick: () => clickBotaoAlterna(id)
    };
};
