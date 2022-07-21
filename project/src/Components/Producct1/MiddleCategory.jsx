import lin1 from "./Medias/lin1.jpg"
import lin2 from "./Medias/lin2.jpg"
import lin3 from "./Medias/lin3.jpg"
import lin4 from "./Medias/lin4.jpg"
import lin5 from "./Medias/lin5.jpg"
import lin6 from "./Medias/lin6.jpg"
import lin7 from "./Medias/lin7.jpg"
import lin8 from "./Medias/lin8.jpg"
import lin9 from "./Medias/lin9.jpg"
import lin10 from "./Medias/lin10.jpg"
import lin11 from "./Medias/lin11.jpg"
import lin12 from "./Medias/lin12.jpg"
import { Box,Flex,Img } from "@chakra-ui/react"
export default function MiddleCategory() {
    return (
        <Box>
        
            <Flex  flexWrap="wrap" justifyContent="space-between" >
                <Img  width="200px" mt="20px" height="200px" borderRadius="50%" src={lin1} alt="lin1"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin2} alt="lin2"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin3} alt="lin3"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin4} alt="lin4"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin5} alt="lin5"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin6} alt="lin6"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin7} alt="lin7"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin8} alt="lin8"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin9} alt="lin9"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin10} alt="lin10"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin11} alt="lin11"  />
                <Img width="200px"  mt="20px" h="200px" borderRadius="50%" src={lin12} alt="lin12"  /> 
        </Flex>
        
        
        </Box>
    )
}