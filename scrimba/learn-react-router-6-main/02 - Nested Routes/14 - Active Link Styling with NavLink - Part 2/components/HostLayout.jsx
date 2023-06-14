import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
/**
 * Challenge - part 2:
 * Make the host navbar indicate the currently-active route.
 * 
 * Use the following CSS rules:
 *      font-weight: bold;
 *      text-decoration: underline;
 *      color: #161616;
 * 
 * I'd recommend using an inline style this time.
 * 
 * NOTE: There will be a small bug that we'll fix 
 * after you do the challenge.
 */

    const hostLayoutSelectStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink 
                    to="/host"
                    end
                    style={({isActive}) =>   isActive ? hostLayoutSelectStyle : null }
                >
                    Dashboard
                </NavLink>

                <NavLink 
                    to="/host/income"
                    style={({isActive}) =>  isActive ? hostLayoutSelectStyle : null }
                    >
                    Income
                </NavLink>

                <NavLink 
                    to="/host/reviews"
                    style={({isActive}) =>  isActive ? hostLayoutSelectStyle : null }
                >
                    Reviews
                </NavLink>

            </nav>
            <Outlet />
        </>
    )
}