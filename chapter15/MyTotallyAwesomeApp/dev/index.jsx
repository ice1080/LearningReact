import React from "react";
import ReactDOM from "react-dom";

var createReactClass = require('create-react-class');

var HelloWorld = createReactClass({
    render: function() {
        return (
            <p>Hello, {this.props.greetTarget}!</p>
        );
    }
});

ReactDOM.render(
    <div>
        <HelloWorld greetTarget="Batman"/>
        <HelloWorld greetTarget="Iron Man"/>
        <HelloWorld greetTarget="Nicolas Cage"/>
        <HelloWorld greetTarget="Mega Man"/>
        <HelloWorld greetTarget="Bono"/>
        <HelloWorld greetTarget="Catwoman"/>
    </div>,
    document.querySelector("#container")
);