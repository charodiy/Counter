import React from "react";
import "./Button.css"

export function Button({onClick, value}) {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(users => users.json())
    //     .then(users => users);
    let response = fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
        let json = response.json();
        console.log(json);
    }

    return <button onClick={onClick} className="btn">{value}</button>;
}
