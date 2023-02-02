import { Component } from "react";
import { LoginButton, LogoutButton } from "./hello.1";
import Alert from "./alert.jsx"
function UserGreeting(props) {
  return <Alert type="success"><h1>Welcome back!</h1></Alert>;
}

function GuestGreeting(props) {
  return <Alert type="error"><h1>Please sign up.</h1></Alert>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {!isLoggedIn && <Greeting isLoggedIn={isLoggedIn} />}
        {button}
      </div>
    );
  }
}

export default LoginControl;
