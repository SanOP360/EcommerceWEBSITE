import classes from "./AuthForm.module.css";
import { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsLogin(authCtx.isLoggedIn());
  }, [authCtx]);

  const triggerActions = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQ8n0qusnqtphI_Fa9x5oZGti1H_59f2c";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQ8n0qusnqtphI_Fa9x5oZGti1H_59f2c";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error?.message || "Authentication failed");
      }

      const data = await response.json();
      console.log(data.idToken);
      authCtx.login(data.idToken, data.email);
      navigate("/Store");
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPasswordHandler = async () => {
    const enteredEmail = emailInputRef.current.value;
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAQ8n0qusnqtphI_Fa9x5oZGti1H_59f2c",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: enteredEmail,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.error?.message || "Failed to send password reset request"
        );
      }

      await response.json();
      console.log("Successfully sent the request to change password");
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.auth}>
      {isLogin && <h1>Login</h1>}
      {!isLogin && <h1>Signup</h1>}
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
          {!isLoading && !isLogin && (
            <button className={classes.loginLogout}>SignUp</button>
          )}
          {!isLoading && isLogin && (
            <button className={classes.loginLogout}>Login</button>
          )}
          {isLoading && <p>Loading...</p>}

          {!isLogin && (
            <button
              type="button"
              className={classes.signBtn}
              onClick={triggerActions}
            >
              Already have an account? SignIn
            </button>
          )}
          {isLogin && (
            <button
              type="button"
              className={classes.signBtn}
              onClick={triggerActions}
            >
              Don't have an account? SignUp
            </button>
          )}

          {isLogin && (
            <button
              type="button"
              className={classes.forgotPassBtn}
              onClick={forgotPasswordHandler}
            >
              Forgot Password
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
