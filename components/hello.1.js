
export function LoginButton(props) {
  return (
    <button class="test1-button" onClick={props.onClick}>
      Login
    </button>
  );
}

export function LogoutButton(props) {
  return (
    <button class="test1-button" onClick={props.onClick}>
      Logout
    </button>
  );
}