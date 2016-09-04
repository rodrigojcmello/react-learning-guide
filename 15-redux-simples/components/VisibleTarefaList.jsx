import { connect } from 'react-redux';
import TarefaLista from './TarefaLista';

const mapStateToProps = (state) => {
    return {
        tarefas: state.tarefas
    };
};

const VisibleTarefaList = connect(mapStateToProps)(TarefaLista);

export default VisibleTarefaList;
