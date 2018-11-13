
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import ProfileDisplay from "components/ProfileDisplay";


const Profile = props => {
  if (props.loading) {
    return <LoadingFeed />;
  } else if (props.userProfile) {
    return <RenderProfile {...props} />;
  }
};

const LoadingFeed = props => (
  <div className={styles.myPhotos}>
    <Loading />
  </div>
);

const RenderProfile = props => (
  <div className={styles.myPhotos}>
    <ProfileDisplay {...props.userProfile} />
  </div>
);

Profile.propTypes = {
  loading: PropTypes.bool.isRequired,
  feed: PropTypes.array
};

export default Profile;
