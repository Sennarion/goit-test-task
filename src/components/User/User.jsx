import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  UserItem,
  UserInfo,
  UserText,
  Logo,
  Ellipse,
  Avatar,
} from './User.styled';
import Button from 'components/Button/Button';
import logo from '../../images/logo.svg';

function User({ user, updateUsers }) {
  const [followers, setFollowers] = useState(user.followers);
  const [isFollow, setIsFollow] = useState(user.isFollow ?? false);

  function toggleFollow() {
    setIsFollow(prevIsFollow => !prevIsFollow);
    setFollowers(prevFollowers =>
      isFollow ? prevFollowers - 1 : prevFollowers + 1
    );

    updateUsers({
      ...user,
      followers,
      isFollow,
    });
  }

  return (
    <UserItem>
      <Logo src={logo} alt="go-it logo" width="88" />
      <UserInfo>
        <Ellipse>
          <Avatar src={user.avatar} alt="avatar" width="72" />
        </Ellipse>
        <UserText>{user.tweets} tweets</UserText>
        <UserText>{user.followers.toLocaleString('en-US')} followers</UserText>
        <Button onClick={toggleFollow} isFollow={user.isFollow}>
          {user.isFollow ? 'Following' : 'Follow'}
        </Button>
      </UserInfo>
    </UserItem>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollow: PropTypes.bool,
  }).isRequired,
  updateUsers: PropTypes.func.isRequired,
};

export default User;
