import { Button } from "@chakra-ui/react";

export default function Discount({children}) {
    return (
        <Button position="absolute" bottom="17px " right='5px' bg="white" color="black" size="sm">
{children}% OFF
        </Button>
    )
} 