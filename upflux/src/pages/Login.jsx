import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../services/firebase";

function Login() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const checkUsernameExists = async (usernameToCheck) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", usernameToCheck));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      setError("");

      if (!name.trim()) {
        throw new Error("Name is required for sign up.");
      }

      const trimmedUsername = username.trim();
      if (trimmedUsername.length < 3) {
        throw new Error("Username must be at least 3 characters long.");
      }

      const usernameExists = await checkUsernameExists(trimmedUsername);
      if (usernameExists) {
        throw new Error("Username already exists. Please try a different name.");
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username: trimmedUsername,
        name: name.trim(),
        email: email.trim(),
        createdAt: new Date(),
      });

      navigate("/academic-setup");
    } catch (err) {
      setError(err.message || "Unable to create account.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/academic-setup");
    } catch (err) {
      setError(err.message || "Unable to sign in.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleView = () => {
    setIsLoginView((prev) => !prev);
    setError("");
    setEmail("");
    setPassword("");
    setName("");
    setUsername("");
  };

  const eyeIcon = showPassword ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    background: "var(--bg-app)",
  };

  const cardStyle = {
    background: "var(--bg-glass)",
    padding: "40px",
    borderRadius: "24px",
    border: "1px solid var(--border-light)",
    boxShadow: "var(--shadow-lg)",
    maxWidth: "420px",
    width: "100%",
    backdropFilter: "blur(24px)",
    transition: "var(--transition)",
  };

  const inputContainerStyle = {
    position: "relative",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    paddingRight: "45px",
    borderRadius: "12px",
    border: "1px solid var(--border-light)",
    background: "var(--bg-primary)",
    color: "var(--text-primary)",
    boxSizing: "border-box",
    outline: "none",
    transition: "var(--transition-fast)",
    fontSize: "15px",
  };

  const toggleBtnStyle = {
    position: "absolute",
    right: "12px",
    top: "14px",
    background: "transparent",
    border: "none",
    color: "var(--text-secondary)",
    cursor: "pointer",
    padding: 0,
    outline: "none",
  };

  const submitButtonStyle = {
    width: "100%",
    background: "var(--brand-primary)",
    color: "white",
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    cursor: isLoading ? "not-allowed" : "pointer",
    fontSize: "16px",
    fontWeight: "700",
    transition: "all 0.2s",
    boxShadow: "var(--shadow-md)",
    marginBottom: "24px",
    opacity: isLoading ? 0.7 : 1,
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} className="page-transition">
        <Link
          to="/"
          style={{ display: "inline-block", marginBottom: "24px", textDecoration: "none", color: "var(--text-secondary)", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }}
          onMouseOver={(e) => { e.target.style.color = "var(--text-primary)"; }}
          onMouseOut={(e) => { e.target.style.color = "var(--text-secondary)"; }}
        >
          ← Back to Home
        </Link>

        {isLoginView ? (
          <div>
            <h1 style={{ color: "var(--text-primary)", fontWeight: 800, marginBottom: "8px", textAlign: "center" }}>Welcome Back</h1>
            <p style={{ color: "var(--text-secondary)", textAlign: "center", marginBottom: "24px", fontSize: "14px" }}>Log in with your email to continue to Learnova.</p>
          </div>
        ) : (
          <div>
            <h1 style={{ color: "var(--text-primary)", fontWeight: 800, marginBottom: "8px", textAlign: "center" }}>Create Account</h1>
            <p style={{ color: "var(--text-secondary)", textAlign: "center", marginBottom: "24px", fontSize: "14px" }}>Sign up with your email to get started with Learnova.</p>
          </div>
        )}

        {error && <div style={{ color: "#ef4444", backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)", padding: "12px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px", textAlign: "center" }}>{error}</div>}

        <form onSubmit={isLoginView ? handleLogin : handleSignup}>
          {!isLoginView && (
            <>
              <div style={{ textAlign: "left", marginBottom: "8px" }}>
                <label style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 600, marginLeft: "4px" }}>Full Name</label>
              </div>
              <div style={inputContainerStyle}>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ ...inputStyle, paddingRight: "14px" }}
                  required={!isLoginView}
                />
              </div>

              <div style={{ textAlign: "left", marginBottom: "8px" }}>
                <label style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 600, marginLeft: "4px" }}>Username</label>
              </div>
              <div style={inputContainerStyle}>
                <input
                  type="text"
                  placeholder="learnova_user"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ ...inputStyle, paddingRight: "14px" }}
                  required={!isLoginView}
                />
              </div>
            </>
          )}

          <div style={{ textAlign: "left", marginBottom: "8px" }}>
            <label style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 600, marginLeft: "4px" }}>Email Address</label>
          </div>
          <div style={inputContainerStyle}>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ ...inputStyle, paddingRight: "14px" }}
              required
            />
          </div>

          <div style={{ textAlign: "left", marginBottom: "8px" }}>
            <label style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 600, marginLeft: "4px" }}>Password</label>
          </div>
          <div style={inputContainerStyle}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={toggleBtnStyle}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {eyeIcon}
            </button>
          </div>

          <button type="submit" style={submitButtonStyle} disabled={isLoading}>
            {isLoading ? "Processing..." : isLoginView ? "Login" : "Sign Up"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "16px", borderTop: "1px solid var(--border-light)", paddingTop: "24px" }}>
          <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
            {isLoginView ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button
            onClick={toggleView}
            type="button"
            style={{
              background: "none",
              border: "none",
              color: "var(--brand-accent)",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "14px",
              padding: 0,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            {isLoginView ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
