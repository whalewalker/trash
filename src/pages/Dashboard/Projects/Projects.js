import React from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import ProjectCard from '../../../components/Card/ProjectCard';

const Projects = () => {
  return (
    <Box mt="45px">
      <Text fontSize={28}>Welcome back Christian Chiemela </Text>
      <Box cursor="pointer">
        <HStack display="flex" spacing={3} alignItems="center" mt="45px">
          <Box fontSize={18} fontWeight={500}>Recent Projects</Box>
          <Box>
            <svg width="15" height="10" viewBox="0 0 20 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 1.42612C20 1.57503 19.9332 1.70676 19.7996 1.82131L10.4609 9.82818C10.3273 9.94272 10.1737 10 10 10C9.82632 10 9.67268 9.94272 9.53908 9.82818L0.200401 1.82131C0.0668003 1.70676 0 1.57503 0 1.42612C0 1.27721 0.0668003 1.14548 0.200401 1.03093L1.2024 0.171821C1.33601 0.0572738 1.48965 0 1.66333 0C1.83701 0 1.99065 0.0572738 2.12425 0.171821L10 6.9244L17.8758 0.171821C18.0094 0.0572738 18.163 0 18.3367 0C18.5104 0 18.664 0.0572738 18.7976 0.171821L19.7996 1.03093C19.9332 1.14548 20 1.27721 20 1.42612Z" fill="black"/>
            </svg>
          </Box>
        </HStack>
        <HStack mt="35px" spacing={8}>
          <HStack>
            <ProjectCard projectName="Seedd" buttonName="Create Task" />
          </HStack>
          <Button
            border="1px dashed #ccc" bg="#FCFCFC" rounded="10px" py="3px"
            _focus={{border: "1px dashed #ccc"}}
          >
            <HStack>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 9.13043H10.8696V0H9.13043V9.13043H0V10.8696H9.13043V20H10.8696V10.8696H20V9.13043Z" fill="black" fillOpacity="0.72"/>
              </svg>
              <Text fontSize={15}>Add New Project</Text>
            </HStack>
          </Button>
        </HStack>
      </Box>
    </Box>
  )
}

export default Projects