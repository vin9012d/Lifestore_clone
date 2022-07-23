import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import ward1 from "./Medias/ward1.jpg"
import ward2 from "./Medias/ward2.jpg"
import ward3 from "./Medias/ward3.jpg"
import trend1 from "./Medias/trend1.jpg"
import trend2 from "./Medias/trend2.jpg"
import trend3 from "./Medias/trend3.jpg"
import top1 from "./Medias/top1.jpg"
import top2 from "./Medias/top2.jpg"
import top3 from "./Medias/top3.jpg"
import top4 from "./Medias/top4.jpg"
import essen1 from "./Medias/essen1.jpg"
import essen2 from "./Medias/essen2.jpg"
import essen3 from "./Medias/essen3.jpg"
import best1 from "./Medias/bestsell1.jpg"
import best2 from "./Medias/bestsell2.jpg"
import dept1 from "./Medias/dept1.jpg"
import dept2 from "./Medias/dept2.jpg"
import dept3 from "./Medias/dept3.jpg"
import flashSale from "./Medias/flashsale.jpg"

export default function BottomCategory() {
    return (
        <Box>

        <Box>
            <Heading textAlign="left"mb="30px" mt="10px" >Wardrobe Essentials</Heading>
            <Flex justifyContent="space-between" >
                <Img w="30%" src={ ward1} alt="ward1" />
                <Img w="30%" src={ ward2} alt="ward2" />
                <Img w="30%" src={ ward3} alt="ward3" />
            </Flex>
            </Box>

            <Box>
            <Heading textAlign="left"mb="30px" mt="10px" >Essential Range</Heading>
            <Flex justifyContent="space-between" >
                <Img w="30%" src={ essen1} alt="essen1" />
                <Img w="30%" src={ essen2} alt="essen2" />
                <Img w="30%" src={ essen3} alt="essen3" />
            </Flex>
            </Box>
        <Box>
            <Heading textAlign="left"mb="30px" mt="10px" >Top Trending Styles</Heading>
            <Flex justifyContent="space-between" >
                <Img w="23%" src={ top1} alt="top1" />
                <Img w="23%" src={ top2} alt="top2" />
                <Img w="23%" src={ top3} alt="top3" />
                <Img w="23%" src={ top4} alt="top4" />
            </Flex>
            </Box>
        <Box>
            <Heading textAlign="left"mb="30px" mt="10px" >Trendsetters</Heading>
            <Flex justifyContent="space-between" >
                <Img w="30%" src={ trend1} alt="trend1" />
                <Img w="30%" src={ trend2} alt="trend2" />
                <Img w="30%" src={ trend3} alt="trend3" />
             
            </Flex>
            </Box>
            <Box>
                <Heading textAlign="start" mb="30px" mt="15px">Flash Sale for today</Heading>
                <Img w="100%" src={flashSale} alt="flashSale" />
            </Box>

        <Box>
            <Heading textAlign="left"mb="30px" mt="15px" >Top Trending Styles</Heading>
            <Flex justifyContent="space-between" >
                <Img w="47%" src={ best1} alt="best1" />
                <Img w="47%" src={ best2} alt="best2" />
               
            </Flex>
            </Box>

            <Box>
            <Heading textAlign="left"mb="30px" >Shop By Department</Heading>
            <Flex justifyContent="space-between" >
                <Img w="30%" src={ dept1} alt="dept1" />
                <Img w="30%" src={ dept2} alt="dept2" />
                <Img w="30%" src={ dept3} alt="dept3" />
            </Flex>
            </Box>

            </Box>
    )
}