
export default (state = 0, action) => {
  console.log("Dispatched action: " + action.type);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'CLEAR':
      return 0;
    default:
      return state;
  }
};
