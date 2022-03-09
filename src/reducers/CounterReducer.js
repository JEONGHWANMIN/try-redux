export const initialState = {
  count: 0,
  users: [
    { id: 1, name: 'JSMD' },
    { id: 2, name: 'KIND' },
  ],
};

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCRESE':
      console.log('INCRESE');
      console.log(state, action);
      return {
        ...state,
        count: state.count + 1,
      };

    case 'DECRESE':
      console.log('state', state);
      console.log('action', action);
      return {
        ...state,
        count: state.count - 1,
      };
    case 'ADDUSER':
      console.log('ADDUSER');
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'DELUSER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}
