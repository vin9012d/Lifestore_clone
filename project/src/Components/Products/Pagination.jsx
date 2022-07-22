import { Button,Box } from "@chakra-ui/react"

export default function Pagination({ handlePageNext, current ,handlePagePrev}) {
 

    return (
        <Box>
            
            <span >
                <Button colorScheme="orange" onClick={handlePagePrev} mr="5px" disabled={current===1}>Prev</Button>
                <Button colorScheme="gray">{ current}</Button>
            <Button colorScheme="orange" onClick={handlePageNext} ml="5px" >Next</Button>
            </span>
            
        </Box>
    )
}