import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  const [num, setNum] = useState(3);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  console.log(count);
  const oninCrese = () => {
    dispatch({
      type: 'INCRESE',
    });
  };
  const ondeCrese = () => {
    dispatch({
      type: 'DECRESE',
    });
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const addUser = (e) => {
    e.preventDefault();
    setNum((cur) => cur + 1);
    dispatch({
      type: 'ADDUSER',
      payload: { id: num, name: text },
    });
  };
  return (
    <>
      <h1>Redux Practice</h1>
      <button onClick={oninCrese}>INCRESE</button>
      <button onClick={ondeCrese}>DECRESE</button>
      <form>
        <input type='text' onChange={onChange} value={text} />
        <button onClick={addUser}>ADD USER</button>
      </form>
    </>
  );
}
export default Home;
