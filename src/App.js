import React from 'react';
import Home from './pages/Home';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.countReducer.users);
  console.log(users);
  const onDel = (id) => {
    dispatch({
      type: 'DELUSER',
      id,
    });
  };
  return (
    <div>
      <Home />
      <h3>{count}</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>User Name : {user.name}</h2>
            <button onClick={() => onDel(user.id)}>DeleteUser</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
