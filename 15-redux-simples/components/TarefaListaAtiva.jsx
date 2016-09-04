import { connect } from 'react-redux';
import { alternaTarefa } from '../actions';
import TarefaLista from './TarefaLista';

const mapStateToProps = (state) => {
    return {
        tarefas: state.tarefas
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(alternaTarefa(id));
        }
    };
};

const TarefaListaAtiva = connect(
    mapStateToProps,
    mapDispatchToProps
)(TarefaLista);

export default TarefaListaAtiva;
