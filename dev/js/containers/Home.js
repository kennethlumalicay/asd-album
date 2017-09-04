import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tiles from './../containers/Tiles.js';

@connect(
	state => ({
		user: state.user,
		img: state.img
	})
)

class Home extends Component {
  render() {
    return (
      <section id="home" className='ani-show'>
        <Tiles/>
      </section>
    );
  }
};

export default Home;