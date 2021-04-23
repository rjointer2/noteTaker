
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav>
            <Link to="/">Home</Link >
            <Link to="/create">New Note</Link >
        </nav>
    )

}

export default Navbar;