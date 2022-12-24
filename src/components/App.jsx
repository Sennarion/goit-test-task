import { useState, useEffect } from 'react';
import initialUsers from '../data/users.json';
import UsersList from './UsersList/UsersList';
import { Container } from './Container/Container.styled';
import { GlobalStyles } from 'styles/GlobalStyles';

const LS_KEY = 'users';

export function App() {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? initialUsers
  );

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(users));
  }, [users]);

  function toggleFollow(id) {
    setUsers(users =>
      users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            followers: user.isFollow ? user.followers - 1 : user.followers + 1,
            isFollow: user.isFollow ? false : true,
          };
        }
        return user;
      })
    );
  }

  return (
    <>
      <Container>
        <UsersList users={users} toggleFollow={toggleFollow} />
      </Container>
      <GlobalStyles />
    </>
  );
}
