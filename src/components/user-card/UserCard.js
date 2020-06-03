import React from "react";
import "./UserCard.css"

export function UserCard({user}) {

    if (!user) return null;

    const {first_name, last_name, email, address} = user;
    return (
        <div className="user-card">
            <h4 className="card-title">{first_name} {last_name}</h4>
            <div className="card-text">
                <div>{email}</div>
                <div>{address}</div>
            </div>
        </div>
    );
}