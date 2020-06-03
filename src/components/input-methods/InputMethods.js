import React from "react";
import {Button} from "../button/Button";

export function InputMethods({onChange, onSubmit, onReset, numberInput, valueArray, plus}) {
    return (
        <div>
            <div className="btn-box">
                {valueArray.map((number, index) => {
                    return (
                        <Button onClick={plus.bind(null, +number)} value={number} key={index}/>
                    )
                })}
            </div>
            <div className="input-box">
                <input type="number" className="input" onChange={onChange} value={numberInput}/>
                <Button onClick={onSubmit} value="Submit"/>
                <Button onClick={onReset} value="Reset"/>
            </div>
        </div>
    );
}