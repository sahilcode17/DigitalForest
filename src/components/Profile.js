import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
const Profile = () => {
    const {user, isAuthenticated } = useAuth0()
    return (
       isAuthenticated && (
           <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>
                        {user.name}
                    </h1>

                    </div>

                    </div>
                    <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 ">
                    <img src={user.picture} alt={user.name} />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>Username : {user.nickname}
                    </h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        EmailID : <span className="text-uppercase">
                            {user.email}
                        </span>
                    </h4>
           </div>
           </div>
           </div>
       )
    )
}

export default Profile
