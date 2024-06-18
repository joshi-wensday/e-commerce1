import { Outlet } from "react-router-dom";

import NavBar from "../../components/nav-bar/nav-bar.component.jsx";
import './navigation.styles.scss';
import { Fragment } from "react";

const Navigation = () => {
    return (
        <Fragment>
            <NavBar />
            <div >
                <Outlet />
            </div>
        </Fragment>
    );
};

export default Navigation;