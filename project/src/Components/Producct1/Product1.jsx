import { Box } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AllAdd from "./AllAdd";
import BottomCategory from "./Bottomcategory";
import MiddleCategory from "./MiddleCategory";

export default function Product1() {
    return (
        <Box>
            <Navbar />
            <Box w="95%" m="auto">
            <AllAdd />
            <MiddleCategory />
            <BottomCategory />
            <Footer/>
            </Box>
        </Box>
    )
}