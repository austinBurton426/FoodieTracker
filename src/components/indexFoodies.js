import React, { Component } from 'react';
import {FOODS_API} from "./config/coms";
import NewFoodie from './NewFoodie';
import Foodie from "./Foodie"

class Foodies extends Component {
    state = {
        Foodies: [],
        FoodiesFormatted: []
    }
    getFoodies = () => {
        fetch(`${FOODS_API}/foodies`)
          .then(response => response.json())
          .then(body =>
            body.map(jsonFoodie => (
              <Foodie reload={this.getFoodies} foodieData={jsonFoodie} />
            ))
          )
          .then(components => this.setState({ Foodies: components }))
          .catch(console.log);
    }
    componentDidMount() {
        this.getFoodies()
    }
    render(){
        return (
          <>
            <div className="indexBox">
            <div className='flexbox-row'>{this.state.Foodies}</div>
            </div>
            <NewFoodie reload={this.getFoodies} />
          </>
        );
    }
}


export default Foodies;
//9/5