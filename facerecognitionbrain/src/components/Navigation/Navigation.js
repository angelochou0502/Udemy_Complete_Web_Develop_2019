import React from 'react'

function Navigation({onRouteChange, isSignin}){
        if (isSignin) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={()=>onRouteChange('signout')} className="f3 link dim black underline pa3 pointer ">
                        Sign Out
                    </p>
                </nav>
            )
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={()=>onRouteChange('Register')} className="f3 link dim black underline pa3 pointer ">
                        Register
                    </p>
                    <p onClick={()=>onRouteChange('SignIn')} className="f3 link dim black underline pa3 pointer ">
                        Sign In
                    </p>
                </nav>
            )
        }

}

export default Navigation;