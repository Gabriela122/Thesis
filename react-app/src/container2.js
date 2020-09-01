import React, { Component } from 'react'

//var timeResolution = document.querySelector('#timeResolution')
//var resultDisplay = document.querySelector('#results')
//var timeDisplay = document.querySelector('#timeRes')

// 100000 losujemy 
// 1000 rownan

class Cont2 extends Component {
    constructor(props) {
        super(props)
        this.tempResult = []
        this.time=0
        this.time2=0
        this.state = {
            i: null,
            result: [],
            a: null,
            b: null,
            c: null,
            delta: null,
            result1: null,
            result2: null
        }

        this.quadraticEquation = this.quadraticEquation.bind(this)
        this.randomCoeff = this.randomCoeff.bind(this)
        this.printResults = this.printResults.bind(this)
        this.quadraticCalc = this.quadraticCalc.bind(this)
        this.createTable = this.createTable.bind(this)
    }

    quadraticEquation() {
        for (var i = 0; i < 100000; i++) {
            this.randomCoeff(i)
        }
        
    }
    randomCoeff(i) {
        var a, b, c, delta
        do {
            a = Math.floor(Math.random() * 101) - 50
            b = Math.floor(Math.random() * 101) - 50
            c = Math.floor(Math.random() * 101) - 50
            delta = Math.pow(b, 2) - (4 * a * c)
        } while (delta < 0 || a === 0)

        
        this.EachState({
            a: a,
            b: b,
            c: c,
            delta: delta
        })
        this.quadraticCalc(a,b,c,i,delta)

    }
    EachState(obiekt){
        this.setState(obiekt)
    }

    quadraticCalc(a,b,c,i,delta) {
        let time = 0
        time -= performance.now()
        let result1 = (-1 * b - Math.sqrt(delta)) / (2 * a)
        let result2 = (-1 * b + Math.sqrt(delta)) / (2 * a)

        this.EachState({
            result1: result1,
            result2: result2
        })

        time += performance.now()

        if (i < 1001 && i > 1) {
            this.tempResult.push({
                res1: result1,
                res2: result2,
                t: time
            })
            this.time += time
            this.EachState({ 
                result: this.tempResult,
                time:this.time
             })
        }
        this.EachState({
            time2: this.time2
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.result.length !==this.state.result.length){
            this.printResults()
            
        }
    }
    printResults() {
        return (
            <p id={'timeResolution'}>
                {this.state.time + " milisekund"}
            </p>

        )
    }
    
    createTable() {
        if (this.state.result.length !== 0) {
        this.time2 -= performance.now() 
        let print = (
            <table>
                <tbody>
                    
                        {this.state.result.map((wynik, index) => (
                            <tr key={index}>
                                <td>{parseFloat(wynik.res1 * 100 / 100).toFixed(2)}</td>
                                <td>{parseFloat(wynik.res2 * 100 / 100).toFixed(2)}</td>
                                {wynik.t + ' ms'}
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        )
        this.time2 += performance.now() 
        
            return print
        }
    }

    render() {
        return (
            <div id="container2" className="cont">
                <h1>Obliczanie równania kwadratowego</h1><br /><br />
                <strong>y = ax<sup>2</sup> + bx + c<br /></strong>
                <button type="button" onClick={this.quadraticEquation} id="quadraticSolver">Solve</button>
                <br />
                Czas obliczania 1000 równań
                {this.printResults()}
                Wyniki każdego z równań wraz z czasem ich obliczania
                <div id="results">
                    {this.createTable()}
                </div>
                Czas wyswietlania wszystkich wyników
                <p id="timeRes">
                {this.time2 !== 0 ?  this.time2 +' milisekund' : 'Nie zmierzono'}
                </p>

            </div>
        )
    }
}

export default Cont2 