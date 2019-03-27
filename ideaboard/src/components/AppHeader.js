import React from 'react';
import {Link , Redirect } from 'react-router-dom';
import $ from 'jquery';

export default class AppHeader extends React.Component {

	componentDidMount () {
		if (this.props.history.location.pathname !== "/signup")
		{
			$.ajax({
			type: 'GET',
			url: 'http://localhost:3001/auth/validate_token',
      		dataType: "JSON",
      		headers: JSON.parse(sessionStorage.getItem('user'))
		})
		.fail((data) => {
			this.props.history.push('/login');
		})
		}
	}

	handleSignOut = (e) => {
		e.preventDefault();
		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:3001/auth/sign_out',
			data: JSON.parse(sessionStorage.user)
		})
		.done(() => {
			sessionStorage.removeItem('user');
			this.props.history.push('/login');
		})
	}

	render () {
		if(sessionStorage.getItem('user')) {
			return (
				<div>
					<p>
					{JSON.parse(sessionStorage.getItem('user')).uid}	
					<Link to="#" onClick={this.handleSignOut}> Sign out</Link>	
					</p>
				</div>
			)
		} else {
			return (
				<Link to="/login" />
			)
		}
	}
} 