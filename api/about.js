let aboutMessage = "Issue Tracker API V1.0";

function setMessage(_, { message }) {
  //the {message} arguments is an object
  return (aboutMessage = message);
}
function getMessage() {
  return aboutMessage;
}
module.exports = { getMessage, setMessage };
