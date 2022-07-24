import { Box, Flex, Image, Img, Input, Stack, Text } from "@chakra-ui/react";
import {  Search2Icon } from '@chakra-ui/icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping ,faUser} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faTwitter   } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import img1 from  "../Medias/lifestyle-logo.png"
import Signin from "../Regestration/Sigin";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Signout from "../Regestration/Signout";

export default function Navbar() {
    const { state, handleAuth } = useContext(AuthContext)
    console.log(state)
    return (
        <Box bg="#f7f8f7" h="60px"  w="100%" pl="20px"> 
            <Stack direction={{ base: "row" }} spacing="9" p="5px"  alignItems="center" >
            <Link to="/"><Img src={img1} alt="logo" sx={{height:"30px"}} />  </Link>
                <Text>Men</Text>
                <Link to="/women"><Text>Women</Text></Link>
                
                <Text>Kids</Text>
                <Text>Shoes & Bags</Text>
                <Text>Beauty</Text>
                <Flex w="30%" position="relative">
                    
                    <Input w="100%" style={{ padding: "0px 10px 0px 40px", backgroundColor: "#ecedeb" }} placeholder="What are you looking for?"></Input>
                    <Search2Icon position="absolute" left="10px" top="13px" color="black" />
                    </Flex>
                <Text>More</Text>
                {/* <Text>Sign Up/Signin</Text> */}
              {state.isAuth? <FontAwesomeIcon icon={faUser} size="xl"   />:  <Signin />} 
     
           <span><FontAwesomeIcon icon={faHeart} size="xl"  /></span>
         <Link to="/women/products/cart"> <Box> <span><FontAwesomeIcon icon={faBagShopping} size="xl" bg="white"/></span></Box></Link>
             
          </Stack>
        </Box>
    )
}