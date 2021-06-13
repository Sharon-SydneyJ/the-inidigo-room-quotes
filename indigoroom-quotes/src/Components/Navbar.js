import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <nav className="navbar">
           <h1>Imagination Quotes and I AM Statements</h1>
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/postquotes">Add-Quotes</Link>
           </div>
       </nav>
    );
}
 
export default Navbar;