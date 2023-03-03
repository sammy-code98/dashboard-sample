import React from 'react'
import { DashboardLayout } from '../../layout'
import { Box, Button, Heading, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { MdKeyboardArrowLeft, MdSearch, MdKeyboardArrowDown, MdLocationPin } from "react-icons/md";
import Group from "../../assets/group.svg"

const AllMenu = () => {
    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
                    All
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </Box>

    )
}

const Location = () => {
    return (
        <Box >
            <Menu>
                <MenuButton as={Button} leftIcon={< MdLocationPin />} rightIcon={<MdKeyboardArrowDown />}>
                    Location
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}
export default function TotalUsers() {
    return (
        <DashboardLayout>
            <Box>
                <Box p='4rem' bgColor='white' borderRadius='xl' shadow={{ base: 'none', md: 'md' }}>
                    <IconButton aria-label='back home' variant='ghost' size='lg' icon={<MdKeyboardArrowLeft />} />
                    <Box display='flex' gap={6}>
                        <Box display='flex' gap={2}>
                            <Image src={Group} alt='Logo' />
                            <Heading textColor='primary.700'>Total Users</Heading>
                            <Heading textColor='primary.700'>2468</Heading>
                        </Box>
                        <Box display='flex' justifyContent='space-around' alignItems='center' gap={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<MdSearch color='gray.300' />}
                                />
                                <Input type='text' placeholder='Type Name' variant='filled' borderRadius='20px' width='100%' />
                            </InputGroup>
                            <AllMenu />
                            <Location />
                        </Box>
                    </Box>

                    <Box mt='4rem'> table</Box>
                </Box>
            </Box>
        </DashboardLayout>
    )
}
