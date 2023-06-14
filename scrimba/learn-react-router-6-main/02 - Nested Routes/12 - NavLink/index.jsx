import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

function Layout() {

  const myStyle = {
    fontWeight: "bold",
    color: "red",
    textDecoration: "underline"
  }

  return (
    <div>
      <h3>Welcome to my page!</h3>
      <nav>
        <NavLink 
                to="/"
                className={(obj) => obj.isActive ? "myLink" : null}
        >
                    Home
        </NavLink>

        <NavLink 
                to="/about"
                className={(obj) => obj.isActive ? "myLink" : ""}
        >
                    About
        </NavLink>

        <NavLink 
                to="/contact"
                // className={({isActive}) => isActive ? "myLink" : null}
                style={({isActive}) => isActive ? myStyle : null}
        >
                    Contact
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
};

function HomePage() {
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <h2>About Me</h2>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <h2>Contact</h2>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)