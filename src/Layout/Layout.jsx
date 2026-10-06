import { Outlet,ScrollRestoration } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import PageLoader from "../Component/PageLoader/PageLoader";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import DelayedLoading from "../Component/Loading/DelayedLoading";
const Layout=()=>{
     const location = useLocation();
    return(
        <div className="layout min-h-screen ">
            <Header />
            <PageLoader/>
            <main className=" min-h-[60vh]">
 <Suspense key={location.pathname} fallback={<DelayedLoading delay={300}/>} >
          <Outlet />
        </Suspense>            </main>
            <ScrollRestoration />
            <Footer />
        </div>
    )
}
export default Layout