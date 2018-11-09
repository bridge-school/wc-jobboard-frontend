import React, {Component} from 'react';
import Navigation from '../../components/navigation/Navigation';
import { connect } from 'react-redux';
import DropDown from "../../components/navigation/DropDown";
import SearchField from "../../components/navigation/SearchField";
import '../../assets/header.module.css';
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
    <form className="banner">
      <div>
        <Navigation path={path} color={color} title={title}></Navigation>
      </div>
      <div>
        <Header />
      </div>
      <div className="SearchFieldMain searchForm">
        <SearchField />
        <DropDown />
      </div>
    </form>
  )
  }
}

const MainPageContainer = connect(
  null, // state
  mapDispatchToProps, //dispatch action - this is where we pass the thunk
)(MainPage)

export default MainPageContainer;