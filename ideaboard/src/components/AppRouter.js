import React from 'react';
import AppHeader from './AppHeader';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Idea from './Idea';
import IdeaForm from './IdeaForm';
import update from 'immutability-helper';
import Notification from './Notification';
import Login from './Login';

export default (props) => {
	return (
		<BroswerRouter>
			<div>
				<Route path="/" compoenent={AppHeader}/>
				<Route path="/login" compoenent={Login} />
			</div>
		</BrowserRouter>
		)
}