import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tiles from './../containers/Tiles.js';

@connect(
	state => ({
		user: state.user,
		img: state.img
	}))

class User extends Component {
  render() {
    var loggedUser = this.props.user ? this.props.user.twitter : {};
    var user = this.props.location.pathname.replace('/user/','');
    var userId = this.props.location.search.replace('?','');
    var list = this.props.img.filter(e => e.userId === (user !== loggedUser.username ? userId : loggedUser.id));
    return (
      <section id="user" className='ani-show'>
        <Tiles
        	title={user}
          list={list.length ? list : null}
        />
      </section>
    );
  }
};

export default User;