import classes from  './AuthForm.module.css';
import { useContext, useRef,useState } from 'react';
import {useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
const AuthForm=()=>{

    const authCtx=useContext(AuthContext);
    const navigate=useNavigate();

    const[isLoading,setIsLoading]=useState(false);
    
    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
        setIsLoading(true);

        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQ8n0qusnqtphI_Fa9x5oZGti1H_59f2c",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        )
          .then((response) => {
            setIsLoading(false);
            if (!response.ok) {
              return response.json().then((data) => {
                throw new Error(data.error?.message || "Authentication failed");
              });
            }
            return response.json();
          })
          .then((data) => {
            console.log(data.idToken);
            authCtx.login(data.idToken);
            navigate("/Store");
          })

          .catch((err) => {
            alert(err.message);
          });
    }
    return (
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>Login</button>
            )}
            {isLoading && <p>Loading...</p>}
          </div>
        </form>
      </section>
    );
}

export default AuthForm