import React, { useState } from 'react';

function Home() {
  const [text, setText] = useState('');
  const onChange = event => setText(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    console.log(text);
  };
  return (
    <div>
      <h1>To Do</h1>
      <form action='' onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default Home;
