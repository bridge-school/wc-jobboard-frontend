import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import StyledButton from '../../components/common/StyledButton';
import Navigation from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';

const MainPage = (props) => {
	return (
			<div>
				<Navigation path={props.path} color={props.color} title={props.title}></Navigation>
			</div>
	)
}

export default MainPage;
