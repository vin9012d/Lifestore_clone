import { Box, Button, Flex, Heading, Img, Input, Spacer, Text } from "@chakra-ui/react";
import playStoreLogo from "../Medias/playStoreLogo.png"
import AppStoreLogo from "../Medias/googleAppleLogo.png"

export default function FooterTop() {
    return (
        <Box>
            <Flex justifyContent="space-between">
                <Flex flexDirection="column" w="45%">
                    <Heading>Subscribe to our awesome emails.</Heading>
                    <Text>Get our latest offers and news straight in your inbox.</Text>
                    <Flex>
                        
                    <Input  w="50%" size='lg' placeholder="Please enter an email address"/>
                    <Button w="250px"  size="lg" color="white" bg="black">
                         Subscribe
                            </Button>
                            
                    </Flex>

                </Flex>

                <Flex direction="column" w="45%" alignItems="start">
                    <Heading>Download our apps</Heading>
                    <Text>Shop our products and offers on-the-go.</Text>
                    <Flex>
                        
                    </Flex>
         {/* <Img   src={playStoreLogo} h="100px"   alt="PlayStoreLogo"   /> */}
         <Img     src={AppStoreLogo} w="50%" h="50px" alt="AppStoreLogo" />
                </Flex>
            </Flex>

        </Box>
    )
}