import { Box, Flex, Grid, GridItem, Img, Text, Button, Select, Spacer, Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import Sizediv from "./Sizediv"
import { faMousePointer } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"
import Pagination from "./Pagination"
import Filter from "./Filter"
import handlePost from "./Post"
import Discount from "./DiscountButton"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function Products() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("")
    const [price, setPrice] = useState(null)
    const [size, setSize] = useState(null)
    const [color, setColor] = useState(null)
    const [material, setMaterial] = useState(null)
    const [type, setType] = useState(null)
    const [brand, setBrand] = useState(null)

    const handlePageNext = () => {
        console.log("vinod")
        setPage(page + 1)
    }
    const handlePagePrev = () => {
        setPage((prev) => prev - 1)
    }

    const handleFilter = (e) => {
        console.log(e.target.value)
    }
    const filterData = () => {
        axios.get(`https://calm-harbor-19932.herokuapp.com/women?_page=${page}&_limit=20&${!color ? "" : "color=" + color}&${!size ? "" : "size=" + size}&${!material ? "" : "material=" + material}&${!brand ? "" : "brand=" + brand}&${!type ? "" : "type=" + type}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }

    const handleColor = (e) => {
        setColor(e.target.value)
    }
    const handleType = (e) => {
        setType(e.target.value)
    }
    const handleSize = (e) => {
        setSize(e.target.value)
    }
    const handleMaterial = (e) => {
        setMaterial(e.target.value)
    }
    const handleBrand = (e) => {
        setBrand(e.target.value)
    }


    const mousehover = () => {



    }

    useEffect(() => {

        filterData()

    }, [page, color, size, type, material, brand])

    return (
        <Box>
            <Navbar/>
            <Box w="95%" m="auto" mt="10px">
                <Heading mb="20px" textAlign="start">Women Wear</Heading>
                <hr style={{ borderColor: '#f7f8f7', marginTop: "10px", marginBottom: "25px" }} />
            <Filter handleFilter={handleFilter} handleColor={handleColor}
                handleBrand={handleBrand} handleSize={handleSize} handleMaterial={handleMaterial}
                handleType={handleType}
            />
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
            <Pagination handlePagePrev={handlePagePrev} handlePageNext={handlePageNext} current={page} />
            <hr style={{ borderColor: '#f7f8f7', marginTop: "10px", marginBottom: "25px" }} />
            <Grid templateColumns='repeat(4, 1fr)' gap={6} w="95%" m="auto" textAlign="left">
                {data.map((item) => (
                    <div value={item.id} name={item.id} key={item.id} onMouseOver={() => mousehover()}
                    >
                        <Box position="relative">
                            <Img w="100%" h="400px" src={item.imgUrl} />
                            <Discount children={Math.floor(((item.strikePrice - item.price) * 100) / item.price) } />
                        </Box>

                        <Flex gap="1rem">
                            <Text>₹ {item.price}</Text>
                            <strike> ₹-{item.strikePrice}</strike>
                        </Flex>
                        <Text>{item.name}</Text>
                        <Sizediv />


                        <Box mt="10px" display="block"

                        >
                            <Flex>
                                <Img w="35px" h="35px" src={item.imgUrl} />
                                <Text ml="10px">{item.color}</Text>
                                <Spacer />
                                <Select w="30%" placeholder='Size' >

                                    <option value='option1'>X</option>
                                    <option value='option2'>XL</option>
                                    <option value='option3'>MD</option>

                                </Select>

                            </Flex><Box m="auto" textAlign="center">
                                <Button onClick={() => handlePost(item)} color="white" mt="20px" w="100%" p="5px" bg='#faa619'>ADD TO BASKET</Button>
                                
                            </Box>

                        </Box>
                    </div>


                ))}
            </Grid>
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
            <Pagination handlePagePrev={handlePagePrev} handlePageNext={handlePageNext}

                current={page} />
                <hr style={{ borderColor: '#f7f8f7', marginTop: "10px", marginBottom: "25px" }} />
                <Footer />
            </Box>
            
        </Box>

    )
}