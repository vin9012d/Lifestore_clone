import { Box, Flex, Img, Spacer, Stack,Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter   } from '@fortawesome/free-brands-svg-icons';
import { PhoneIcon, QuestionIcon, EmailIcon } from '@chakra-ui/icons'
import logo from "../Medias/lifestyle-logo.png"

export default function FooterBottom() {
    return (
        <Box>
            <Flex >
              
                  <Flex w="60%" justifyContent="space-between">
                <Flex>
                <Box mr="16px" p="5px" border="1px solid black" w="40px" h="40px" borderRadius="50%"> <PhoneIcon /></Box>
                           
                            <Box textAlign="start"> 
                                <Text>Talk to us</Text>
                                <Text>1800-123-1555</Text>
                            </Box>
                </Flex>
                <Flex>
                  
                    <Box mr="16px" p="5px" border="1px solid black" w="40px" h="40px" borderRadius="50%">   <QuestionIcon /></Box>
                    <Box>
                        <Text textAlign="start">Helpcentre</Text>
                        <Text>help.lifestylestores.com</Text>
                    </Box>

                </Flex>
                <Flex>
                   
                    <Box mr="16px" p="5px" border="1px solid black" w="40px" h="40px" borderRadius="50%">   <EmailIcon /></Box>
                    <Box>
                        <Text textAlign="start">Write to us</Text>
                        <Text>help.lifestylestores.com</Text>
                    </Box>
                    </Flex>
                    </Flex>
                <Spacer/>
                <Flex gap='7'>
                <span height="40px"><FontAwesomeIcon height="40px"  icon={faFacebook} size="2xl"/></span>
                <span><FontAwesomeIcon icon={faInstagram}  size="2xl"/></span>
                <span><FontAwesomeIcon icon={faTwitter} size="2xl" /></span>

                </Flex>
                
                

            </Flex>
            <hr style={{ borderColor: '#f7f8f7', marginBottom: "20px", marginTop: "30px" }} />
            <Flex mb="30px">
                <Img mr="16px" w="80px" src={logo} alt="logo" />
                <Box>
                    <Text textAlign="start" >© 2022 RNA Intellectual Property Limited.</Text>
                    <Text textAlign="start">Terms & Conditions - Privacy Policy</Text>
                </Box>
                
            </Flex>
        </Box>
    )
}