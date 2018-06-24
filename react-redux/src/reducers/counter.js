const initialState = {
  count: 0
};

const counter = ( state = initialState, action ) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload.amount
      };
    case 'DECREMENT':
      return {
        count: state.count - action.payload.amount
      };
    default:
     return state;
  }
}

export default counter;
