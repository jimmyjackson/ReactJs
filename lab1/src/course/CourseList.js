import React, { Component } from 'react';
import './CourseList.css';

class CourseList extends Component {
  state={
    value: []
  }

  render(){
    this.setState({
      value: this.props.courseList
    });
    let showData = this.state.value.map((val)=>(
      <li>
        {val}
      </li>
    ));
    
    return (
      <div className="container">
        <h1 className='text-primary text-center'>
          Course List
          {showData}
        </h1>
      </div>
    )
  }
}
export default CourseList;
