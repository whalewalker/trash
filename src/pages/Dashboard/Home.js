import React from 'react';
import {Box, Text, HStack } from "@chakra-ui/react"
import Card from '../../components/Card/Card';

const Home = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center" flexDir="column">
        <HStack fontSize={24} mt="60px">
          <Text color="#2155CD">Welcome,</Text>
          <Text>Christian Chiemela</Text></HStack>
        <Text fontSize={18} color="#323338" lineHeight="1.8">{`Let’s get you started on Seedd`} </Text>
      </Box>
      <HStack spacing={8} mt="60px">
        <Card
          color="#2155CD"
          border="1px dashed #ccc"
          title="Create Project"
          description="Create your first project on seedd"
          button="Create Project"
          buttonBg="#2155CD"
          buttonColor="#fff"
          link="projects"
        />
        
        <Card
          border="1px dashed #2155CD"
          title="Guides and Docs"
          description="View the guides and documentations on seedd"
          button="View Documentations"
          color="#FF3D00"
          bg="rgba(66, 153, 225, 0.13)"
          buttonBg="#fff"
        />
      </HStack>
    </Box>
  )
}

export default Home;