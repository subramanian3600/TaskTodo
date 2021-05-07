import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { TextField, Container, Button } from "@material-ui/core";
import "../styles/SignIn.css";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmpasswordRef.current.value) {
      return setError("password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setError("Account created sucessfully");
      history.push("/signin");
    } catch {
      setError("failed to create an account");
    }
    setLoading(false);
  }
  return (
    <div className="signup_page">
      <div className="container">
      <Container
        maxWidth="sm"
        style={{
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
            Sign Up
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
            <div className="signup_email">
              <TextField
                fullWidth
                autoComplete="off"
                required
                type="password"
                id="outlined-password-input"
                label="Confirm Password"
                inputRef={confirmpasswordRef}
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
              Sign Up
            </Button>
          </div>
        </form>
        <div className="no_account_div">
          <label className="no_account">
            Already have account ?{" "}
            <Link
              to="/signin"
              style={{
                "list-style-type": "none",
                "text-decoration": "none",
                padding: "5px",
              }}
            >
              Sign In
            </Link>
          </label>
        </div>
      </Container>
      </div>
    </div>
  );
}
