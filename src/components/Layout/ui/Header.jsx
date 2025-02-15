import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div className="header">  
        <h4>WorldAtlas</h4>
        <nav className="routes">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/country">Country</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>

        </div>
    )
}