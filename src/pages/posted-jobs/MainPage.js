import React, {Component} from 'react';
import Navigation from '../../components/navigation/Navigation';
import { connect } from 'react-redux';
import DropDown from "../../components/navigation/DropDown";
import SearchField from "../../components/navigation/SearchField";
import '../../assets/header.module.css';
import Header from '../../components/header/Header';
import ListedJobs from "../../components/common/ListedJobs";
import JobFilters from "../../components/common/JobFilters";
import CheckboxOption from "../../components/common/CheckboxOption";
import {checkApiServer} from '../../api/index';
import Checkbox from '@material-ui/core/Checkbox';
// import '../../assets/styles.module.css';



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
    <div className="banner">
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
      <div className="postedJobs">
      <ListedJobs />
      <div className="jobFilter">
      <JobFilters filterTitle="Bathroom">
        <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Baby change table"
                >
        </CheckboxOption>
                <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Gender neutral"
                >
        </CheckboxOption>
                <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Single stall"
                >
        </CheckboxOption>
                <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Wheelchair accesible stalls"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Days off">
        <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Health"
                >
        </CheckboxOption>
                <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Personal"
                >
        </CheckboxOption>
                <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Professional development"
                >
        </CheckboxOption>
      </JobFilters>
      </div>
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
