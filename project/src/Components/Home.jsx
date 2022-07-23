import { Box } from "@chakra-ui/react";
import Category from "./Category/Category";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Home() {
    return (
        <Box>
            <Navbar />
            <Box w="95%" m="auto">
            <Category/>
          <Footer/>
          </Box>
        </Box>
    )
}