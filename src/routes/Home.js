import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store';
import ToDo from '../components/ToDo';

function Home() {
  const [text, setText] = useState('');
  const toDos = useSelector(state => state);
  const dispatch = useDispatch();

  const onChange = event => setText(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    dispatch(add(text));
    setText('');
  };
  return (
    <div>
      <h1>To Do</h1>
      <form action='' onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} required />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
