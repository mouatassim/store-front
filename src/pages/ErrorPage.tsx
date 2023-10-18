import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>{isRouteErrorResponse(error) ? "404" : "Oops"}</h1>
                <h2>
                    {isRouteErrorResponse(error)
                        ? "Page not found."
                        : "un unexpected error occurred."}
                </h2>
                
            </div>
        </>
    );
};

export default ErrorPage;
