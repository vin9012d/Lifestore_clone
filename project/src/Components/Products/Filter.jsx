import { Box, Select,Grid } from "@chakra-ui/react";

export default function Filter({handleFilter,handleColor,handleType,handleMaterial,handleSize,handleBrand}) {
    return (
        <Box>
            <Grid templateColumns='repeat(4, 1fr)' gap={10}>
            <Box>
            <Select onChange={handleFilter} placeholder='Price'>
                <option value="LTH">Low to High</option>
                <option value="HTL">High to Low</option>
                </Select>
             </Box>
            <Box>
            <Select onChange={handleType}  placeholder='Type'>
            <option value="pant">Pant </option>
             <option value="top">Top</option>
              <option value="cap">Cap</option>
            <option value="dress">Dress</option>
              <option value="bra">Bra</option>
              <option value="bag">Bag</option>
                </Select>
            </Box>
            <Box>
            <Select onChange={handleColor} placeholder='Color'>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                </Select>
            </Box>
            <Box>
            <Select onChange={handleBrand} placeholder='Brand'>
                <option value="adidas">Adidas</option>
                <option value="puma">Puma</option>
                <option value="jCrew">Jcrew</option>
                </Select>
             </Box>
            <Box>
            <Select onChange={handleMaterial} placeholder='Material'>
                <option value="cotton">Cotton</option>
                <option value="polyster">Polyster</option>
          
                </Select>
             </Box>
            <Box>
            <Select onChange={handleSize} >
                <option value="x">X</option>
                <option value="xl">XL</option>
                <option value="md">MD</option>
          
                </Select>
             </Box>
             </Grid>
        </Box>
    )
}