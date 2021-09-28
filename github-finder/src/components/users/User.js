import React, { Component } from 'react'

class User extends Component {
   componentDidMount(){
       this.props.getUser(this.props.match.params.login);
   }
   
    render() {
     const{name, company, avatar_url,location,bio,blog,login,html_url,followers,following,public_}
     
        return (
            <Fragment>
   <Link to='/' className="btn btn-light">Back to Search Results </Link>
   HireAble :{hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>} 
       <div className="card grid-2">
           <div className="all-center">
               <img src={avatar_url} alt="Profile Picture" className="round-img" style={{width: '100'}}/>
           
           <h2>{name}</h2>
           <h5>Location: {location}</h5>
           </div>
       </div>    
           
           
            </Fragment>
        )
    }
}

export default User
