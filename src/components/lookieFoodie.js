import React from "react";

class LookieFoodie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Meal: this.props.data.Title,
      Time: this.props.data.Time,
      Calories: this.props.data.Calories,
      TotalFat: this.props.data.TotalFat,
      Sugar: this.props.data.Sugar,
      Protein: this.props.data.Protein,
      Description: this.props.data.Description,
      currentDate: new Date().toDateString()
    };
  }

  render() {
    return (
         <div>
             <h2>{this.state.MealType}</h2>
             Date: {this.state.Meal}<br/>
             Calories: {this.state.Calories}<br/>
             Total Fat: {this.state.TotalFat}<br/>
             Sugar: {this.state.Sugar}<br/>
             Protein: {this.state.Protein}
         </div>
    );
  }
}

export default LookieFoodie;