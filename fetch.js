("use strict");

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, token: "" };
  }

  componentDidMount() {
    axios
      .post("https://snackify7.herokuapp.com/auth/login/organization", {
        username: "username",
        password: "password"
      })
      .then(function(response) {
        let token = response.data.token;
        console.log(token);
        return token;
      })
      .then(token => {
        console.log(token);
        fetch("https://snackify7.herokuapp.com/snacks", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  likeClick() {
    this.setState(prevState => {
      alert("thank you fot the like");
      return { liked: !prevState.liked };
    });
  }

  render() {
    return e("span", { onClick: () => this.likeClick() }, " ❤️ ");
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
