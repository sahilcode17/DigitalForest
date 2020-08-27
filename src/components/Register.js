import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import {ButtonContainer} from "./Button"
const Register = () => {
    const { loginWithRedirect , isAuthenticated } = useAuth0()
    return (
        !isAuthenticated && (
            <ButtonContainer onClick={() => loginWithRedirect()}>
            <span className="mr-2">
         Register    
         </span>
         </ButtonContainer>
        )
       
    )
}

export default Register
