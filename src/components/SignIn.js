import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button, TextField, Container, Grid, Paper } from "@material-ui/core";
import "../styles/SignIn.css";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, GoogleAuth } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      signin(emailRef.current.value, passwordRef.current.value);
      setError("Signed in sucessfully");
      history.push("/");
    } catch {
      setError("failed to sign in");
    }
    setLoading(false);
  }
  return (
    <div className="signup_page">
      <div className="container">
        <Container
          maxWidth="sm"
          style={{
            "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            "border-radius":"5px",
            padding: "10px",
            "background-color": "white",
          }}
        >
          <form
            className="signin_form"
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{ display: "flex", "flex-direction": "column" }}
          >
            <label
              style={{
                "font-size": "20px",
                "font-weight": "600px",
                "text-align": "center",
                padding: "10px",
                border: "2px solid blue",
                margin: "10px auto",
                "background-color": "blue",
                color: "white",
                width: "50%",
              }}
            >
              Sign In
            </label>
            {error && <p>{error}</p>}
            <div className="email_password">
              <div className="signup_email">
                <TextField
                  fullWidth
                  autoComplete="off"
                  required
                  type="email"
                  id="filled-textarea"
                  label="Email"
                  inputRef={emailRef}
                  placeholder="Enter your Mail"
                  multiline
                  variant="filled"
                />
              </div>
              <div className="signup_email">
                <TextField
                  fullWidth
                  autoComplete="off"
                  required
                  type="password"
                  id="outlined-password-input"
                  label="Password"
                  inputRef={passwordRef}
                  variant="filled"
                />
              </div>
              <Button
                style={{ height: "40px", width: "50%", margin: "10px auto" }}
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </div>
          </form>
          <div className="no_account_div_signin">
            <Button
              style={{ height: "40px", width: "70%", margin: "10px auto" }}
              onClick={GoogleAuth}
              variant="outlined"
              color="primary"
            >
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </Button>
            <label className="no_account">
              Don't have account ?{" "}
              <Link
                to="/signup"
                style={{
                  "list-style-type": "none",
                  "text-decoration": "none",
                  padding: "5px",
                }}
              >
                Sign Up
              </Link>
            </label>
            <label className="forget_password">
              <Link
                to="/forgotpassword"
                style={{
                  margin: "20px",
                  "list-style-type": "none",
                  "text-decoration": "none",
                  border: "1px solid blue",
                  padding: "5px",
                }}
              >
                forget password
              </Link>
            </label>
          </div>
        </Container>
      </div>
    </div>
  );
}
