import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Search extends Component {
   
state ={
    text:' '
}

static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}

   onChange= (e) => this.setState({ [e.target.name]: e.target.value})
   
   onSubmit = e =>{
       e.preventDefault();
       console.log(this.state.text);
       this.props.searchUsers(this.state.text);
       this.setState({text: ''});
   }
   

    render() {

           return (
            <div>
        <form onSubmit={this.onSubmit} className="form">
               <input type="text" name="text" placeholder="Search Users" 
    value={this.state.text}
    onChange={this.onChange}
/>
<input  type="submit" value="Search" className="btn btn-dark btn-block" />
                     </form>
                {this.props.showClear && (
                
                     <button onClick={this.props.clearUsers} className="btn btn-light btn-block">Clear</button>   
                     )}
          
            </div>
        )
    }
}
         <form className=""></form>
export default Search
