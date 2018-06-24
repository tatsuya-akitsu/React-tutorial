const initialState = {
  posts: [],
  error: false
};

const posts = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_POSTS':
      return {
        posts: action.payload.posts,
        error: false,
      };
    case 'INIT_FAILED':
      return {
        ...state,
        error: true,
      };
    case 'SENDING_FAILED':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}

export default posts;
