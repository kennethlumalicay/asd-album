import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from './../actions/actions.js';

@connect(
	state => ({
		user: state.user
	})
)

class Nav extends Component {
	render() {
		const user = this.props.user;
		if(user) {
			return (
		    <section id="nav">
		    	<Link to='/'>Asd Album</Link>
		    	<Link to={'/user/' + user.twitter.username}>My Album</Link>
		    	<Link to='/newpic'>New Pic</Link>
		    	<a href='/signout'>Sign out</a>
          <div id="footer">
              <span>App made</span>
              <span>by</span>
              <span><a href="https://kennethlumalicay.github.io/portfolio/" target="_blank">Kenneth Malicay</a></span>
          </div>
		    </section>
	    )
		}
		else {
			return (
		    <section id="nav">
		    	<Link to='/'>Asd Album</Link>
		    	<a href='/login'>Login</a>
          <div id="footer">
              <span>App made</span>
              <span>by</span>
              <span><a href="https://kennethlumalicay.github.io/portfolio/" target="_blank">Kenneth Malicay</a></span>          </div>
		    </section>
	    )
		}
  }
};

export default Nav;