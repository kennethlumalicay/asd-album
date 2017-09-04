import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../actions/actions.js';

@connect(
	state => ({
		user: state.user,
		img: state.img
	})
)

class Tiles extends Component {
	deleteImg(e) {
		actions.removeImg(this.props.dispatch, e.target.getAttribute('data-value'), this.props.user.twitter.id);
	}
	render() {
		var user = this.props.user ? this.props.user.twitter.username : null;
		var list = this.props.list ? this.props.list : this.props.img;
		var title = this.props.title;
		return (
		  <section id='tiles'>
		  	{title ? <h1>{title}</h1> : null }
		  	<div className='img-tiles' ref='imgTiles'>
					{list.length ? list.map((e,i) => 
						<div className='img' key={i}>
							<h2 title={e.title}>{e.title.length < 16
								? e.title
								: e.title.substring(0,16).trim() + '...'}</h2>
							<img src={e.url} alt={e.title} />
							{user === e.user
								? <button data-value={e.id} onClick={this.deleteImg.bind(this)}>Delete</button>
								: (e.user !== title
								   ? <Link to={'/user/' + e.user + '?' + e.userId}>{e.user}</Link>
								   : null)
							}
						</div>
					) : <h1>Send new pic!</h1>}
				</div>
			</section>
		);
  }
};

export default Tiles;