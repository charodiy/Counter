import React from "react";
import {Button} from "../button/Button";
import "./UserCard.css"

export function UserCard({user}) {
    if (!user) return null;
    const {name, username, email, address, phone, website} = user;
    // const {city, street, suite} = address;

    return (
        <div>
            <div className="card-title">{username}</div>
            <span className="card-title-name">({name})</span>

            <div className="card-text">
                <div><label className="card-text-label">email:</label> {email}</div>
                {/*<div><label className="card-text-label">address:</label> {city}, {street}, {suite}</div>*/}
                <div><label className="card-text-label">phone:</label> {phone}</div>
                {/*<div><label className="card-text-label">website:</label> {website}</div>*/}
            </div>
        </div>
    );
}