import React, { Component } from 'react';

export const Ages = {
  TEEN: "teen",
  TWENTIES: "twenties",
  THIRTIES: "thirties",
  FOURTIES: "fourties",
  FIFTIES: "fifties",
};

class Form extends Component {
  state = {
    ...this.createInitialForm()
  }

  createInitialForm() {
    return {
      name: '名無しさん',
      age: Ages.TEEN,
      body: 'こんにちは'
    };
  }

  handleChangeName(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  handleChangeAge(e) {
    e.preventDefault();
    this.setState({ age: e.target.value });
  }

  handleChangeBody(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, age, body } = this.state;

    if (!name || name.length === 0) {
      alert('名前が未入力です');
      return;
    }

    if (!body || body.length === 0) {
      alert('本文が未入力です');
      return;
    }

    const newPost = {
      name,
      age,
      body
    };
    this.props.onSubmitNewPost(newPost);

    this.setState({
      ...this.createInitialForm()
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>
            名前：
            <input
              type="text"
              placeholder="名無　太郎"
              value={this.state.name}
              onChange={(e) => this.handleChangeName(e)}
            />
          </label>
        </div>
        <div>
          <label>
            年齢：
            <select
              value={this.state.age}
              onChange={(e) => this.handleChangeAge(e)}
            >
              <option value={Ages.TEEN}>10代</option>
              <option value={Ages.TWENTIES}>20代</option>
              <option value={Ages.THIRTIES}>30代</option>
              <option value={Ages.FOURTIES}>40代</option>
              <option value={Ages.FIFTIES}>50代</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            本文：
            <textarea
              value={this.state.body}
              onChange={(e) => this.handleChangeBody(e)}
            />
          </label>
        </div>
        <input type="submit" value="送信" />
      </form>
    );
  }
}

export default Form;
