import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Use. Connex.</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: 'white', 
          backgroundColor: '#3a73f8',
          borderRadius: '8px' 
        }}>Your Network's Network</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;