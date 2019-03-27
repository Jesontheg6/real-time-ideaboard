import React from 'react';
import $ from 'jquery';


export default class Signup extends React.Component {

	handleSignup = (e) => {
		e.preventDefault();
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3001/auth',
			data: {
				email: this.email.value,
				password: this.password.value
			}
		})
		.done((jqXHR, textStatus, errorThrown )=> {
			
			console.log("jqXHR: ", jqXHR);
			console.log("textStatus: ", textStatus);
			console.log("errorThrown: ", errorThrown);
			$.ajax({
			type: 'POST',
			url: 'http://localhost:3001/auth/sign_in',
			data: {
				email: this.email.value,
				password: this.password.value
			}
			})
			.done((response, status, jqXHR) => {
				sessionStorage.setItem('user',
					JSON.stringify({
						'access-token': jqXHR.getResponseHeader('access-token'),
						client: jqXHR.getResponseHeader('client'),
						uid: response.data.uid
					}));
				this.props.history.push('/');
			})
		})
		.fail((jqXHR, textStatus, errorThrown ) => {
			console.log("jqXHR: ", jqXHR);
			console.log("textStatus: ", textStatus);
			console.log("errorThrown: ", errorThrown);
		})
		
	}

	render () {
		return (

			<div>
				<h2> Sign up </h2>
				<form className= "signUpForm" onSubmit={this.handleSignup}>
					<input name="email" ref={(input) => this.email = input }/>
					<input name="password" type="password" ref={(input) => this.password = input } />
					<input className= "signInButton" type="submit" />
				</form>
			</div>
	)}
}
