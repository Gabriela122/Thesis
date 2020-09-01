import React, { Component } from 'react'

class Cont1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            state1: 'none',
            state2: 'none',
            state3: null
        }
        this.textDisplay1 = this.textDisplay1.bind(this)
    }

    textDisplay1 = async () => {//zrobic arrow w zwyklym js 
        var t = performance.now()
        var txt2 = await textDisplay2()

        this.setState({ state2: txt2, state1: 'block' })

        var time = performance.now() - t + 'milisekund'

        this.setState({ state3: time })
        function textDisplay2() {
            return new Promise(resolve => setTimeout(() => { resolve('block') }, 0))
        }
    }

    render() {
        return (
            <div id="container1" className="cont">
                <h1>Procesy asynchroniczne</h1><br />
                <button type="button" onClick={this.textDisplay1}>
                    Asynchroniczność
                </button>
                <div id="tekst1" style={{ display: this.state.state1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius
                    dictum metus
                    quis aliquet. Cras ac convallis nisl, venenatis</div><br /><br />
                <div id="tekst2" style={{ display: this.state.state2 }}>ngilla enim vulputate. Nulla facilisi. Aliquam erat volutpat. Morbi ut
                    lacus ac nisi
                    efficitur tristique. Quisque inte</div>
                <div id="asyncTime">{this.state.state3 ? this.state.state3 : ''}</div><br />
            </div>
        )
    }
}

export default Cont1