import Navigator from "../components/Navigator/Navigator";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navigator />
            <Outlet />
        </>
    )
}

export default Layout