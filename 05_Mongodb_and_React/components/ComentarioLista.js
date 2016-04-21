import React from 'react';
import Comentario from './Comentario';

export default class ComentarioLista extends React.Component {
    render() {
        var comentarioNode = this.props.data.map(function(comentario) {
            return (
                <Comentario key={comentario.id} autor={comentario.autor} idade={comentario.idade}>
                    {comentario.texto}
                </Comentario>
            );
        });
        console.log(comentarioNode);
        return (
            <div className="comentario-lista">
                {comentarioNode}
            </div>
        );
    }
}
