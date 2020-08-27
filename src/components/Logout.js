import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import {Link} from "react-router-dom"
const Logout = () => {
    const {user, logout , isAuthenticated } = useAuth0()
    return (
        isAuthenticated && (
            <div className="dropdown">
            
              <img  className="dropdown-toggle rounded-circle" data-toggle="dropdown"  src={user.picture} width="60px"  alt={user.name} />
            
            <div className="dropdown-menu dropdown-menu-right">
              <button onClick={()=> logout()} className="dropdown-item" type="button">Logout</button>
              <Link to="/profile">
              <button className="dropdown-item" type="button">Profile</button>
              </Link>
             
            </div>
          </div>
        )
    )
}

export default Logout
