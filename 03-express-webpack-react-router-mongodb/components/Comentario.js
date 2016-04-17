import React from 'react';
import marked from 'marked';

export default class Comentario extends React.Component {
    rawMarkup() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    }
    render() { return (
        <div className="comentario">
            <h2 className="comentario-autor">
                {this.props.autor} {this.props.idade}
            </h2>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
    ); }
}
