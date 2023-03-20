import * as React from 'react';

import { Text, Box } from '@chakra-ui/react'
import { GridItem, Grid, Flex, Heading } from '@chakra-ui/layout';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Outlet } from 'react-router';



function Horario(){



    return(
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
    )
}

export default Horario