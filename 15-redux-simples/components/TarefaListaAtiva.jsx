import { connect } from 'react-redux';
import TarefaLista from './TarefaLista';

const mapStateToProps = (state) => {
    return {
        tarefas: state.tarefas
    };
};

const TarefaListaAtiva = connect(mapStateToProps)(TarefaLista);

export default TarefaListaAtiva;
