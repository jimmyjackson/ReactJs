import 'bootstrap/dist/css/bootstrap.min.css';
import CourseList from './course/CourseList';
import React, { Component } from 'react';

class App extends Component {
  state={
    appName: "React JS",
    courseList: ["Java", "Angular", "ReactJS", "Hibernate", "Spring Boot", "Micro Services"],
    showCourse: false
  }

  btnShowCourse = () =>{
    let flag = this.state.showCourse;
    this.setState({
      showCourse:!flag
    });
  }

  render() {
    console.log(this.state.showCourse);
    let display = null;
    if(this.state.showCourse===true) {
      display = (
        <CourseList courseList={this.state.courseList}/>
      );
    }

  return (
    <div className="container">
      <h1 className='text-primary text-center'>Welcome to {this.state.appName} App</h1>
      <button className='btn btn-primary' onClick={this.btnShowCourse}>Show Course</button>
      {display}
    </div>
  )
  }
}

export default App;
