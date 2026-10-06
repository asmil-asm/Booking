import { Suspense } from "react";
import { SiHiltonhotelsandresorts } from "react-icons/si";
import './Loading.css';

function LoadingComponent() {
  return (
    <div className="page-loader">
      <div className="page-loader-content">
        <div className="page-loader-spinner">
          <span className="page-loader-ring"></span>
          <span className="page-loader-ring-second"></span>
          
          <SiHiltonhotelsandresorts className="page-loader-icon" />
        </div>

        <div className="page-loader-brand">
          <h1 className="page-loader-title">HotelLify</h1>
        </div>
      </div>
    </div>
  );
}

function Loading({ children }) {
  return (
    <Suspense fallback={<LoadingComponent />}>
      {children}
    </Suspense>
  );
}

export default Loading;