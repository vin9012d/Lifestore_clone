import { Box, FormControl, Link } from "@chakra-ui/react";
import React, { useState } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormLabel,Button,Input,Text,useDisclosure
  } from '@chakra-ui/react'
import axios from "axios";

export default function Signin({}) {

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [pagelogin,setPagelogin]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData]=useState({name:"",email:"",password:""})
    const [loginData,setloginData]=useState({name:"",email:""})
    const handleSignin = (e) => {
        e.preventDefault();
        axios.post(`https://calm-harbor-19932.herokuapp.com/sigin`, {
            ...data,"vinod":"bhai"
        }).then((res) => {
            console.log(res)
        }).catch((err)=>{console.log(err)})
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.get(`https://calm-harbor-19932.herokuapp.com/sigin`)
            .then((res) => {
                let ans = res.data.filter((item) => {
                    return item.email == loginData.email && item.password == loginData.password;
                })
                if (ans.length > 0) {
                    alert("You are sucessfully logged in")
                } else {
                    alert("wrong data entered")
                }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(data)
        setData({...data,[name]:value})
    }
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        console.log(data)
        setloginData({...data,[name]:value})
    }

   
    return (
        <Box>
        <Text cursor="pointer" onClick={onOpen}>Sign In/Sign Up</Text>
    

            { !pagelogin? <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSignin}>
                        <ModalBody pb={6}>
         
                            <FormLabel>Name</FormLabel>
                            <Input ref={initialRef} placeholder='First name' name="name" onChange={handleChange} />
                            <FormLabel>Email id</FormLabel >
                            <Input placeholder='Email id' name="email" onChange={handleChange} />
                            <FormLabel>Password</FormLabel >
                            <Input placeholder='Password' name="password"  onChange={handleChange} />
                            <span>Allready user? <span color="blue" onClick={()=>setPagelogin(true)}>Login</span></span>
                        </ModalBody>

                        <ModalFooter>
                            <Button type="submit" colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal> : <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Log in</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleLogin}>
                        <ModalBody pb={6}>
         
                   
                            <FormLabel>Email id</FormLabel>
                            <Input placeholder='Email id' name="email" onChange={handleLoginChange} />
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='Password' name="password" onChange={handleLoginChange} />
                       
                        </ModalBody>

                        <ModalFooter>
                            <Button type="submit" colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
            }
        </Box>
    )
}