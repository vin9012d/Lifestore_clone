import { Box, Flex, Image, Img, Input, Stack, Text } from "@chakra-ui/react";
import {  Search2Icon } from '@chakra-ui/icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faTwitter   } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import img1 from  "../Medias/lifestyle-logo.png"
import Signin from "../Regestration/Sigin";

export default function Navbar() {
  
    return (
        <Box bg="#f7f8f7" h="60px"  w="100%" pl="20px"> 
            <Stack direction={{ base: "row" }} spacing="9" p="5px"  alignItems="center" >
            <Img src={img1} alt="logo" sx={{height:"30px"}} />  
                <Text>Men</Text>
                <Text>Women</Text>
                <Text>Kids</Text>
                <Text>Shoes & Bags</Text>
                <Text>Beauty</Text>
                <Flex w="30%" position="relative">
                    
                    <Input w="100%" style={{ padding: "0px 10px 0px 40px", backgroundColor: "#ecedeb" }} placeholder="What are you looking for?"></Input>
                    <Search2Icon position="absolute" left="10px" top="13px" color="black" />
                    </Flex>
                <Text>More</Text>
                {/* <Text>Sign Up/Signin</Text> */}
                <Signin />
     
           <span><FontAwesomeIcon icon={faHeart} size="xl"  /></span>
           <span><FontAwesomeIcon icon={faBagShopping} size="xl" bg="white"/></span>
             
          </Stack>
        </Box>
    )
}