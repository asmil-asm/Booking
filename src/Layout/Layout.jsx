import { Outlet,ScrollRestoration } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import PageLoader from "../Component/PageLoader/PageLoader";
import { Suspense } from "react";
import Loading from "../Component/Loading/Laoding";
const Layout=()=>{
    return(
        <div className="layout">
            <Header />
            <PageLoader/>
            <Suspense fallback={<Loading/>}>
            <Outlet />
            </Suspense>
            <ScrollRestoration />
            <Footer />
        </div>
    )
}
export default Layout