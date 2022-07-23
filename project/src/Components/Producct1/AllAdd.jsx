import { Box, Img } from "@chakra-ui/react"
import slider2 from "./Medias/slider2.gif"
import slider3 from "./Medias/slider3.jpg"
import slider3a from "./Medias/slider3a.jpg"
import slider4 from "./Medias/slider4.jpg"

export default function AllAdd(){
    return (
        <Box>
            <Img src={slider2} alt="slider2" />
            <Img src={slider3} alt="slider3" />
            <Img src={slider3a} alt="slider3a" />
            <Img src={slider4} alt="slider4" />

        </Box>
    )
}