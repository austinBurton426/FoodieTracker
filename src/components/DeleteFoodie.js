import React from "react";
import { FOODS_API } from "./config/coms";

class DeleteFoodie extends React.Component {
 

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${FOODS_API}/foodies/${this.props.delete}`, {
      method: "DELETE"
    })
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
            Are You Sure you want to delete this foodie?
            <button type="submit">GoodBye Foodie</button>
          </form>
    );
  }
}

export default DeleteFoodie;
//updated 9/5