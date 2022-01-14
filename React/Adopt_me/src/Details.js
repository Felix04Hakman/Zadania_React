import React, { Component } from "react";
import { withRouter } from "./withRouter";
import Carousel from "./Carousel";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    const id = this.props.location.pathname.split("/");
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${id[id.length - 1]}`
    );

    const json = await res.json();

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
