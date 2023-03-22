import { Outlet } from "react-router-dom";
import Header from "./cabecera";
import Footer from "../components/Footer";

const LayaoutPublic = () =>{
    return(
        <>
        <header>
            <Header />
        </header>
        
        <body>
            <Outlet />
        </body>

        <footer>
            <Footer />
        </footer>
        </>
    )
}
export default LayaoutPublic;