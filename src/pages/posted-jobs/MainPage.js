import React, {Component} from 'react';
import Navigation from '../../components/navigation/Navigation';
import { connect } from 'react-redux';
import DropDown from "../../components/navigation/DropDown";
import SearchField from "../../components/navigation/SearchField";
import { withStyles } from '@material-ui/core/styles';

// imports background image and hero text as a 'banner' className
import '../../assets/header.module.css';
// import { jobsRef } from '../../App';
import Header from '../../components/header/Header';
import {checkApiServer} from '../../api/index';
import '../../assets/styles.module.css';


// const styles = theme => ({
  // searchForm: {
  //   border: '1px solid #fafafa',
  //   borderRadius: '4px',
  //   padding: '6px',
  //   paddingRight: '20px',
  //   paddingLeft: '20px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   marginLeft: '200px',
  //   marginRight: '200px',
  //   order: '1'
  //   backgroundColor: var(--color-inverted-light),
  //   paddingTop: 1rem,
  //   paddingBottom: 1rem,
  //   marginTop: 2rem
  // }
  // searchFieldMain: {
  //   display: 'flex',
  //   justifyContent: 'spaceBetween',
  //   alignItems: 'center',
  //   flexFlow: 'rowWrap'
  // },
// })


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
      <div className="searchForm">
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