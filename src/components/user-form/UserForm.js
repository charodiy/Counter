import React, {Component} from "react";
import {Button} from "../button/Button";
import './UserForm.css'

export class UserForm extends Component {

    state = {
        username: '',
        name: '',
        email: '',
        phone: '',
        id: Math.random()*1000
    };

    onChangeUsername = (e) => {
        const text = e.target.value;
        this.setState({
            username: text
        });
    };

    onChangeName = (e) => {
        const text = e.target.value;
        this.setState({
            name: text
        });
    };

    onChangeEmail = (e) => {
        const text = e.target.value;
        this.setState({
            email: text
        });
    };

    onChangePhone = (e) => {
        const text = e.target.value;
        this.setState({
            phone: text
        });
    };

    onClick = (e) => {
        e.preventDefault();

        const {onAddUser} = this.props;
        const {username, name, email, phone, id} = this.state;
        const user = {name, username, phone, email, id};

        onAddUser && onAddUser(user);

        this.onReset();
    };

    onReset = () => {
        this.setState({
            username: '',
            name: '',
            email: '',
            phone: ''
        })
    };

    render() {
        const {name, username, phone, email} = this.state;
        // const user = {name, username, phone, email};
        return (
            <div>
                <form className="my-user-form">
                    <div className="form-inline">
                        <label>Username</label>
                        <input
                            className="input-group-prepend input"
                            type="text"
                            onChange={this.onChangeUsername}
                            value={username}
                        />
                    </div>
                    <div className="form-inline">
                        <label>Full name</label>
                        <input
                            className="input-group-prepend input"
                            type="text"
                            onChange={this.onChangeName}
                            value={name}
                        />
                    </div>
                    <div className="form-inline">
                        <label>Email</label>
                        <input
                            className="input-group-prepend input"
                            type="email"
                            onChange={this.onChangeEmail}
                            value={email}
                        />
                    </div>
                    <div className="form-inline">
                        <label>Phone</label>
                        <input
                            className="input-group-prepend input"
                            type="text"
                            onChange={this.onChangePhone}
                            value={phone}
                        />
                    </div>
                    <Button value="Add" onClick={this.onClick}/>
                    <Button value="Save"/>
                </form>
            </div>
        )
    }
}