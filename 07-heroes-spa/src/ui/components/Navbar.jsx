import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';
import { useContext } from 'react';


export const Navbar = () => {
    const {user,logout}=useContext(AuthContext)
    const natigate=useNavigate()
    const onLogout = () => {
        // console.log('logout')
        logout();
        natigate('/login', {replace: true}) //replace: true para que no se pueda volver atras
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>{user?.name}</span>
                    <button className= "nav-item nav-link btn" onClick={onLogout}>Logout</button>
                </ul>
            </div>
        </nav>
    )
}