import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Navigation from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';
// import Header from '../../components/header/Header';

const MainPage = (props) => {
	return (
		<div>
			<div>
				<Navigation path={props.path} color={props.color} title={props.title}></Navigation>
			</div>
			<div>
				<Header></Header>
			</div>
		</div>
	)
}

export default MainPage;
