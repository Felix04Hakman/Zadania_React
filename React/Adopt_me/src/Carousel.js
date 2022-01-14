import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  handleActiveImage = (e) => {
    this.setState({
      active: parseInt(e.target.dataset.index),
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carosel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              src={photo}
              key={photo}
              data-index={index}
              onClick={this.handleActiveImage}
              alt=""
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
