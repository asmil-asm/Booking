import { Outlet,ScrollRestoration } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import PageLoader from "../Component/PageLoader/PageLoader";
import { Suspense } from "react";
import Loading from "../Component/Loading/Loading";
const Layout=()=>{
    return(
        <div className="layout min-h-screen ">
            <Header />
            <PageLoader/>
            <main className=" min-h-[60vh]">
 <Suspense key={location.pathname} fallback={<Loading />}>
          <Outlet />
        </Suspense>            </main>
            <ScrollRestoration />
            <Footer />
        </div>
    )
}
export default Layout