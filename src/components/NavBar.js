import { NavLink } from "react-router-dom"

function NavBar(){

    return(
        <div>
            <ul>
            <li ><NavLink to='/' exact> Home </NavLink></li>
            <li ><NavLink to='/Menus' exact> Menus </NavLink></li>
            <li ><NavLink to='/Contact' exact> Contact </NavLink></li>
            </ul>

        </div>

    )
}

export default NavBar