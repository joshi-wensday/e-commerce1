import { Outlet } from "react-router-dom";

import NavBar from "../nav-bar/nav-bar.component.jsx";
import './layout.styles.scss';

const Layout = () => {
    return (
        <div className="layout-container">
            <NavBar />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;