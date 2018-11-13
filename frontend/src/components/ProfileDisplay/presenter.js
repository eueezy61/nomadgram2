import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";


const ProfileDisplay = (props, context) => {
  return (
    <div className={styles.profilePhoto}>
      <div className={styles.profile}>
        {props.userProfile.username}
        {props.userProfile.name}
        {props.userProfile.bio}
        {props.userProfile.website}
      </div>
    </div>
  );
};

ProfileDisplay.contextTypes = {
  t: PropTypes.func.isRequired
};

ProfileDisplay.propTypes = {
};

export default ProfileDisplay;
