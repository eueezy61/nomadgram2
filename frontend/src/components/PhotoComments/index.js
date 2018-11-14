import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

const PhotoComments = props => (
  <div>
    <ul className={styles.commentUl}>
      <div className={styles.userComment} >
        <Comment username={props.creator} comment={props.caption} />
      </div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className={styles.loadComments}>Load more comments</div>
      </Link>
      {props.comments.map(comment => (
        <Comment
          username={comment.creator.username}
          comment={comment.message}
          key={comment.id}
        />
      ))}
    </ul>
  </div>
);

const Comment = props => (
  <li className={styles.li}>
    <span className={styles.liUsername}>{props.username}</span> <span>{props.comment}</span>
  </li>
);

PhotoComments.propTypes = {
  caption: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};

export default PhotoComments;
