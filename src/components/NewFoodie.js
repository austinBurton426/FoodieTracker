import React, { Component } from "react";
import { FOODS_API } from "./config/coms";

class NewFoodie extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    fetch(`${FOODS_API}/foodie`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(console.log)
      .then(() => this.props.reload())
      .catch(console.log);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      
        <form 
        className="formFoodie" 
        onSubmit={this.handleSubmit}>
          <input
          className="formPad"
            name="Title"
            type="text"
            placeholder="Date"
            onChange={this.handleChange}
          />
          <select
              name="MealType"
              value={this.state.MealType}
              onChange={this.handleChange}
            >
              <option value="Snack">Snack</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          <input
            className="biggaPix formPad"
            name="Time"
            type="text"
            placeholder="Time"
            onChange={this.handleChange}
          />
          <input
          className="biggaPix formPad"
          name="Calories"
          type="text"
          placeholder="Calories"
          onChange={this.handleChange}
        />
        <input
        className="lilPix formPad"
            name="TotalFat"
            type="text"
            placeholder="Total Fat"
            onChange={this.handleChange}
          />
          <input
          className="lilPix2 formPad"
            name="Sugar"
            type="text"
            placeholder="Sugar"
            onChange={this.handleChange}
          />
          <input
          className="lilPix3 formPad"
            name="Protein"
            type="text"
            placeholder="Protein"
            onChange={this.handleChange}
          />
          <input
          className="biggestPix formPad"
            name="Description"
            type="text"
            placeholder="Description"
            onChange={this.handleChange}
          />
          <button 
          className=' jym formPad'
          type="submit">Just One More Fooodie ♥</button>
        </form>
      
    );
  }
}

export default NewFoodie;