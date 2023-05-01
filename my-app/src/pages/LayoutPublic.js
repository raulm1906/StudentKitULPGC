import { Outlet } from "react-router-dom";
import Header from "./cabecera";
import Footer from "../components/Footer";
import { Grid, GridItem } from '@chakra-ui/react'

const LayoutPublic = () =>{
    return(
    <>
        <Grid
                h="100vh"
                templateRows="auto auto 1fr auto"
                templateColumns="repeat(3, 1fr)"
                gap={4}
            >
                <GridItem gridRow={1} colSpan={3}>
                    <Header />
                </GridItem>
                <Outlet/>
                <GridItem gridRow={4} colSpan={3}>
                    <Footer />
                </GridItem>
            </Grid>

    </>
    )
}
export default LayoutPublic;
