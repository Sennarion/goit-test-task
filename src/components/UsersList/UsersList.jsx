import PropTypes from 'prop-types';
import User from 'components/User/User';
import { List } from './UserList.styled';

function UsersList({ users, toggleFollow }) {
  return (
    <List>
      {users.map(user => (
        <User key={user.id} user={user} toggleFollow={toggleFollow} />
      ))}
    </List>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default UsersList;
