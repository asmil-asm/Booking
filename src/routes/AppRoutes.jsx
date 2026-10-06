import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy} from "react";
import Loading from "../Component/Loading/Laoding";
const Layout=lazy (()=>import('../Layout/Layout'))
const Home=lazy(()=>import("../pages/Home/Home"))  
const  About=lazy(()=>import('../pages/About/About')) 
const Contact =lazy(()=>import('../pages/Contact/Contact')) ;
const Hotels=lazy (()=>import ( "../pages/Hotels/Hotels")) ;
const Error=lazy(()=>import('../pages/Error/Error')) ;
const HotelData =lazy(()=>import('../pages/HotelData/HotelData')) ;
const Booking=lazy(()=>import('../pages/Booking/Booking'))
import ProtectedRoute from "./ProtectedRoute";
const router=createBrowserRouter([
{path:'/',element:<Loading><Layout/></Loading>,
    errorElement:<Error/>,
    
    children:[
        {index:true, element:<Home/>},
        {path:'about-us', element:<About/>},
        {path:'contact-us', element:<Contact/>},
        {path:'hotels', element:<Hotels/>},
        {path:'hotel/:id', element:<HotelData/>},
        {path:'booking-room/:id',element:<ProtectedRoute><Booking/></ProtectedRoute>}
    ]
}   
   
])

const AppRoutes=()=><RouterProvider router={router}/>
export default AppRoutes