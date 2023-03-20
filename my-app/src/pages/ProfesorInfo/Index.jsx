import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import ProfesorCard from "./ProfesorCard";
import SearchProfesorCard from "./SearchProfesorCard";
import { GridItem, Grid } from "@chakra-ui/react";

function index(){

    return(
        <>  <Grid
                h="100vh"
                templateRows="auto 1fr auto"
                templateColumns="repeat(3, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={1} colSpan={3}>
                    <Header />
                </GridItem>
                <GridItem rowSpan={2} colSpan={2}>
                    <ProfesorCard />
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                    <SearchProfesorCard/>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3}>
                    <Footer />
                </GridItem>
            </Grid>
        </>
    );
}

export default index