import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addToDo = createAction('ADD');
export const deleteToDo = createAction('DELETE');

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], builder => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) =>
      state.filter(toDo => toDo.id !== action.payload)
    );
});

const store = createStore(reducer);

export default store;
