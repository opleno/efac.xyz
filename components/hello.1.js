export function LoginButton(props) {
  return (
    <button className="test1-button" onClick={props.onClick}>
      Login
    </button>
  );
}

export function LogoutButton(props) {
  return (
    <button className="test1-button" onClick={props.onClick}>
      Logout
    </button>
  );
}
