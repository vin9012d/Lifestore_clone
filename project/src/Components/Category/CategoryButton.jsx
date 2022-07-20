import { Button } from "@chakra-ui/react";

export default function CategoryButton  ({children}) {
    return (
        <Button sx={{ backgroundColor: "white",right:"50px", color: "yellow", width:"250px" , height:"50px", position: "absolute", bottom: "6%" ,  fontWeight:"bolder" }}>{children }</Button>
    )
}