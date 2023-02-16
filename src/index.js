import { createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = second => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener('click', () => countStore.dispatch({ type: ADD }));
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));
