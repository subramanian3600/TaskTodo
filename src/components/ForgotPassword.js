import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
export default function ForgetPassword() {
  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox");
    } catch {
      setError("failed to reset password");
    }
    setLoading(false);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", "flex-direction": "column" }}
      >
        <label
          style={{
            "font-size": "20px",
            "font-weight": "600px",
            "text-align": "center",
            "padding": "10px",
            "border": "2px solid blue",
            "margin": "10px",
            "background-color": "blue",
            "color": "white",
          }}
        >
          Reset password
        </label>
        
        {error && <p>{error}</p>}
        {message &&<p>{message}</p>}
        <input
          style={{ margin: "10px" }}
          required
          type="email"
          ref={emailRef}
          id="outlined-required"
          label="Email"
          variant="outlined"
        />
        <button
          style={{ margin: "20px auto", width: "60%" }}
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
        >
          send Reset email
        </button>
        <button style={{ margin: "20px auto", width: "60%" }}>
          <Link to="/signin">Cancel</Link>
        </button>
      </form>
    </div>
  );
}
