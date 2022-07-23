import { Box } from "@chakra-ui/react";
import FooterBottom from "./FooterBottom";
import FooterCategory from "./FooterCategory";
import FooterTop from "./FooterTop";

export default function Footer() {
    return (
        <Box>
            <FooterTop />
            <FooterCategory/>
            <FooterBottom />
            


        </Box>
    )
}