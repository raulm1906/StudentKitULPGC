import { Outlet } from "react-router-dom";
import Header from "../pages/cabecera";

const LayaoutPublic = () =>{
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}
export default LayaoutPublic;