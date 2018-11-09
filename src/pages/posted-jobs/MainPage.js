import React, {Component} from 'react';
import Navigation from '../../components/navigation/Navigation';
import { connect } from 'react-redux';
// import { jobsRef } from '../../App';
import Header from '../../components/header/Header';
import {checkApiServer} from '../../api/index';

const mapDispatchToProps = {

}

class MainPage extends Component {
  componentDidMount(){
    checkApiServer()
  }
  render() {
    const {path, color, title} = this.props
    return (
    <div>
      <div>
        <Navigation path={path} color={color} title={title}></Navigation>
      </div>
      <div>
        <Header></Header>
      </div>
    </div>
  )
  }
}

const MainPageContainer = connect(
  null, // state
  mapDispatchToProps, //dispatch action - this is where we pass the thunk
)(MainPage)

export default MainPageContainer;