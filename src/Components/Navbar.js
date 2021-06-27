import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="container-sm">
       <nav className="navbar d-flex justify-content-center fw-bolder">
           <div className="links">
               <Link to="/">Home</Link><br/>
               <Link to="/postquotes">Add-Quotes</Link>
           </div>
       </nav>
       </div>
    );
}
 
export default Navbar;