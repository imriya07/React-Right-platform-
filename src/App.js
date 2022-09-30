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
    const password = document.querySelector('#pwd');
    const pass = document.querySelector('#pwd2332');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    pass.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
    
  }
  handleSubmit(event){
    event.preventDefault()
    if(this.state.pwd == this.state.pwd2332){
      axios
      .post('https://powerful-tor-75671.herokuapp.com/api/products',{
        data: {
          email: this.state.email,
          fname: this.state.fname,
          phone: this.state.phone,
          pwd: this.state.pwd,
        }
      })
      .then(response => {
        alert("Login Successfully")
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("pwd").value = "";
        document.getElementById("pwd2332").value = "";
        console.log(response);
      });
    } else {
      alert("Password does't match")
    }
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
          <div className="form-element inputValue">
            <input type="password" id="pwd" name="pwd" autoComplete="current-password" required="" placeholder="Enter Password" value={this.state.value} onChange={this.handleChange}/>
          </div><br></br><br></br>
          <div className="form-element inputValue">
          <input type="password" id="pwd2332" name="pwd2332" placeholder="Confirm Password" autocomplete="current-password" value={this.state.value} onChange={this.handleChange} required=""/>
          <span onClick={this.handleToggle}><Icon icon={eyeOff}/></span>
          </div>
          <br></br><br></br>
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


