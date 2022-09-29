import React from 'react';
import './App.css';
import img from './Images/R.jpeg';
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'



import axios from 'axios';
//npm add axios

// axios.get('http://localhost:1337/api/products').then(response => {
//   console.log("@@@@@@",response);
// });

// axios
//   .post('http://localhost:1337/api/products',{
//     "data": {
//       "title": "Riya"
//     }
//   })
//   .then(response => {
//     console.log(response);
//   });

class NameForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(event){
    console.log(event.target.value)
    let obj = {};
    obj[event.target.name] = event.target.value
    this.setState(obj)
    
  }
  handleToggle(event){
    event.preventDefault()
    console.log('777s')
    
  }
  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
    axios
      .post('http://localhost:1337/api/products',{
        data: {
          email: this.state.email,
          fname: this.state.fname,
          phone: this.state.phone,
          pwd: this.state.pwd,
        }
      })
      .then(response => {
        console.log(response);
      });
  }
  render(){
    return (
      <div className="main">
        <img src= {img} alt = ""/>
        <form >
          <div className="form-element">
            <input type="text" id="name" name="fname" placeholder="Enter Full Name" value={this.state.value} onChange={this.handleChange}/>
          </div><br></br><br></br>
          <div className="form-element">
            <input type="text" id="email" name="email" value={this.state.value} onChange={this.handleChange}  placeholder="Enter Email ID"/>
          </div><br></br><br></br>
          <div className="form-element">
            <input type="text" id="phone" name="phone" placeholder="Enter Phone Number" value={this.state.value} onChange={this.handleChange}/>
          </div><br></br><br></br>
          {/* <div className="form-element">
            <input type="password" id="pwd2332" name="pwd332" placeholder="Enter Password" required="" value={this.state.value} onChange={this.handleChange}/>
          </div><br></br><br></br> */}
          <div className="form-element inputValue">
            <input type="password" id="pwd" name="pwd" autoComplete="current-password" required="" placeholder="Enter Password" value={this.state.value} onChange={this.handleChange}/>
              <span onClick={this.handleToggle}><Icon icon={eyeOff}/></span>
          </div><br></br><br></br>
          <div className="form-element">
              <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NameForm;
// function App(){
//   const [type, setType]= useState('password')
//   const [icon, setIcon]= useState(eyeOff)

//   const handleToggle = ()=>{
//     if(type==='password'){
//       setIcon(eye);
//       setType('text');
//     }
//     else{
//       setIcon(eyeOff);
//       setType('password')
//     }
//   }
// }


