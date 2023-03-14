import { Outlet } from "react-router-dom";
import Header from "../pages/cabecera";
import Footer from "./Footer";

const LayaoutPublic = () =>{
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
export default LayaoutPublic;