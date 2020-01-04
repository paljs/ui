import React from 'react';
import { Card, List, ListItem, User } from 'oah-ui';

function Users() {
  const userList = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
  return (
    <Card style={{ maxWidth: '20rem', margin: '0 auto' }} size="Small">
      <header>Users List</header>
      <List>
        {userList.map((user, index) => (
          <ListItem key={index}>
            <User title={user.title} name={user.name} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Users;
