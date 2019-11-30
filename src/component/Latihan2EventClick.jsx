import React, { Component } from 'react';

class Latihan2Fix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hal_persegi_panjang: false,
            hal_persegi: false,
            hal_lingkarang: false,
            angka1: null,
            angka2: null,
            submit: false,
            ket: null

        }
    }

    isi_hal = () => {
        re
<div></div>
        if (this.state.hal_persegi == true) {
            this.state.ket = "Persegi Tersebut"
            return (
                <center>
                    {!this.state.submit ? (
                        <div>
                            <h1>Ini Halaman Persegi (Sisi * Sisi)</h1>
                            <br /> <br />
                            <input type="number" name="angka1" placeholder="sisi" onChange={this.changeHandler} />
                            <br /> <br />
                            <button onClick={() => this.hitung()}>Hitung</button>
                        </div>
                    ) : (
                            <div>{this.hal_hasil()}</div>
                        )}
                </center>
            )
        }
        else if (this.state.hal_persegi_panjang == true) {
            this.state.ket = "Persegi Panjang Tersebut"
            return (
                <center>
                    {!this.state.submit ? (
                        <div>
                            <h1>Ini Halaman Persegi Panjang (Panjang * Lebar)</h1>
                            <br /> <br />
                            <input type="number" name="angka1" placeholder="Panjang" onChange={this.changeHandler} />
                            <br /> <br />
                            <input type="number" name="angka2" placeholder="Lebar" onChange={this.changeHandler} />
                            <br /> <br />
                            <button onClick={() => this.hitung()}>Hitung</button>
                        </div>
                    ) : (
                            <div>{this.hal_hasil()}</div>
                        )}
                </center>
            )
        } else {
            this.state.ket = "Lingkaran Tersebut"
            return (
                <center>
                    {!this.state.submit ? (
                        <div>
                            <h1>Ini Halaman Lingkaran (22/7 * Jari Jari)</h1>
                            <br /> <br />
                            <input type="number" placeholder="Jari-Jari" name="angka1" onChange={this.changeHandler} />
                            <br /> <br />
                            <button onClick={() => this.hitung()}>Hitung</button>
                        </div>
                    ) : (
                            <div>{this.hal_hasil()}</div>
                        )}
                </center>
            )
        }
    }

    index = () => {
        this.setState({
            hal_persegi: true, hal_persegi_panjang: false, hal_lingkarang: false
        })
    }

    index2 = () => {
        this.setState({
            hal_persegi_panjang: true, hal_persegi: false, hal_lingkarang: false
        })
    }

    index3 = () => {
        this.setState({
            hal_lingkarang: true, hal_persegi: false, hal_persegi_panjang: false
        })
    }

    changeHandler = (event) => {
        let value = event.target.value
        this.setState({ [event.target.name]: value })
    }

    hitung = () => {
        let angka1 = parseInt(this.state.angka1)
        let angka2 = parseInt(this.state.angka2)
        let hasil = 0

        if (this.state.hal_persegi == true) {
            hasil = angka1 * angka1
            this.setState({
                hasil, submit: !this.state.submit
            })
        }
        else if (this.state.hal_persegi_panjang == true) {
            hasil = angka1 * angka2
            this.setState({
                hasil, submit: !this.state.submit
            })
        } else {
            hasil = 22 / 7 * angka1
            this.setState({
                hasil, submit: !this.state.submit
            })
        }
    }

    backHandler = () => {
        this.setState({
            submit: !this.state.submit
        })
    }

    hal_hasil = () => {
        return (
            <div>
                <h1>Hasil Perhitungan {this.state.hasil}</h1>
                <button onClick={() => this.backHandler()}>Back</button>
            </div>
        )
    }

    render() {
        return (
            <center>
                <button id="tombol_Persegi" onClick={() => this.index()} value="Halaman Index" >Persegi</button>
                <button id="tombol_Persegi_panjang" onClick={() => this.index2()} value="Halaman Persegi Panjang" >Persegi Panjang</button>
                <button id="tombol_Lingkaran" onClick={() => this.index3()} value="Halaman Persegi Panjang" >Lingkaran</button>
                <div>{this.isi_hal()}</div>
            </center>
        );
    }
}

export default Latihan2Fix;