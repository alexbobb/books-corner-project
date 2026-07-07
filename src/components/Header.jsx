 import { Link } from "react-router-dom";

 function Header() {

    return (
        <nav>
        <h1>Books Corner</h1>
            <ul>
                 <Link to="/" > Overview </Link>
                 <Link to="/readinglist"> Reading List </Link>
                 <Link to="/readingstats"> Reading Stats </Link>
            </ul>
            </nav>
    )
 }

export default Header