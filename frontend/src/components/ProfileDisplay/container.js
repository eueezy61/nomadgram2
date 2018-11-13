import React, { Component } from "react";
import ProfileDisplay from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    const { userProfile } = this.props;
    if (userProfile) {
      this.setState({ loading: false });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userProfile) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return <ProfileDisplay {...this.props} {...this.state} />;
  }
}

export default Container;