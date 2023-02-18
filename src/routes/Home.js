import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo } from '../store';

function Home() {
  const [text, setText] = useState('');
  const toDo = useSelector(state => state);
  const dispatch = useDispatch();

  const onChange = event => setText(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    dispatch(addToDo(text));
    console.log(text);
    setText('');
  };
  return (
    <div>
      <h1>To Do</h1>
      <form action='' onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDo)}</ul>
    </div>
  );
}

export default Home;
