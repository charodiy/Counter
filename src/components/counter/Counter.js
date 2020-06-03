import React, {Component} from "react";
import {NumberResult} from "../number-result/NumberResult";
import {InputMethods} from "../input-methods/InputMethods";


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
        if (numberInput === 0) {
            this.setState({
                numberInput: ''
            });
        } else {
            this.setState({
                numberInput
            });
        }
    };

    onSubmit = () => {
        this.setState(prevState => {
            if (prevState.numberInput === '') {
                return {numberInput: ''}
            }
            if ((prevState.number + prevState.numberInput) < 0) {
                return {
                    number: 0,
                    numberInput: ''
                }
            }
            return {
                number: prevState.number + prevState.numberInput,
                numberInput: ''
            }
        });
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
                <InputMethods
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onReset={this.onReset}
                    plus={this.plus}
                    numberInput={numberInput}
                    valueArray={valueArray}
                />
            </div>
        );
    }
}