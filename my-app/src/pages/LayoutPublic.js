import { Outlet } from "react-router-dom";
import Header from "./cabecera";
import Footer from "../components/Footer";

const LayoutPublic = () =>{
    return(
    <>
        <Header />
        <Outlet/>
        <Footer />

    </>
    )
}
export default LayoutPublic;
