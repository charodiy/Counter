import React from "react";
import "./Button.css"

export function Button({onClick, value}) {
    return <button onClick={onClick} className="btn">{value}</button>;
}
