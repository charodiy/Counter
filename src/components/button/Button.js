import React, {Component} from "react";
import "./Button.css"


export class Button extends Component {

    onFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                json.map(value => {
                    return console.log(value)
                })
            });

        // let json = await response.json();
        // // const { name } = json
        // json.map(value => {
        //     return console.log(value.name)
        // })
    };

    render() {
        return (
            <button onClick={this.onFetch}>Hello</button>
        );
    }


}
