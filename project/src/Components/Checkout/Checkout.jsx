import { Alert, Box, Button, Flex, FormLabel, Heading, Img, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import creditcard from "./Media/creditcard.png"
import mastercard from "./Media/mastercard.png"
import visa from "./Media/visa.png"
import upi from "./Media/upi.png"
import paypal from "./Media/paypal.png"
import rupay from "./Media/rupay.png"
import wallet from "./Media/wallet.png"
import emi from "./Media/emi.webp"
import promo from "./Media/promo.webp"
import netbanking from "./Media/netbanking.webp"
import comodo from "./Media/comodo.png"
import logo from "../Medias/lifestyle-logo.png"
import OrderSummary from "./OrderSummary";

export default function Checkout() {
    return (
        <Box>
                  <Box >
                <hr style={{ borderColor: '#f7f8f7', border: "1px solid #f7f8f7", marginBottom: "10px", marginTop: "10px" }} />
                <Flex justifyContent="space-between" p="10px">
                    <Img src={ logo} alt="logo" w="100px" />
                <Box>
                <Text textAlign="end">call 1800-123-5555</Text>
                    <Text textAlign="end">Monday - Saturday, 09:00AM - 07:00PM</Text>
                    </Box> 
                    
                    </Flex>
            <hr style={{ borderColor: '#f7f8f7', border:"1px solid #f7f8f7" ,marginBottom: "10px", marginTop: "10px" }} />

            </Box>
        <Flex justifyContent="space-between" w="90%" m="auto">
            <Box w="55%" textAlign="left">
      
            <Heading>Add your shiping address</Heading>
            <form>
            <FormLabel mt="10px">Full Name</FormLabel>
          <Input type='email' placeholder="Enter Your Full Name" />
            <FormLabel mt="10px">Mobile Number</FormLabel>
          <Input type='email' placeholder="Enter Your Mobile Number" />
            <FormLabel mt="10px">Pincode</FormLabel>
          <Input type='email' placeholder="Enter Your Pincode" />
            <FormLabel mt="10px">City</FormLabel>
          <Input type='email' placeholder="Please Enter Your City" />
            <FormLabel mt="10px">Building name or number</FormLabel>
          <Input type='email' placeholder="Please Enter Your Building name or number" />
            <FormLabel mt="10px">Street name or number</FormLabel>
          <Input type='email' placeholder="Please Enter Your Street name or number" />
            <FormLabel mt="10px">Landmark(optional)</FormLabel>
                <Input type='email' placeholder="Enter Your Landmark" />
                <FormLabel mt="10px">Address Type(optional)</FormLabel>
                <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='orange' value='1'>
      Home
    </Radio>
    <Radio colorScheme='orange' value='2'>
      Office
    </Radio>
  </Stack>
</RadioGroup>
            </form>
            <Box >
                <Heading>Selec a payment method</Heading>
                <RadioGroup defaultValue='cash'>
                    <Stack spacing={7} direction='column'>
                        <Flex gap="30px" alignItems="center"> 
    <Radio colorScheme='orange' value='creditcard' >
    
                            </Radio>
                            <Img src={ creditcard} alt="creditcard" w="33px" h="29px" />
                            <Box>
                                <Text>Credit/Debit Card</Text>
                                <Text>Use your Credit or Debit card</Text>
                            </Box>
                           
                        </Flex>
                        <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
                        <Flex gap="30px" alignItems="center"> 
    <Radio colorScheme='orange' value='cash' >
    
                            </Radio>
                            <Img src={ wallet} alt="creditcard" w="33px" h="29px" />
                            <Box>
                                <Text>Cash on delivery</Text>
                                <Text>+ Rs49</Text>
                            </Box>
                           
                        </Flex>
                        <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
                        <Flex gap="30px" alignItems="center"> 
    <Radio colorScheme='orange' value='emi' >
    
                            </Radio>
                            <Img src={ emi} alt="creditcard" w="33px" h="29px" />
                            <Box>
                                <Text>EMI</Text>
                                <Text>Available on orders above Rs3,000</Text>
                            </Box>
                        </Flex>
                        <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
                        <Flex gap="30px" alignItems="center"> 
    <Radio colorScheme='orange' value='paypal' >
    
                            </Radio>
                            <Img src={ paypal} alt="creditcard" w="33px" h="29px" />
                            <Box>
                                <Text>Paypal</Text>
                                <Text>Pay now with your PayPal account</Text>
                            </Box>
                        </Flex>
                        <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
                        <Flex gap="30px" alignItems="center"> 
    <Radio colorScheme='orange' value='netbanking' >
    
                            </Radio>
                            <Img src={ netbanking} alt="creditcard" w="33px" h="29px" />
                            <Box>
                                <Text>Net Banking</Text>
                                <Text>Pay by your preferred bank account.</Text>
                            </Box>
                        </Flex>
                        <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
                        <Flex gap="30px" alignItems="center"> 
    <Radio colorScheme='orange' value='wallet' >
    
                            </Radio>
                            <Img src={ wallet} alt="creditcard" w="33px" h="29px" />
                            <Box>
                                <Text>Wallets</Text>
                                <Text>Pay by your preferred bank account.</Text>
                            </Box>
                        </Flex>
                        <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
                        <Flex gap="30px" alignItems="center"> 
    <Radio colorScheme='orange' value='upi' >
    
                            </Radio>
                            <Img src={ upi} alt="creditcard" w="33px" h="29px" />
                            <Box>
                                <Text>UPI</Text>
                                <Text>Pay with your preferred UPI Id.</Text>
                            </Box>
                        </Flex>
                        <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
  </Stack>
</RadioGroup>
            </Box>
            <Stack direction="row" spacing={4}>
                <Img src={promo} alt="creditcard" w="33px" h="29px" />
                <Text>Got a Promo code?</Text>
                <Text color="orange">Use it here</Text>
            </Stack>
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
            <Stack direction="row" spacing={4}>
                <Img src={promo} alt="creditcard" w="33px" h="29px" />
                <Text>Got a Gift card?</Text>
                <Text color="orange">Use it here</Text>
            </Stack>
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
            <Flex justifyContent="space-between" textAlign="center">
                <Text textAlign="left" w="55%">By clicking on Proceed to Payment, you agree to our Terms and Conditions</Text>
                        <Button onClick={() => alert("Your order placed successfully")
                           
    } colorScheme="orange" w="40%" p="20px">Place your Order</Button>

            </Flex>
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />
           
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "10px", marginTop: "10px" }} />  
            </Box>
            <Box w="35%">            <OrderSummary />  
            </Box>

            </Flex>
            <Flex mt="30px" w="65%" textAlign="left"> <Box mr="20px">
                <Img src={comodo} alt="comodologo" mr="20px" h="80px" />
                </Box>
                <Box>
                    <Text mb="10px">Your credit card details are securely encrypted and passed directly to our PCI DSS compliant Payment Gateway for processing. We only store your credit card's last 4 digits and the expiration date. Your traffic to this page is secured using either a 256-bit or 128-bit SSL certificate depending on your browser version.</Text>
                    <Text mb="10px">
                        © 2021 RNA Intellectual Property Limited.</Text>
                    <Text mb="10px">Privacy Policy - Terms of Use - Terms & Conditions</Text>
                    </Box>
            </Flex>
        </Box>
    )
}