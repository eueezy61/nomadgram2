import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {

    state = { loading: true };

    static propTypes = {
        getUserProfile: PropTypes.func.isRequired,
        userProfile: PropTypes.array
    };

    componentDidMount() {
        const { getUserProfile } = this.props;
        if (!this.props.userProfile) {
            getUserProfile();
        } else {
            this.setState({
                loading: false
            });
        }
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.userProfile) {
            this.setState({
                loading: false
            });
        }
    };
    render() {
        const { userProfile } = this.props;
        return (<Profile {...this.props} {...this.state} userProfile={userProfile} />)
    }
}

export default Container;
