import React, {Component} from "react";
import { Link } from "react-router";

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>App Component!</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#categoria">Categoria</a></li>
                    <li>
                        <Link to="/repos/rodrigo/mello">Produto LINK</Link><br />
                        <a href="#repos/rodrigo/mello">Produto A</a>
                    </li>
                    <li>
                        <a href="#cat1/cat2/final">Final</a>
                    </li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        );
    }
}
