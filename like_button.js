"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  likeClick() {
    this.setState({ liked: true });

    document.querySelector("#like_button_container").style.color = "blue";
  }

  render() {
    if (this.state.liked) {
      return "thanks for liking";
    }

    return e("a", { onClick: () => this.likeClick() }, "Like");
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
