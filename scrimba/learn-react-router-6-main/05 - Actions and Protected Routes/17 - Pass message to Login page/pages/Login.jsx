import React from "react"
import { useNavigate, useLoaderData } from "react-router-dom"

/**
 * Challenge: Pass a message from the requireAuth function
 * that says "You must log in first." and display that message
 * in an <h2> BELOW the <h1>. Give it a classname of "red" for
 * some quick styling - (I added the CSS already).
 */
export function loader({ request }) {
    // const loginMsg = useLoaderData()
    // const msg = new URL(request)
    // console.log(request)
    return new URL(request.url).searchParams.get("msg")
}


export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const loginMsg = useLoaderData()
    console.log(loginMsg)


    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {loginMsg && <h2 className="red">{loginMsg}</h2>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}