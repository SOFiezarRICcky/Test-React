import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            angka1: null,
            angka2: null,
            tambah: "",
            kurang: "",
            kali: "",
            operator: null
        }
    }

    onChangeHandler = (event) => {
        let angka1 = event.target.name;
        let angka2 = event.target.angka2;
        let tambah = event.target.operator;
        let kurang = event.target.operator;
        let kali = event.target.operator;
        let val = event.target.value;
        this.setState({
            [angka1]: val,
            [angka2]: val,
            [tambah]: val,
            [kurang]: val,
            [kali]: val
        });
    }



    render() {
        return (
            <div>
                <input type="number" onChange={this.onChangeHandler} placeholder="Angka 1" name="angka1" required></input>
                <h1>{this.state.angka1}</h1>
                <br />
                <select name="operator" id="">
                    <option value="">--Pilih operator</option>
                    <option value="+" name="tambah" onClick={this.onChangeHandler}>+</option>
                    <option value="-" name="kurang" onClick={this.onChangeHandler}>-</option>
                    <option value="*" name="kali" onClick={this.onChangeHandler}>*</option>
                </select>
                <br />
                <br />
                <input type="number" onChange={this.onChangeHandler} placeholder="Angka 2" name="angka2" required />
                <h1>{this.state.angka2}</h1>
                <input type="submit" />
                <h1>a{this.state.operator}</h1>
            </div>
        );
    }
}

export default Calculator;