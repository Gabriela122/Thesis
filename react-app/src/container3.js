import React, { Component } from 'react'

class Cont3 extends Component {

    constructor(props) {
        super(props)
        this.time0 = null
        this.time1 = null
        this.state = {
            prob10: null,
            prob100: null,
            prob10000: null,
            wyniki: []
        }

        this.losuj = this.losuj.bind(this)
        this.sortNumber = this.sortNumber.bind(this)
        this.timePerformance = this.timePerformance.bind(this)
        this.formatowanie = this.formatowanie.bind(this)
        this.czasFormatowania = this.czasFormatowania.bind(this)
        this.createTable = this.createTable.bind(this)
    }

    losuj(rozmiar, zakres) {
        let tablica = []
        for (var i = 0; i < rozmiar; i++) {
            tablica.push(
                <li key={i} item={Math.floor(Math.random() * zakres)} />
            )
        }
        return tablica
    }

    sortNumber(a, b) {
        return a - b
    }

    timePerformance(rozmiarTablicy, zakresLiczbWTablicy, iloscPowtorzen) {
        var time = 0
        var liczby = []
        for (var j = 0; j < iloscPowtorzen; j++) {
            liczby = liczby.map(() => this.losuj(rozmiarTablicy, zakresLiczbWTablicy))
            time -= performance.now()
            liczby = liczby.sort(() => this.sortNumber())
            time += performance.now()
        }

        return time / iloscPowtorzen
    }

    componentDidMount() {
        this.setState({
            prob10: this.timePerformance(10, 100, 1000),
            prob100: this.timePerformance(100, 100, 1000),
            prob10000: this.timePerformance(10000, 100, 1000)
        })
    }


    formatowanie() { // siec->wylacz pamiec robocza 
        this.time0 = performance.now()
        var iloscPowtorzen = 10
        const domStyle = {
            border: '1px solid black'
        }
        let table = []
        for (var j = 0; j < iloscPowtorzen; j++) {
            table.push(<table style={domStyle}>
                {this.createTable()}
            </table>)
        }
        this.time1 = performance.now()

        return table
    }

    createTable() {
        var tabela
        let wyniki = [this.state.prob10, this.state.prob100, this.state.prob10000]
        tabela = (<tr>
            <td style={{ border: '1px solid black' }}>{wyniki[0]}</td>
            <td style={{ border: '1px solid black' }}>{wyniki[1]}</td>
            <td style={{ border: '1px solid black' }}>{wyniki[2]}</td>
        </tr>)

        return tabela
    }

    czasFormatowania() {
        return (
            <p id='czasFormatowania'>
                {this.time1 - this.time0 + ' milisekund'}
            </p>
        )
    }

    render() {
        return (
            <div id="container3" className="cont">
                <h1>Sortowanie i formatowanie </h1><br /><br />
                <h2>Sortowanie</h2>
                Sortowanie dla 3 różnych prób, powtórzone 1000 razy <br /><br /><br />
                <li>proba licząca 10 wylosowanych liczb w tablicy</li>
                <p id="prob10" className="prob">
                    {this.state.prob10}
                </p>
                <li>proba licząca 100 wylosowanych liczb w tablicy</li>
                <p id="prob100" className="prob">
                    {this.state.prob100}
                </p>
                <li>proba licząca 10000 wylosowanych liczb w tablicy</li>
                <p id="prob10000" className="prob">
                    {this.state.prob10000}
                </p>
                <br /><h2>Formatowanie</h2>
                <div id='formatowanie'>
                    {this.formatowanie()}
                </div>
                <br /><br />Czas formatowania tabeli <br /><br />
                <div id='czasFormatowania'>
                    {this.czasFormatowania()}
                </div>
            </div>
        )
    }
}

export default Cont3