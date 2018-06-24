function updatePosts(latestPosts) {
  return {
    type: 'UPDATE_POSTS',
    payload: {
      posts: latestPosts
    }
  }
}

function initFailed(error) {
  return {
    type: 'INIT_FAILED',
    payload: error,
    error: true
  }
}

function sendingFailed(error) {
  return {
    type: 'SENDING_FAILED',
    payload: error,
    error: true
  }
}


export function initPosts() {
  return (dispatch)=> {
    ApiClient.fetchPosts()
      .then(posts => dispatch(updatePosts(posts)))
      .catch(e => dispatch(initFailed(e)))
  };
}

export function sendNewPost(newPost) {
  return (dispatch) => {
    ApiClient.sendPost(newPost)
      .then(() => ApiClient.fetchPosts())
      .then(posts => dispatch(updatePosts(posts)))
      .catch(e => dispatch(sendingFailed(e)))
  };
}
