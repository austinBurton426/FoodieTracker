import React from "react";
import "./components/styles/App.css";
import Foodies from "./components/indexFoodies";
import FoodieFacts from "./components/FoodieFacts";
import "./components/styles/App.css";

class App extends React.Component {
  state = {
    result: {
      FoodieFacts: "Foodie Facts",
      Calories: "?",
      TotalFat: "?",
      SaturatedFat: "?",
      TransFat: "?",
      Cholesterol: "?",
      Sodium: "?",
      TotalCarbs: "?",
      DietaryFiber: "?",
      Sugar: "?",
      Protein: "?"
    },
    search: ""
  };

  handleSubmit = async e => {
    if (e) e.preventDefault();
    const theSearch = await this.state.search;
    const convertSearch = await theSearch.replace(/\s/g, "%20");
    console.log(convertSearch);
    //fix http
    await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/food-database/parser?ingr=${convertSearch}&app_id=358719e1&app_key=c377a018f504c251bf14f19f60c9f4e4`,
      {
        headers: {
          "Cache-Control": "no-cache",

          Host: "api.edamam.com",
          "Accept-Encoding": "gzip, deflate",
          "Content-Length": "36",
          Connection: "keep-alive"
        }
      }
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          result: {
            FoodieFacts: res.hints[0].food.label,
            Calories: res.hints[0].food.nutrients.ENERC_KCAL,
            TotalFat: res.hints[0].food.nutrients.FAT,
            SaturatedFat: res.hints[0].food.nutrients.FASAT,
            TransFat: res.hints[0].food.nutrients.FATTR,
            Cholesterol: res.hints[0].food.nutrients.CHOLE,
            Sodium: res.hints[0].food.nutrients.NA,
            TotalCarbs: res.hints[0].food.nutrients.CHOCDF,
            DietaryFiber: res.hints[0].food.nutrients.FIBTG,
            Sugars: res.hints[0].food.nutrients.SUGAR,
            Protein: res.hints[0].food.nutrients.PROCNT
          }
        })
      );
  };

  render() {
    return (
      <div>
        <div className="container">
         
          <Foodies />

          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="nutriFactBox">
                <FoodieFacts result={this.state.result} />
              </div>
              <input
                className="searchPad"
                type="text"
                name="search"
                placeholer="search...foodies?"
                value={this.state.search}
                onChange={event =>
                  this.setState({ search: event.target.value })
                }
                required
              />
              <button className="salad" type="submit">
                show me potato salad!
              </button>
            </form>
          </div>
        </div>
        <div className="slider">
          <div className="slide1"></div>
          <div className="slide2"></div>
          <div className="slide3"></div>
          <div className="slide4"></div>
          <div className="slide5"></div>
        </div>
      </div>
    );
  }
}

export default App;
