import React, {Component} from "react";

export class UserCard extends Component {
    constructor(props) {
        super(props);

        // this.users = fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
    };


    render() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(users => users.json())
        //     .then(users => console.log(users));

        return (
            <div>
                This is user card
                {/*{this.users}*/}
            </div>
        )
    }
}