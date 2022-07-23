import { Box, Button, Flex, Heading, Img, Input, Spacer, Text } from "@chakra-ui/react";
import playStoreLogo from "../Medias/playStoreLogo.png"
import AppStoreLogo from "../Medias/googleAppleLogo.png"

export default function FooterTop() {
    return (
        <Box mt="60px" mb="50px">
            <Flex justifyContent="space-between">
                <Flex flexDirection="column" w="45%" textAlign="start">
                    <Heading mt="15px">Subscribe to our awesome emails.</Heading>
                    <Text mt="15px">Get our latest offers and news straight in your inbox.</Text>
                    <Flex>
                        
                    <Input mt="30px" w="50%" size='lg' bg="grey.700" placeholder="Please enter an email address"/>
                    <Button mt="30px" w="250px"   size="lg" color="white" bg="black">
                         Subscribe
                            </Button>
                            
                    </Flex>

                </Flex>

                <Flex direction="column" w="45%" alignItems="start">
                    <Heading mt="15px">Download our apps</Heading>
                    <Text mt="15px">Shop our products and offers on-the-go.</Text>
                    <Flex>
                        
                    </Flex>
         {/* <Img   src={playStoreLogo} h="100px"   alt="PlayStoreLogo"   /> */}
         <Img mt="30px"     src={AppStoreLogo} w="50%" h="50px" alt="AppStoreLogo" />
                </Flex>
            </Flex>
            <hr style={{ borderColor: '#f7f8f7',  marginTop: "50px" }} />
        </Box>
    )
}