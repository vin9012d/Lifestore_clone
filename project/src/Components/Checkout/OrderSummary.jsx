import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderSummary() {
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
            <Text p="10px" mb="5px" border="1px solid black">Your order summary</Text>
            <hr style={{ borderColor: '#f7f8f7' }} />
  <Box >
                {cart.map((item) => (
                    <Box  key={item.id+1} border="1px solid grey" p="20px" >
                   <Flex key={item.id}>
                        <Img w="70px" h="90px" src={item.imgUrl} />
                        <Box textAlign="left" ml="10px">
                            <Text mb="7px" >{item.name}</Text>
                            <span > <strike>₹{item.strikePrice} </strike> <span> ₹{item.price}</span>  <span style={{ color: "green" }}>₹{item.strikePrice - item.price} Saved</span></span>
                            
                        </Box>
                        </Flex> 
                   
                        <Flex justifyContent="space-between">
                       
                            <Button mt="5px"  variant='link' colorScheme="black"> Delivery in7-9 days</Button>
                            <Button>Qty:1</Button>
                        </Flex>
                       
                        </Box>     
                ))}
            </Box>
            <Box className="total" border="1px solid grey" p="20px" mt="10px">
                        <Flex justifyContent="space-between" mt="5px" >
                            <Text>Total MRP</Text>
                            <Text>₹{ totals[0]}</Text>
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
                            <Text as='b'>Total</Text>
                            <Text as="b">₹{ totals[2]}</Text>
                        </Flex>
                       

                    </Box>
        </Box>
    )
}