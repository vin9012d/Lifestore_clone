import { Box, Img } from "@chakra-ui/react"
import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import slider2 from "./Medias/slider2.gif"
import slider3 from "./Medias/slider3.jpg"
import slider3a from "./Medias/slider3a.jpg"
import slider4 from "./Medias/slider4.jpg"

export default function AllAdd() {
    const [slider, setSlider] = useState([]);
    const [sldimg,setSldimg]=useState(0)


    useEffect(() => {
        axios.get(`https://calm-harbor-19932.herokuapp.com/slider`)
            .then((res) => {
              console.log(res.data)
                    setSlider(res.data)
        }).catch((err)=>{console.log(err)})
    }, [])
    useEffect(() => {
       let id= setInterval(() => {
            if (sldimg == 3) {
                setSldimg(0)
            }else setSldimg((sldimg)=>sldimg+1)
        },[3000])
        return () => {
            console.log("cleaner")
            clearInterval(id)
        }
    },[sldimg])
    

    return (
        <Box>
            <Link to="/women/products">            {slider.length > 0 ? <Img src={slider[sldimg].image} h="400px" w="100%%" alt="sliderimage" /> : <h1>Loading...</h1>}</Link>

            <Link to="/women/products">  <hr style={{ borderColor: '#f7f8f7', marginBottom: "40px", marginTop: "40px" }} /></Link>
            <Img w="100%" src={slider2} alt="slider2" />
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "40px", marginTop: "40px" }} />
            <Img w="100%" src={slider3} alt="slider3" />
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "40px", marginTop: "40px" }} />
            <Img w="100%" src={slider3a} alt="slider3a" />
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "40px", marginTop: "40px" }} />
            <Img w="100%" src={slider4} alt="slider4" />
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "40px", marginTop: "40px" }} />

        </Box>
    )
}