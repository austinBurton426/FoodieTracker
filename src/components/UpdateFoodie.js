import React from "react";
import { FOODS_API } from "./config/coms";

class UpdateSnack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Meal: this.props.data.Title,
      MealType: this.props.data.MealType,
      Time: this.props.data.Time,
      Calories: this.props.data.Calories,
      TotalFat: this.props.data.TotalFat,
      Sugar: this.props.data.Sugar,
      Protein: this.props.data.Protein,
      Description: this.props.data.Description,
      currentDate: new Date().toDateString()
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state)

    let { currentDate, ...body } = this.state;
    body.Protein = currentDate;
    fetch(`${FOODS_API}/foodies/${this.props.data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(() => {
        this.props.closeModal();
      })
      .then(() => {
        this.props.reload();
      })
      .catch(console.log);
  };

  render() {
    return (
          <form className='flexbox-col' onSubmit={this.handleSubmit}>
            {this.state.currentDate}
            <input
            placeholder="Date"
              type="text"
              onChange={this.handleChange}
              name="Title"
              value={this.state.Meal}
            />
            <input
            placeholder="Time"
              type="text"
              onChange={this.handleChange}
              name="Time"
              value={this.state.Time}
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
            placeholder="Calories"
              type="text"
              onChange={this.handleChange}
              name="Calories"
              value={this.state.Calories}
            />
            <input
            placeholder="Total Fat"
              name="TotalFat"
              value={this.state.TotalFat}
              onChange={this.handleChange}
            />
            <input
            placeholder="Sugar"
              name="Sugar"
              value={this.state.Sugar}
              onChange={this.handleChange}
            />
            <input
            placeholder="Protein"
              name="Protein"
              value={this.state.Protein}
              onChange={this.handleChange}
            />
            <input
            placeholder="Description"
              name="Description"
              value={this.state.Description}
              onChange={this.handleChange}
            />
            Date I eateded:
            <input
              type="text"
              value={this.state.Title}
              onChange={this.handleChange}
              name="Title"
            />
            last updated: {this.state.currentDate}
            {/* <input value={this.state.Description} /> */}
            <button type="submit">Update</button>
          </form>
    );
  }
}

export default UpdateSnack;