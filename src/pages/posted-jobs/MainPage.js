import React, {Component} from 'react';
import Navigation from '../../components/navigation/Navigation';
import { connect } from 'react-redux';
import DropDown from "../../components/navigation/DropDown";
import SearchField from "../../components/navigation/SearchField";
import JobPostCard from '../../components/common/JobPostCard';
import '../../assets/header.module.css';
import Header from '../../components/header/Header';
import {checkApiServer} from '../../api/index';
import JobFilterList from "./JobFilterList"
import JobFilter from "./JobFilter"

import '../../assets/styles.module.css';
import { setJobs } from './jobs-actions';

const mapDispatchToProps = {
  setJobs
}

const mapStateToProps = state => ({
  jobs: state.jobs
});

class MainPage extends Component {
  componentDidMount(){
    checkApiServer()
    .then(data => this.props.setJobs(data));
  }
  
  render() {
    const {path, color, title, jobs} = this.props
    return (
    <React.Fragment>
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
        <div>
        {
          jobs.map((job, i) => (
            <JobPostCard key={`${i}-job`} primary={job.companyName} secondary={job.title} logo={job.logo} link={job.link}/>
          ))
        }
        </div>

      <div className="jobFilter">
        <JobFilterList filterTitle="Bathroom">
          <JobFilter label="Baby change table" />
          <JobFilter label="Gender neutral" />
          <JobFilter label="Single stall" />
          <JobFilter label="Wheelchair accesible stalls" />
        </JobFilterList>
        <JobFilterList filterTitle="Days off">
          <JobFilter label="Health" />
          <JobFilter label="Personal" />
          <JobFilter label="Professional development" />
        </JobFilterList>
        <JobFilterList filterTitle="Employee development">
          <JobFilter label="Career coaching" />
          <JobFilter label="Employee resources" />
          <JobFilter label="Hackathons" />
          <JobFilter label="Lunch and learns" />
          <JobFilter label="Mentorship" />
          <JobFilter label="Development budget" />
          <JobFilter label="Tuition reimbursement" />
        </JobFilterList>
        <JobFilterList filterTitle="Employment">
          <JobFilter label="Flexible hours" />
          <JobFilter label="Name blind hiring" />
          <JobFilter label="Personalized workstation" />
          <JobFilter label="Full transit" />
          <JobFilter label="Subsidized transit" />
          <JobFilter label="Relocation" />
          <JobFilter label="Remote" />
          <JobFilter label="Work from home" />
        </JobFilterList>
        <JobFilterList filterTitle="Family">
          <JobFilter label="On site children" />
          <JobFilter label="Subsidized childcare" />
          <JobFilter label="Parental leave" />
        </JobFilterList>
        <JobFilterList filterTitle="Finances">
          <JobFilter label="Stock plan" />
          <JobFilter label="Retirement savings" />
        </JobFilterList>
        <JobFilterList filterTitle="Health">
          <JobFilter label="Dental" />
          <JobFilter label="Employee assistance" />
          <JobFilter label="Flexible spending" />
          <JobFilter label="Full gym" />
          <JobFilter label="Subsidized gym" />
          <JobFilter label="Sellness budget" />
          <JobFilter label="Health" />
          <JobFilter label="Vision" />
        </JobFilterList>
        <JobFilterList filterTitle="Life">
          <JobFilter label="Life" />
          <JobFilter label="Disability" />
          <JobFilter label="Travel" />
        </JobFilterList>
        <JobFilterList filterTitle="Office">
          <JobFilter label="Snacks" />
          <JobFilter label="Meditation" />
          <JobFilter label="Prayer" />
          <JobFilter label="Pumping" />
          <JobFilter label="Stand up desks" />
          <JobFilter label="Accesible" />
        </JobFilterList>
        <JobFilterList filterTitle="Policy">
          <JobFilter label="Anti harassment" />
          <JobFilter label="Code of conduct" />
          <JobFilter label="Parental leave" />
        </JobFilterList>
        <JobFilterList filterTitle="Social">
          <JobFilter label="Daily lunch" />
          <JobFilter label="Weekly lunch" />
          <JobFilter label="Monthly outings" />
          <JobFilter label="Quarterly outings" />
        </JobFilterList>
      </div>
      </div>
    </div>
    </React.Fragment>
    )
  }
}

const MainPageContainer = connect(
  mapStateToProps, // state
  mapDispatchToProps, //dispatch action - this is where we pass the thunk
)(MainPage)

export default MainPageContainer;