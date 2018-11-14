import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";
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
            <button className={styles.infoEdit}>Profile Edit</button>
            <span className={styles.infoConf}>
              <Link to="/config">
                <Ionicon icon="ios-settings" fontSize="28px" color="black" />
              </Link>
            </span>

          </div>
          <div className={styles.infoTwo}>
            <span className={styles.infoPost}>Post {props.userProfile.post_count}</span>
            <span className={styles.infoFollowers}>Followers {props.userProfile.followers_count}</span>
            <span className={styles.infoFollowing}>Following {props.userProfile.following_count}</span>
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
