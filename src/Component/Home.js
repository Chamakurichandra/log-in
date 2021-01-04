import React, { Component } from 'react';
import "../App.css";
import Image1 from "./asserts/landon.jpg";
import Image2 from "./asserts/Italy.jpg";
import Image3 from "./asserts/maldives.jpg";
import Image4 from "./asserts/Royalhotel.jpg";
import Image5 from "./asserts/queenhotel.jpg";
import Home1 from "./asserts/home.jpg";
import Home2 from "./asserts/home1.jpg";
import Home3 from "./asserts/home2.jpg";
import Home4 from "./asserts/home3.jpg";
export default class Home extends Component {
    render() {
        return (
            <div>
            <div className="head"><h2>Beautiful visiting places in world</h2></div>
            <div className="container-fluid">
            <div className="place">Popular Destinations</div>
            <div className="row">
            <div className="col">
            <img className="img" src={Image1} alt=""></img>
            <div className="title">Landon</div>
            </div>
            <div className="col">
            <img className="img" src={Image2} alt=""></img>
            <div className="title">Italy</div>
            </div>
            <div className="col">
            <img className="img" src={Image3} alt=""></img>
            <div className="title">Maldives</div>
            </div>
            </div>
            <div className="place">Best Deals</div>
            <div className="card-deck">
            <div className="card">
            <div className="card-body">
            <img className="img-1" src={Image4} alt=""></img>
            </div>
            <div className="card-footer">
            <div className="title-1">Grand Royal Hotel</div>
            <div>Wembly, London</div>
            <div style={{float:"right",fontWeight:"bolder"}}>$180/per night</div>
            <div> <i className="fa fa-map-marker text-primary"></i>2.0 km to city</div>
            </div>
            </div>
            <div className="card">
            <div className="card-body">
            <img className="img-1" src={Image5} alt=""></img>
            </div>
            <div className="card-footer">
            <div className="title-1">Queen Hotel</div>
            <div>Wembly, London</div>
            <div style={{float:"right",fontWeight:"bolder"}}>$200/per night</div>
            <div><i className="fa fa-map-marker text-primary"></i>2.0 km to city</div>
            </div>
            </div>
            </div>
            <div className="place">Live Anywhere</div>
            <div className="row">
            <div className="col">
            <img className="img-2" src={Home1} alt=""></img>
            <div className="title">Beautiful Home</div>
            </div>
            <div className="col">
            <img className="img-2" src={Home4} alt=""></img>
            <div className="title">Beautiful Home</div>
            </div>
            <div className="col">
            <img className="img-2" src={Home3} alt=""></img>
            <div className="title">Beautiful Home</div>
            </div>
            <div className="col">
            <img className="img-2" src={Home2} alt=""></img>
            <div className="title">Beautiful Home</div>
            </div>
            </div>
            </div>
           </div>
        )
    }
}
