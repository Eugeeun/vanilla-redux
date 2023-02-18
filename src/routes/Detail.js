import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail() {
  const toDos = useSelector(state => state);
  const id = useParams().id;
  const currentToDo = toDos.find(toDo => toDo.id === parseInt(id));

  return (
    <div>
      <h1>{currentToDo?.text}</h1>
      <h3>{`created at: ${currentToDo?.id}`}</h3>
    </div>
  );
}

export default Detail;
