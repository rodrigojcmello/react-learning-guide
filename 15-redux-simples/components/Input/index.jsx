import React from 'react';
import { connect } from 'react-redux';
// chama a action
import alternaBotao from './action';

// Componente
const Botao = (prop) => (
    <button
        //evento clique
        // onClick={() => clickBotaoAlterna(prop.id) }
        // onClick={ clickBotaoAlterna(p.id) }
        onClick={ () => alert('oi') }
    >
        {/* texto padrão */}
        { prop.texto ? prop.texto : 'Padrão' }
    </button>
);

// não sei o que faz exatamente, mas acho que traz o valor do elemento
const mapStateToProps = (state) => {
    return {
        botoes: state.botoes
    };
};

// não sei o que faz exatamente, mas acho que cria o gatilho para o evento ser dispachado
const mapDispatchToProps = (dispatch) => {
    return {
        clickBotaoAlterna: (id) => {
            // dispatch(alternaBotao(id));
            alert('foi!');
        }
    };
};

// junta tudo
const BotaoAtivo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Botao);

// exporta o componente do botão
export default BotaoAtivo;
