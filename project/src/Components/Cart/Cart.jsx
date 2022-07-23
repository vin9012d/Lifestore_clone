
import { border, Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import "./Cart.css"
import {ExternalLinkIcon} from "@chakra-ui/icons"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function Cart() {
    const [cart, setCart] = useState([])
    const [totals,setTotals]=useState([])
    useEffect(() => {
        axios.get(`https://calm-harbor-19932.herokuapp.com/cart`)
            .then((res) => {
                TotalData(res.data)
                setCart(res.data)
                
       }) 
    }, [])

    const TotalData = (data) => {
        let arr=[]
        const mrp = data.reduce(
            (previousValue, currentValue)=>previousValue+Number(currentValue.strikePrice), 
            0);
      
        const discounts = data.reduce(
            (previousValue, currentValue)=>previousValue+Number(currentValue.strikePrice-currentValue.price), 
            0);
        const total = data.reduce(
            (previousValue, currentValue)=>previousValue+Number(currentValue.price), 
            0);
            arr.push(mrp,discounts,total)
        setTotals(arr)
    }
   
    return (
        <Box>
            <Navbar  />
        <Box w="95%" m="auto">
            <Heading textAlign="left">Your Shopping Basket</Heading>
            <hr style={{ borderColor: '#f7f8f7', marginTop: "10px", marginBottom: "10px", border:"" }} />
            
            <Flex justifyContent="space-between">
            <Box w="55%" >
                {cart.map((item) => (
                    <Box mt="20px" mb="20px" key={item.id+1} border="1px solid grey" p="20px" >
                   <Flex key={item.id}>
                        <Img w="180px" h="200px" src={item.imgUrl} />
                        <Box textAlign="left" ml="10px">
                            <Text mb="20px" >{item.name}</Text>
                            <span > <strike>₹{item.strikePrice} </strike> <span> ₹{item.price}</span>  <span style={{ color: "green" }}>₹{item.strikePrice - item.price} Saved</span></span>
                            <Text mt="20px">Colour: {item.color}</Text>
                            <Text mt="20px">Size: { item.size}</Text>
                        </Box>
                        </Flex> 
                   
                        <Flex justifyContent="space-between">
                       
                            <Button mt="5px"  variant='link' colorScheme="black" leftIcon={ <ExternalLinkIcon/>} >Delivery in7-9 days</Button>
                            <Button>Qty:1</Button>
                        </Flex>
                        <hr style={{ borderColor: '#f7f8f7', marginTop: "10px", marginBottom: "10px", border:"" }} />
                        <Box>
                            <Button colorScheme='orange' variant='link'>Remove</Button>
                        </Box>
                        </Box>     
                ))}
       </Box>
                <Box w="40%">
                    <Flex justifyContent="space-between" border="1px solid grey" p="20px" mt="20px">
                        <Text>Deliver to</Text>
                        <Text>396666</Text>
                        <Button colorScheme='orange' variant='link'>Change</Button>
                    </Flex>
                    <Flex justifyContent="space-between" border="1px solid grey" p="20px" mt="10px">
                        <Img src={`https://www.lifestylestores.com/static/icons/gift-box.png`} w="100px" h="50px" alt="offer photo" />
                        <Text>Offers for you!!!</Text>
                    </Flex>
                    <Box className="total" border="1px solid grey" p="20px" mt="10px">
                        <Flex justifyContent="space-between" mt="5px" >
                            <Text>Total MRP</Text>
                            <Text>{ totals[0]}</Text>
                        </Flex>
                        <Flex justifyContent="space-between" mt="5px" >
                            <Text>Offer discount</Text>
                            <Text color="green.500">₹{ totals[1]}</Text>
                        </Flex>
                        <Flex justifyContent="space-between" mt="5px" >
                            <Text>Shipping Charge</Text>
                            <Text>Free</Text>
                    </Flex>
                    <hr style={{ borderColor: '#f7f8f7', marginTop: "10px", marginBottom: "25px", border:"" }} />
                        <Flex justifyContent="space-between" mt="5px" >
                            <Text>Total</Text>
                            <Text>{ totals[2]}</Text>
                        </Flex>
                        <Button w="100%" colorScheme="orange" mt="20px"> Checkout Now</Button>

                    </Box>
                    
                  </Box>
                
            
                </Flex>
                <Footer/>
            </Box>
            </Box>
        )
}