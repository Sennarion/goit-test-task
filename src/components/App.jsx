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

  function updateUsers(userToUpdate) {
    setUsers(prevUsers =>
      prevUsers.map(prevUser =>
        prevUser.id === userToUpdate.id ? userToUpdate : prevUser
      )
    );
  }

  return (
    <>
      <Container>
        <UsersList users={users} updateUsers={updateUsers} />
      </Container>
      <GlobalStyles />
    </>
  );
}
