import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage, AboutPage, NavBar } from "./";
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
    return (
        <UserProvider>
            <h1>Main App</h1>
            <NavBar></NavBar>
            {/* <Link to="/">Home</Link>
            <Link to="/login">Login</Link> 
            <Link to="/about">About</Link> */}
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />


                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
        </UserProvider>
    )
}
