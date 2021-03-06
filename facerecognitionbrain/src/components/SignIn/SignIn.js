import React from 'react'

function SignIn({onRouteChange}){
    return (
        <article className="br4 ba b--black-10 mv4 w-100 w-50-m w-50-l mw9 shadow-5 center">
            <main className="pa2 black-80">
              <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="center f2 fw6 ph0 mh0">Sign In</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                  </div>
                </fieldset>
                <div className="">
                  <input onClick={() => onRouteChange('home')}
                         className="center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                         type="submit" 
                         value="Sign in" />
                </div>
                <div className="center lh-copy mt3">
                  <a onClick={() => onRouteChange('Register')} 
                     href="#0" className="f6 link dim black db">Register</a>
                </div>
              </div>
            </main>
        </article>
        )

}

export default SignIn;