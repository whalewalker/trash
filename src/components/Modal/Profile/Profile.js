import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import { BiLogOut } from "react-icons/bi"
import { AiTwotoneSetting } from "react-icons/ai"
import { CgProfile} from "react-icons/cg"
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
      <Box position="absolute" right={10} top={14} bg="white" shadow="lg" w="200px" pt="10px" rounded={5} h="auto" zIndex={50}>
        <HStack
        cursor="pointer"
        px="15px"
        py="8px"
        _hover={{
            bg: "rgba(66, 153, 225, 0.13)"
        }}
        >
            <CgProfile size="20px" />
            <Text>Profile</Text>
        </HStack>
        <HStack
            cursor="pointer"
            px="15px"
            py="8px"
            _hover={{
                bg: "rgba(66, 153, 225, 0.13)"
        }}
        >
            <AiTwotoneSetting size="20px" />
            <Text>Setting</Text>
        </HStack>
        <Link to="/login">
            <HStack
                cursor="pointer"
                px="15px"
                py="8px"
                _hover={{
                    bg: "rgba(66, 153, 225, 0.13)"
                }}
            >
                <BiLogOut size="20px" />
                <Text>Logout</Text>
            </HStack>
        </Link>
     </Box>
  )
}

export default Profile