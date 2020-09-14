import React, {Component} from "react"
import Menu from "./menu"
import Home from "./home"
import Arrow from "./arrow"
import Cont1 from "./container1"
import Cont2 from "./container2"
import Cont3 from "./container3"
import Cont4 from "./container4"

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Home />
                <Arrow anchor={'#container1'} />
                <Cont1 />
                <Arrow anchor={'#container2'} />
                <Cont2 />
                <Arrow anchor={'#container3'} />
                <Cont3 />
                <Arrow anchor={'#container4'} />
                <Cont4 />
                
            </div>
        )
    }
}

export default App
