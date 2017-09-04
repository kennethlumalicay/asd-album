import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './../containers/Nav.js';
import Home from './../containers/Home.js';
import User from './../containers/User.js';
import NewPic from './../containers/NewPic.js';

class Routes extends Component {
	render() {
		return (
			<section id='route'>
				<Nav />
				<div id='content'>
					<Route component={ScrollToTop} />
					<Route path='/' component={Home} exact/>
					<Route path='/user/' component={User}/>
					<Route path='/newpic' component={NewPic}/>
				</div>
			</section>
		);
  }
};

const ScrollToTop = () => {
	if(typeof window !== 'undefined')
  	window.scrollTo(0, 0);
  return null;
};

export default Routes;