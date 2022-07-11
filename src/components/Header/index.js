import React, { useState } from 'react';
import { Box, Flex, HStack } from '@chakra-ui/layout';
import Avatar from '../../public/svgs/Avatar';
import Notification from '../../public/svgs/Notification';
import Profile from '../Modal/Profile/Profile';

const Header = () => {
    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        setToggleModal((toggle) => !toggle)
    }
    
  return (
      <Box pl="16rem" pr="3rem" h="60px" border="1px solid #eeee">
        <Flex justifyContent="flex-end" alignItems="center" h="full">
            <HStack spacing={8}>
                <Notification />
                <Avatar toggleModal={handleToggleModal} />
            </HStack>
        </Flex>
        {toggleModal && <Profile />}
    </Box>
  )
}

export default Header