import React, { useEffect, useState } from 'react';
import { IUser } from './IUser';
import { getDataPromise } from './getDataPromise';
import './App.css';
import { Card } from './Card';
function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const limit = 1;
  const [skip, setSkip] = useState(0);
  const onClick = () => {
    getDataPromise((receiveUsers: IUser[]) =>
      setUsers((previousState) => {
        setSkip((previousSkip) => {
          return previousSkip + limit;
        });
        return [...previousState, ...receiveUsers];
      }),
    )(skip, limit);
  };
  useEffect(onClick, []);
  return (
    <div className="App">
      {users.map((user: IUser, key: number) => (
        <Card click={onClick} user={user} key={key} />
      ))}
    </div>
  );
}

export default App;
