import { useRouteError, Link}from "react-router-dom";
import './style.css'
const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className="errorPage">
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
            <Link to="/">Volver al Home</Link>
        </div>
    )
}

export default NotFound;