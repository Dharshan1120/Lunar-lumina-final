import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

function Navbar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const buttonStyle = {
    backgroundColor: '#4a4a4a',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 'bold'
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
      {user ? (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Link to="/dashboard" style={buttonStyle}>Dashboard</Link>
          <Link to="/quiz" style={buttonStyle}>Take Quiz</Link>
          <Link to="/history" style={buttonStyle}>History</Link>
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
        </div>
      ) : (
        null
      )}
    </nav>
  );
}

export default Navbar;
