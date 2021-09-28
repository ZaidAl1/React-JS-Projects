import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import './App.css';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import { Fragment } from 'react';

class App extends Component {
  state ={
    users: [],
    loading: false,
    alert: null
  }
 async componentDidMount(){
   this.setState( { loading: true } );
  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  this.setState({users: res.data, loading: false}); 
  
 }

 //this fuction through search.js
 searchUsers = async (text) => {
  this.setState( { loading: true } );
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&clien t_id=${process.env.REACT_APP_GITHUB_CIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  this.setState({users: res.data.items, loading: false})
   
 } 

 //this function through searchUser.js

 clearUsers=()=> this.setState({users: [], loading: false })

 
//Alert function for text field
sertAlert=(msg, type) =>{
this.setState({ alert: {msg: msg, type:type} })
setTimeout(() => this.setState({alert:null }), 5000)
}

 render() {
  const { users, loading} = this.state;    
    return (
      <Router>
<div className="App"> 
      <Navbar />
      
 <div className="container">
 <div className="User-now">
 <Alert alert={this.state.alert} />

<Switch>
{}
<Route exact path='/' render={ props => (
 <Fragment>
 <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
  showClear={this.state.users.length > 0 ? true : false}
    setAlert={this.setAlert}
  />
      <Users loading={this.state.loading} users={this.state.users} />
      
</Fragment>

      )}/>
      
      <Route exact path='/about' component={About} />
      </Switch>
      
      </div>
      </div>
      </div>
      </Router>   
       );
  }

}



export default App;