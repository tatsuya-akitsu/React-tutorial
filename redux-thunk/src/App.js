import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initPost, sendNewPost } from './actions/posts';
import Form from './Form';
import List from './List';

postsState: PropTypes.shape({
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.oneOf([
        Ages.TEEN,
        Ages.TWENTIES,
        Ages.THIRTIES,
        Ages.FOURTIES,
        Ages.FIFTIES,
      ]).isRequired,
      body: PropTypes.string.isRequired
    })
  ),
  error: PropTypes.bool.isRequired
}),

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initPost);
  }

  saveNewPosts(newPost) {
    this.props.sendNewPost(newPost);
  }

  render() {
    return (
      <div className="App">
        <Form onSubmitNewPost={(newPost) => this.saveNewPosts(newPost)} />
        <hr />
        <List posts={this.props.postsState.posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postsState: state.posts
  }
}

export default connect(mapStateToProps)(App);
