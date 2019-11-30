import React, { Component } from 'react';

class Latihan2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            halaman_persegi: false,
            halaman_persegi_panjang: false,
            halaman_lingkaran: false,
            submit: false,
            persegi1: null,
            persegi2: null,
            hasil: null
        }
    }

    halaman_persegi = () => {
        this.setState(this.halaman_persegi = true, this.halaman_persegiPanjang = false, this.halaman_lingkaran = false)
    }
    halaman_persegi_panjang = () => {
        this.setState(this.halaman_persegi = false, this.halaman_persegiPanjang = true, this.halaman_lingkaran = false)
    }
    halaman_lingkaran = () => {
        this.setState(this.halaman_persegi = false, this.halaman_persegiPanjang = false, this.halaman_lingkaran = true)
    }

    halaman = () => {
        if (this.state.halaman_persegi == true) {
            return (
                <form onSubmit={this.halaman_persegi.bind(this)}>
                    <div>
                        <h1>Rumus Persegi Panjang Panjang x Lebar</h1>
                        <br />
                        <input type="number" name="persegi1" onChange={this.changeHandler} />
                        <br />
                        <input type="number" name="persegi2" onChange={this.changeHandler} />
                        <br /><br />
                        <input type="submit" onClick={() => this.submitPersegi()} />
                    </div>
                </form>
            )
        }
        else if (this.state.halaman_persegi_panjang == true) {
            return (
                <form onSubmit={this.halaman_persegi_panjang.bind(this)}>
                    <div>
                        <h1>Rumus Persegi Sisi x Sisi</h1>
                        <br />
                        <input type="number" name="persegi1" onChange={this.changeHandler} />
                        <br />
                        <input type="submit" onClick={() => this.submitPersegi()} />
                    </div>
                </form>
            )
        }
        else {
            return (
                <form onSubmit={this.halaman_lingkaran.bind(this)}>
                    <div>
                        <h1>Rumus Lingkarang 22/7</h1>
                        <br />
                        <input type="number" name="persegi1" onChange={this.changeHandler} />
                        <br />
                        <input type="submit" onClick={() => this.submitPersegi()} />
                    </div>
                </form>
            )
        }
    }

    changeHandler = (event) => {
        let value = event.target.value
        this.setState({ [event.target.name]: value })
    }

    submitPersegi = () => {
        let persegi1 = parseInt(this.state.persegi1)
        let persegi2 = parseInt(this.state.persegi2)
        let hasil = 0
        hasil = persegi1 * persegi2

        this.setState({
            hasil, submit: !this.state.submit
        })
    }

    backHandler = () => {
        this.setState({
            submit: !this.state.submit
        })
    }

    persegiPanjang = () => {

    }


    render() {
        return (

            // <center>



            // </center>

            <center>
                <button onClick={this.halaman_persegi()}></button>
                <button onClick={this.halaman_persegi_panjang()}></button>
                <button onClick={this.halaman_lingkaran()}></button>
                {!this.state.submit ? (
                    <div>{this.halaman()}</div>
                ) : (
                        <div>
                            <h1>Hasil Perhitungan Persegi {this.state.hasil}</h1>
                            <button onClick={() => this.backHandler()}>Back</button>
                        </div>
                    )}

            </center>
        );
    }
}

export default Latihan2;