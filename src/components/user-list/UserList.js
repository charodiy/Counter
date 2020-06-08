import React, {Component} from "react";
import {UserCard} from "../user-card/UserCard";
import {UserForm} from "../user-form/UserForm";
import '../user-card/UserCard.css'
import './UserList.css'
import {Button} from "../button/Button";

export class UserList extends Component {

    state = {
        users: [],
    };

    componentDidMount() {
        this.onFetch();
    }

    onFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                if (Array.isArray(json)) {
                    this.setState({
                        users: json || []
                    });
                }
            }).catch(err => console.log(err, 'Error'));
    };

    onAddUser = (user) => {
        this.setState(prevState => {
            return {
                users: [{
                    ...user,
                }, ...prevState.users]
            }
        })
    };

    onEditUser = (number) => {

    };

    onDeleteUser = (number) => {

        const {users} = this.state;

        const newUsersArray = users.filter(user => {
            return user.id !== number
        });

        this.setState({
            users: newUsersArray
        })
    };

    render() {
        const {users} = this.state;

        return (
            <div>
                <div className="d-flex flex-wrap">
                    <UserForm onAddUser={this.onAddUser}/>
                    {users.map(user => {
                        return (
                            <div className="user-card" key={user.id}>
                                <UserCard
                                    user={user}
                                    key={user.id}
                                />
                                <div className="d-flex">
                                    <Button value="Edit"/>
                                    <Button value="Delete" onClick={this.onDeleteUser.bind(null, user.id)}/>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        );
    }


}
