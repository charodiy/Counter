import React, {Component} from "react";
import {NumberResult} from "../number-result/NumberResult";
import {Button} from "../button/Button";
import "../button/Button.css"


const valueArray = ['1', '-1', '100', '-100'];

export class Counter extends Component {

    state = {
        number: 0,
        numberInput: ''
    };

    plus = (number) => {
        this.setState(prevState => {
            if ((prevState.number + number) < 0) {
                return {number: 0}
            }
            return {number: prevState.number + number}
        });
    };

    onChange = (event) => {
        const numberInput = +event.target.value;

        this.setState({
            numberInput
        });
    };

    onSubmit = () => {
        this.setState(prevState => {
            if (prevState.numberInput === "") {
                return {numberInput: 0}
            }
            return {
                number: prevState.number + prevState.numberInput
            }
        });
        this.setState({
            numberInput: ''
        })
    };

    onReset = () => {
        this.setState({
            number: 0,
        })
    };

    render() {
        const {numberInput, number} = this.state;
        return (
            <div>
                <NumberResult number={number}/>
                <div className="btn-box">
                    {valueArray.map((value, index) => {
                        return (
                            <Button onClick={this.plus.bind(null, +value)} value={value} key={index}/>
                        )
                    })}
                </div>
                <div className="input-box">
                    <input type="number" className="input" onChange={this.onChange} value={numberInput}/>
                    <button onClick={this.onSubmit}>Submit</button>
                    <button onClick={this.onReset}>Reset</button>
                </div>
            </div>
        );
    }
}