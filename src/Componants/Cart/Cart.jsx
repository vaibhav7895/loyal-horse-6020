import { Box, Divider, Flex, Text, Image, Highlight, Button } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineGift } from "react-icons/ai"
import { TbBus } from "react-icons/tb"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import FirstNavbar from "../HomePage/FirstNavbar"
import Footer from '../HomePage/Footer'
import SecondNavbraMain from '../HomePage/SecondNavbraMain'


let ruppeMaking = (value) => {

  let main = value.replace("INR", "")
  main = Number(main.replace(",", ""))

  return main
}



const Cart = () => {
  const {cart,setCart,total,setTotal} = useContext(AuthContext)
  const [text, setText] = useState(1)
  const [count, setCount] = useState(1)
  const handleChange = (e) => {
    setText(e.target.value)
  }

useEffect(()=>{
  setTotal(sum)
},[])
  




let sum=0

  return (
    <div>

      <FirstNavbar/>
      <SecondNavbraMain/>
      <Box color="#696969" borderRight={"1px solid lightgray"} w="1150px" margin="auto" mt="60px" textAlign={"start"}>
        <Flex width="290px" fontSize="14px" border={"1px solid lightgray"} mb={6}>
          <Box bgColor={"lightgray"} color={"black"} p={"10px"} pl="15px" pr="15px" fontWeight="bold" borderColor="#696969">Shopping Bag({cart.length})</Box>
          <Box p={"10px"} pl="15px" pr="15px" borderLeft={"1px solid lightgray"}>Saved for Later(0)</Box>
        </Flex>

        <Text mb={1} fontSize="23px">Shopping Bag</Text>
        <Text mb={2} fontSize="14px">Items in your bag are not on hold.</Text>
        <Flex gap={2} fontSize="14px" alignItems={"center"}><AiOutlineGift />Choose gift options when you check out.</Flex>
        <Divider mt={1} borderBottom={"1px solid lightgray"} width="1100px" />
        <Flex mt={10} gap={2} alignItems={"center"} fontSize="18px"> <TbBus /><Highlight query='India' styles={{ color: "blue" }}>
          Delivery the products to India
        </Highlight></Flex>
        <Text mt={1} ml={7} fontSize="14px">International shipping</Text>
        <Divider mt={3} borderBottom={"1px solid lightgray"} width="1100px" />

        {
          cart.map((el) => {
            let price = el.el.under_price
            //  setTotal(total + ruppeMaking(price))
            
            sum = sum+ruppeMaking(price)
            console.log(sum) 
            return <Box pt={5} pr={5} key={el.id} width="1100px">
              <Flex justifyContent={"space-between"}>
                <Image w={"100px"} src={el.el.image1} />
                <Box>
                  <Text>{el.el.all.details1}</Text>
                  <Text>{el.el.all.details3}</Text>
                  <Text>{el.el.all.details2}</Text>
                  <Text>{el.el.item}</Text>
                </Box>
                <Image width="200px" h="100px" src="./images/nord23.png" />
                <Text>Rs. {ruppeMaking(price)}</Text>
              </Flex>
              <Flex ml={10} mt={5}>
                <Text>Qty</Text>
                <select onChange={handleChange} outline="none" borderColor="0" h="10px" w="10px">
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                </select>
              </Flex>

              <Flex fontSize="14px" gap="20px" ml={10} mt={5}><Text color="blue" >Remove</Text><Text color="blue">Save for later</Text></Flex>
              <Divider borderBottom={"1px solid lightgray"} width="1100px" mb="20px"/>
            </Box>
          })
        }
        <Flex justifyContent={"space-between"} width="1080px">
          <Image width="300px" src="./images/nord24.png" />
          <Box w="400px">
            <Flex justifyContent={"space-between"}>
              <Text>Subtotal</Text>
              <Text>Rs. {total}</Text>
            </Flex>
            <Divider mt={5} mb={5} borderBottom={"1px solid lightgray"}/>
            <Link to="/address"><Button disabled={cart.length===0} w="400px" bgColor={"black"} color="white" fontSize={"15px"}>Checkout</Button></Link>
          </Box>
        </Flex>
      </Box>
      <Flex><Image margin="auto" mt="100px" width="1000px" src="./images/nord25.png"/></Flex>
      <Flex><Image margin="auto" mt="100px" mb="50px" width="1000px" src="./images/nord26.png"/></Flex>
        <Footer/>
    </div>
  )
}

export default Cart
