import { Box, Img } from "@chakra-ui/react"
import axios from "axios"
import { useEffect,useState } from "react"
import slider2 from "./Medias/slider2.gif"
import slider3 from "./Medias/slider3.jpg"
import slider3a from "./Medias/slider3a.jpg"
import slider4 from "./Medias/slider4.jpg"

export default function AllAdd() {
    const [slider, setSlider] = useState([]);
    
    useEffect(() => {
        axios.get(`https://calm-harbor-19932.herokuapp.com/slider`)
            .then((res) => {
                if (slider.id == 3) {
                    slider.id=4
                }
                setInterval(() => {
                
                    setSlider((prev))

            },[2000])
        })
    },[slider])
    return (
        <Box>
            {slider.map((item) => (
                <Img/>
            ))}
            <Img src={slider2} alt="slider2" />
            <Img src={slider3} alt="slider3" />
            <Img src={slider3a} alt="slider3a" />
            <Img src={slider4} alt="slider4" />

        </Box>
    )
}