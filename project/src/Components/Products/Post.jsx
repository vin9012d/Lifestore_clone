import { Box } from "@chakra-ui/react";
import axios from "axios";

export default function handlePost(item) {
    axios.post(`https://calm-harbor-19932.herokuapp.com/cart`, { ...item })
        .then((res) => {
        console.log(res.data)
        })
    .catch((err)=>{console.log(err,"err")})
}