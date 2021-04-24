
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav>
            <Link to="/" className="links">Home</Link >
            <Link to="/create" className="links">New Note</Link >
        </nav>
    )

}

export default Navbar;