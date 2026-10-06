import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy} from "react";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// Lazy loading 
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import('../pages/About/About'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Hotels = lazy(() => import("../pages/Hotels/Hotels"));
const HotelData = lazy(() => import('../pages/HotelData/HotelData'));
const Booking = lazy(() => import('../pages/Booking/Booking'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <About /> },
      { path: 'contact-us', element: <Contact /> },
      { path: 'hotels', element: <Hotels /> },
      { path: 'hotel/:id', element: <HotelData /> },
      { 
        path: 'booking-room/:id', 
        element: <ProtectedRoute><Booking /></ProtectedRoute> 
      }
    ]
  }
]);

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;