import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/actions.js';

@connect(
	state => ({
		user: state.user,
		img: state.img
	}))

class NewPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
    }
    this.addImg = this.addImg.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.urlChange = this.urlChange.bind(this);
  }
  addImg(e) {
    var userId = this.props.user.twitter.id;
    var id = userId + ~~(Date.now()*7/777);
    actions.addImg(this.props.dispatch, this.state.url, this.state.title, id, userId);
    this.setState({
      title: '',
      url: ''
    });
  }
  titleChange(e) {
    this.setState({title: e.target.value})
  }
  urlChange(e) {
    this.setState({url: e.target.value})
  }
  render() {
    return (
      <section id="new-pic" className='ani-show'>
        <h1>Add new picture!</h1>
        <input type='text' placeholder='Title' value={this.state.title} onChange={this.titleChange}></input>
        <input type='text' placeholder='URL' value={this.state.url} onChange={this.urlChange}></input>
        <button onClick={this.addImg}>Submit</button>
      </section>
    );
  }
};

export default NewPic;