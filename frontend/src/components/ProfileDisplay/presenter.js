import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoDisplay from "../PhotoDisplay";


const ProfileDisplay = (props, context) => {
  return (
    <div className={styles.profileDisplay}>
      <div className={styles.myProfile}>
        <img
          src={props.profile_image || require("images/noPhoto.jpg")}
          alt={props.username}
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <div className={styles.infoOne}>
            <span className={styles.infoUsername}>{props.userProfile.username}</span>
            <span className={styles.infoEdit}>Profile Edit</span>
            <span className={styles.infoConf}>CONFIG</span>
          </div>
          <div className={styles.infoTwo}>
            <span className={styles.infoPost}>Post 10</span>
            <span className={styles.infoFollowers}>Followers 122</span>
            <span className={styles.infoFollowing}>Following 563</span>
          </div>
          <div className={styles.infoThree}>
            <div>{props.userProfile.website}</div>
            <div>{props.userProfile.bio}</div>
          </div>
        </div>
      </div>
      <div className={styles.profileNav}>
        <span>feed</span>
        <span>IGTV</span>
        <span>saved</span>
        <span>tagged</span>
      </div>
      <div className={styles.photoDisplay}>
        {props.userProfile.images.map(image => <PhotoDisplay {...image} key={image.id} />)}
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
