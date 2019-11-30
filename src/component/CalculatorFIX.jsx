import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            angka1: null,
            angka2: null,
            operator: null,
            hasil: null
        }
    }

    handleSubmit = () => {
        const angka1 = parseInt(this.refs.angka1.value);
        const angka2 = parseInt(this.refs.angka2.value);
        const operator = this.refs.operator.value;


        var hasil = 0;
        switch (operator) {
            case "+":
                hasil = angka1 + angka2;
                break;
            case "-":
                hasil = angka1 - angka2;
                break;
            case "*":
                hasil = angka1 * angka2
            default:
                break;
        }
        this.setState({
            angka1, angka2, operator, hasil,
            submit: !this.state.submit
        });

        this.refs.angka1.value = null;
        this.refs.angka2.value = null;
    }

    changeHandler = (event) => {
        let value = event.target.value
        this.setState({ [event.target.name]: value })
    }

    backHandler = () => {
        this.setState({
            submit: !this.state.submit
        })
    }

    renderHitung = () => {
        return (
            <form action="">
                <div>
                    <input type="number" placeholder="Angka 1" ref="angka1" required></input> <br />
                    <br />
                    <select ref="operator" id="">
                        <option value="">--Pilih operator--</option>
                        <option value="+" name="tambah" onClick={this.onChangeHandler}>+</option>
                        <option value="-" name="kurang" onClick={this.onChangeHandler}>-</option>
                        <option value="*" name="kali" onClick={this.onChangeHandler}>*</option>
                    </select>
                    <br />
                    <br />
                    <input type="number" placeholder="Angka 2" ref="angka2" required />
                    <br />
                    <br />
                    <input type="submit" onClick={() => this.handleSubmit()} value="hasil" />
                </div>
            </form>
        )
    }

    renderHasil = () => {
        return (
            <div>
                <h1>Hasil {this.state.angka1} {this.state.operator} {this.state.angka2} adalah {this.state.hasil} </h1>
                <button onClick={() => this.backHandler()}>Back To Home</button>
            </div >
        )
    }



    render() {

        return (
            <div>
                {!this.state.submit ? (
                    <div>{this.renderHitung()}</div>
                ) : (
                        <div>{this.renderHasil()}</div>
                    )
                }
            </div>


        );
    }
}

export default Calculator;