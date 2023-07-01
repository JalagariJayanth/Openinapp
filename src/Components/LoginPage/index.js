import {Component} from "react"
import Cookies from "js-cookie"
import {Redirect} from "react-router-dom"
import { LoginSocialGoogle } from "reactjs-social-login";


import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'

import "./index.css"

class LoginPage extends Component{
    state ={email:"",password:""}

    onChangemail = event => {
        this.setState({email:event.target.value})

    }
    onChangePassword = event => {
        this.setState({password:event.target.value})

    }

    

    render(){
        const {email,password} = this.state
        return(
            <div className="loginPage_container">
                <div className="left_bar_container">
                    <h1 className="left_bar_container_text">
                        Board.
                    </h1>
                </div>
                <div className="right_bar_container">
                    <div className="sign_in_container">
                        <h1 className="sign_in_heading">Sign In</h1>
                        <p className="sign_in_text">Sign in to your account</p>
                        <div className="social_signin_container">

                        <LoginSocialGoogle
                            client_id={"880825100885-v8m5stpncl76lckbh4bfn6dhbnv255vt.apps.googleusercontent.com"}
                            scope="openid profile email"
                            discoveryDocs="claims_supported"
                            access_type="offline"
                            onResolve={({ provider, data }) => {
                                console.log(data)
                            }}
                            onReject={(err) => {
                                console.log(err);
                            }}
                        >
                          <button className="social_sign_in_button">
                             <FcGoogle className="social_logo" /> Sign in with Google
                            </button>
                        </LoginSocialGoogle>
                            <button className="social_sign_in_button">
                                <AiFillApple className="social_logo" />Sign in with Apple
                            </button>
                        </div>
                        <form className="form_container">
                             <label className="input_label" htmlFor="email">Email address</label>
                             <input value={email} type="email" id="email" placeholder="Enter Email" className="input_field" onChange={this.onChangemail} />
                             <label className="input_label" htmlFor="password">Password</label>
                             <input value={password} type="password" id="password" placeholder="Enter Password" className="input_field" onChange={this.onChangePassword}/>
                             <span className="forgot_password">Forgot password?</span>
                             <button type="submit" className="sign_in_button">Sign In </button>
                        </form>
                     <p className="right_bar_container_text">Don't have an account?<span className="register_text">Register here</span></p>


                    </div>
                </div>
            </div>

        )
    }
}

export default LoginPage