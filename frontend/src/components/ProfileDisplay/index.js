import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user: { userProfile } } = state;
  const { routing: { location } } = state;
  return {
    userProfile,
    pathname: location.pathname
  };
};

export default connect(mapStateToProps)(Container);