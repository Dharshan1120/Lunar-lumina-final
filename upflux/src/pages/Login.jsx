import { useState, useEffect, useRef } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, db } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential
} from "firebase/auth";
import { collection, query, where, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isUsernameStep, setIsUsernameStep] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Store the UID temporarily if they need to set a username
  const [tempUser, setTempUser] = useState(null);

  const navigate = useNavigate();
  const googleButtonRef = useRef(null);
  const googleInitializedRef = useRef(false);

  // Check if username already exists
  const checkUsernameExists = async (usernameToCheck) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", usernameToCheck));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleGoogleCredential = async (response) => {
    try {
      setIsLoading(true);
      setError("");

      const provider = new GoogleAuthProvider();
const userCredential = await signInWithPopup(auth, provider);
const user = userCredential.user;

      // Check if user exists in db
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        // New user from Google, need username
        setTempUser({ uid: user.uid, email: user.email, name: user.displayName || "" });
        setIsUsernameStep(true);
      } else {
        // Existing user
        alert("Login successful!");
        navigate("/academic-setup");
      }
    } catch (err) {
      setError("Google Sign-In Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initialize Google Auth only once when standard views are shown
    if (!isUsernameStep && window.google && !googleInitializedRef.current) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID || "482704760925-2ip464ckt2muhbi6kb0v9mvcf9c1t05j.apps.googleusercontent.com",  // Replace with actual Client ID from Google Cloud Console
        callback: handleGoogleCredential
      });
      googleInitializedRef.current = true;
    }

    if (googleButtonRef.current && googleInitializedRef.current) {
      window.google.accounts.id.renderButton(
        googleButtonRef.current,
        { theme: "outline", size: "large", text: isLoginView ? "signin_with" : "signup_with" }
      );
    }
  }, [isLoginView, isUsernameStep]);

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
        name: name,
        email: email,
        createdAt: new Date()
      });

      alert("Signup successful!");
      navigate("/academic-setup");
    } catch (err) {
      setError(err.message);
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

      alert("Login successful!");
      navigate("/academic-setup");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveUsername = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      setError("");

      const trimmedUsername = username.trim();
      if (trimmedUsername.length < 3) {
        throw new Error("Username must be at least 3 characters long.");
      }

      const usernameExists = await checkUsernameExists(trimmedUsername);
      if (usernameExists) {
        throw new Error("Username already exists. Please try a different name.");
      }

      await setDoc(doc(db, "users", tempUser.uid), {
        username: trimmedUsername,
        name: tempUser.name,
        email: tempUser.email,
        createdAt: new Date()
      });

      alert("Signup successful!");
      navigate("/academic-setup");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setError("");
    setEmail("");
    setPassword("");
    setName("");
    setUsername("");
  };

  const eyeIcon = (showPassword ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ));

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    background: 'var(--bg-app)'
  };

  const cardStyle = {
    background: 'var(--bg-glass)',
    padding: '40px',
    borderRadius: '24px',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-lg)',
    maxWidth: '420px',
    width: '100%',
    backdropFilter: 'blur(24px)',
    transition: 'var(--transition)'
  };

  const inputContainerStyle = {
    position: 'relative',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '14px',
    paddingRight: '45px',
    borderRadius: '12px',
    border: '1px solid var(--border-light)',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'var(--transition-fast)',
    fontSize: '15px'
  };

  const toggleBtnStyle = {
    position: 'absolute',
    right: '12px',
    top: '14px',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    padding: 0,
    outline: 'none'
  };

  const submitButtonStyle = {
    width: '100%',
    background: 'var(--brand-primary)',
    color: 'white',
    padding: '14px',
    border: 'none',
    borderRadius: '12px',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    transition: 'all 0.2s',
    boxShadow: 'var(--shadow-md)',
    marginBottom: '24px',
    opacity: isLoading ? 0.7 : 1
  };

  // 1) Username Step View (Only for Google setup)
  if (isUsernameStep) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle} className="page-transition">
          <h1 style={{ color: 'var(--text-primary)', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>Choose Username</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '24px', fontSize: '14px' }}>
            Almost there! Pick a unique username for your profile.
          </p>

          {error && <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}

          <form onSubmit={handleSaveUsername}>
            <div style={{ textAlign: 'left', marginBottom: '8px' }}>
              <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600, marginLeft: '4px' }}>Username</label>
            </div>
            <div style={inputContainerStyle}>
              <input
                type="text"
                placeholder="e.g. learnova_user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={inputStyle}
                required
              />
            </div>

            <button type="submit" style={submitButtonStyle} disabled={isLoading}>
              {isLoading ? "Saving..." : "Complete Setup"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2) Standard Login/Signup View
  return (
    <div style={containerStyle}>
      <div style={cardStyle} className="page-transition">
        <Link to="/" style={{ display: 'inline-block', marginBottom: '24px', textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
          ← Back to Home
        </Link>

        {isLoginView ? (
          <div>
            <h1 style={{ color: 'var(--text-primary)', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>Welcome Back</h1>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '24px', fontSize: '14px' }}>Log in to continue to Learnova.</p>
          </div>
        ) : (
          <div>
            <h1 style={{ color: 'var(--text-primary)', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>Create Account</h1>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '24px', fontSize: '14px' }}>Sign up to get started with Learnova.</p>
          </div>
        )}

        {error && <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={isLoginView ? handleLogin : handleSignup}>

          {!isLoginView && (
            <>
              <div style={{ textAlign: 'left', marginBottom: '8px' }}>
                <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600, marginLeft: '4px' }}>Full Name</label>
              </div>
              <div style={inputContainerStyle}>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  required={!isLoginView}
                />
              </div>

              <div style={{ textAlign: 'left', marginBottom: '8px' }}>
                <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600, marginLeft: '4px' }}>Username</label>
              </div>
              <div style={inputContainerStyle}>
                <input
                  type="text"
                  placeholder="learnova_user"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={inputStyle}
                  required={!isLoginView}
                />
              </div>
            </>
          )}

          <div style={{ textAlign: 'left', marginBottom: '8px' }}>
            <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600, marginLeft: '4px' }}>Email Address</label>
          </div>
          <div style={inputContainerStyle}>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={{ textAlign: 'left', marginBottom: '8px' }}>
            <label style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 600, marginLeft: '4px' }}>Password</label>
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
            {isLoading ? "Processing..." : (isLoginView ? "Login" : "Sign Up")}
          </button>
        </form>

        {!isLoginView && (
          <>
            <div style={{ position: 'relative', textAlign: 'center', margin: '24px 0' }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border-light)', zIndex: 0 }}></div>
              <span style={{ position: 'relative', background: 'var(--bg-glass)', padding: '0 12px', color: 'var(--text-muted)', fontSize: '12px', zIndex: 1 }}>
                OR CONTINUE WITH
              </span>
            </div>

            {/* Google Auth Container for Signup */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div ref={googleButtonRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}></div>
            </div>
          </>
        )}

        {isLoginView && (
          <>
            <div style={{ position: 'relative', textAlign: 'center', margin: '24px 0' }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border-light)', zIndex: 0 }}></div>
              <span style={{ position: 'relative', background: 'var(--bg-glass)', padding: '0 12px', color: 'var(--text-muted)', fontSize: '12px', zIndex: 1 }}>
                OR CONTINUE WITH
              </span>
            </div>

            {/* Google Auth Container */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div ref={googleButtonRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}></div>
            </div>
          </>
        )}

        <div style={{ textAlign: 'center', marginTop: '16px', borderTop: '1px solid var(--border-light)', paddingTop: '24px' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            {isLoginView ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button
            onClick={toggleView}
            type="button"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--brand-accent)',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '14px',
              padding: 0,
              textDecoration: 'underline',
              textUnderlineOffset: '4px'
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