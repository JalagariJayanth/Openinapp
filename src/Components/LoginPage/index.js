import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';
import { auth,provider } from "../Firebase/firebase-config";



import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'

import "./index.css"

const LoginPage = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    const onChangemail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const signInWithGoogle =async () => {
        try {
            const userCredential = await signInWithPopup(auth, provider)
            const user = userCredential.user
             console.log(user)
             if (user.emailVerified){
                navigate('/dashboard')
             }

       } catch (error) {
            console.log('error: ', error);
       }
    }

    

    


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

                    
                          <button onClick={signInWithGoogle} className="social_sign_in_button">
                             <FcGoogle className="social_logo" /> Sign in with Google
                            </button>
                       
                            <button className="social_sign_in_button">
                                <AiFillApple className="social_logo" />Sign in with Apple
                            </button>
                        </div>
                        <form className="form_container">
                             <label className="input_label" htmlFor="email">Email address</label>
                             <input value={email} type="email" id="email" placeholder="Enter Email" className="input_field" onChange={onChangemail} />
                             <label className="input_label" htmlFor="password">Password</label>
                             <input value={password} type="password" id="password" placeholder="Enter Password" className="input_field" onChange={onChangePassword}/>
                             <span className="forgot_password">Forgot password?</span>
                             <button type="submit" className="sign_in_button">Sign In </button>
                        </form>
                     <p className="right_bar_container_text">Don't have an account?<span className="register_text">Register here</span></p>


                    </div>
                </div>
            </div>

    )
}



export default LoginPage