import React from 'react';
import { remove } from '../store';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ToDo(todo) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(remove(todo.id));
  };
  return (
    <li>
      <Link to={`/${todo.id}`}>{todo.text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

export default ToDo;
