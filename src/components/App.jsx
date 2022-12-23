import { Component } from 'react';
import UsersList from './UsersList/UsersList';
import initialUsers from '../data/users.json';
import { Container } from './Container/Container.styled';
import { GlobalStyles } from 'styles/GlobalStyles';

const LS_KEY = 'users';

export class App extends Component {
  state = {
    users: JSON.parse(localStorage.getItem(LS_KEY)) || initialUsers,
  };

  componentDidUpdate() {
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.users));
  }

  toggleFollow = id => {
    this.setState(({ users }) => ({
      users: users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            followers: user.isFollow ? user.followers - 1 : user.followers + 1,
            isFollow: user.isFollow ? false : true,
          };
        }
        return user;
      }),
    }));
  };

  render() {
    return (
      <>
        <Container>
          <UsersList
            users={this.state.users}
            toggleFollow={this.toggleFollow}
          />
        </Container>
        <GlobalStyles />
      </>
    );
  }
}
