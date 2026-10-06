import { Outlet,ScrollRestoration } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const Layout=()=>{
    return(
        <div className="layout">
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </div>
    )
}
export default Layout