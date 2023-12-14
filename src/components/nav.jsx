import Login from "./login";
import Register from "./signup";
import '../assets/styles/nav.css'
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Success from "./sucess";

function Home()
{
    return(
        <div style={{
            backgroundColor:'lightblue'
        }}>
            
        </div>
    )
}
function Navbar()
{
    return (
        <Router>

            <nav>
                <ul>
                    <li className='active'><Link to='/' className='link'>HOME</Link></li>
                    <li ><Link to='/login' className='link'>LOGIN</Link></li>
                    <li ><Link to='/register'className='link'>REGISTER</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/sucess' element={<Success/>} />
                <Route exact path='/Register' element={<Register/>} />
            <Route exact path='/Login' element={<Login/>} />
            </Routes>
        </Router>
    )
}
export default Navbar;