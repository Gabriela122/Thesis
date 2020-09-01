import React from "react"
import zdj from './zdj.jpg'

const Home = props => {
    return (
        <div id="home">
            <div id="home-cont">
                <img src={zdj} alt="zdj1" className="zdj" />
                <div className="text">
                    <h1 className="header1">Cos o stronie </h1>
                    <p className="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius dictum metus
                        quis aliquet. Cras ac convallis nisl, venenatis porttitor odio. Integer dictum est eget tortor
                        tristique, et fringilla enim vulputate. Nulla facilisi. Aliquam erat volutpat. Morbi ut lacus ac nisi
                        efficitur tristique. Quisque interdum ex ac luctus aliquet. Aenean viverra sem luctus, malesuada nisi
                        sed, auctor massa. Maecenas pretium vulputate sapien ut semper. Nulla eget purus ornare, finibus velit
            eget, elementum orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
        </div>
    )
}



export default Home