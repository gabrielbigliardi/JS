import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
    /**
     * Challenge - part 1:
     * Make the main navbar indicate the currently-active route. (You can
     * leave the home link alone, since it's doubling as our logo. Only
     * make changes to the /host, /about, and /vans links)
     * 
     * Use the following CSS rules:
     *      font-weight: bold;
     *      text-decoration: underline;
     *      color: #161616;
     * 
     * You can use either inline styles or a className.
     */

    const headerSelectStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink to="/host"
                        style={ ({isActive}) => isActive ? headerSelectStyle : null }
                        
                        >
                    Host
                </NavLink>

                <NavLink to="/about"
                    style={ ({isActive}) => isActive ? headerSelectStyle : null }
                    >
                    About
                </NavLink>

                <NavLink to="/vans"
                    style={ ({isActive}) => isActive ? headerSelectStyle : null }
                >
                    Vans
                </NavLink>

            </nav>
        </header>
    )
}