import React, { Component } from 'react'
import { anime } from 'react-anime'

class Cont4 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      t1: 0,
      t2: 0
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {

    var slide = anime.timeline()

      .add({
        begin: function () {
          this.t1 = performance.now()
          this.setState({ t1: this.t1 })
        }.bind(this),

        complete: function () {
          this.t2 = performance.now()
          this.setState({ t2: this.t2 })

          this.setState(() => {
            return { timeResolution: this.state.t2 - this.state.t1 + ' milisekund' }
          })
        }.bind(this),

        delay: (el, i) => i * 1000,
        targets: '.box',
        translateX: [
          { value: 200, duration: 500 },
          { value: 0, duration: 500 }
        ],
        rotate: {
          value: '1turn',
          easing: 'easeInOutSine'
        },
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad',
        opacity: '0.3'
      })
    slide.play()
  }


  render() {
    return (
      <div id="container4" className="cont"><h1>Animacje</h1>
        <div id="btns">
          <button className="slideButton" onClick={this.handleOnClick}>Play</button>
        </div>
        <div className="box red"></div>
        <div className="box blue"></div>
        <div className="box lime"></div>
        <div className="box yellow"></div>
        <br /><br /><br /><br />Czas trwania animacji
        <p id="animationTime">{this.state.timeResolution}</p>
      </div>
    )
  }
}

export default Cont4
