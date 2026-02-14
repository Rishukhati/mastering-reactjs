import PropTypes from 'prop-types';

function UserGreeting(props) {
  const welcomeMessage = <h2 className="welcome">Welcome {props.username}</h2>
  const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
  
  return (props.isLoggedIn ? welcomeMessage : loginPrompt);

};

UserGreeting.proptype = {
    isLoggedIn : PropTypes.bool,
    loginPrompt : PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest",
}   


export default UserGreeting

