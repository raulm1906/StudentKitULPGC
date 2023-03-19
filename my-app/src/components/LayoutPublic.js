import { Outlet } from "react-router-dom";
import Header from "../pages/cabecera";
import Footer from "./Footer";

const LayaoutPublic = () =>{
    return(
        <>
        <header>
        <Header />
        </header>
        <body>
        <Outlet />
        </body>
        <Footer />
        </>
    )
}
export default LayaoutPublic;