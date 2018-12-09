import React, { Component } from 'react'
// import Test from './Test'
import { ToastContainer, toast } from 'react-toastify';
import Button from '@material-ui/core/Button';

import 'react-toastify/dist/ReactToastify.min.css'
import { Chip, Avatar } from 'material-ui';
// import DoneIcon from '@material-ui/icons/Done';

// rcc


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "rakesh",
      age: "28",
    }
  }
  onChangeHandler = (e) => {
    // sst
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleClick = () => {
    toast.info(`Hello my name is ${this.state.name} and my age is ${this.state.age}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  render() {
    return (
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <button onClick={this.handleClick}>My Awesome Button</button>
        <Button variant="contained" >
          Default
      </Button>


        <h1>Name: {this.state.name}</h1>
        <h1>Age: {this.state.age}</h1>
        {/* <h3><Test/></h3> */}
        <input type="text" name="name" onChange={this.onChangeHandler} placeholder="Enter Name" />
        <input type="text" name="age" onChange={this.onChangeHandler} placeholder="Enter Age" />
      </div>
    )
  }
}
export default App
