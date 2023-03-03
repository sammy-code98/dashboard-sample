import React from 'react'
import { Box, IconButton, Image, Heading, Avatar, Text, Icon, Button } from '@chakra-ui/react'
import { DashboardLayout } from '../../layout'
import { MdKeyboardArrowLeft, MdLocationPin, MdOutlinePhone, MdEmail, MdOutlineRestoreFromTrash } from "react-icons/md";
import Verified from "../../assets/verified.svg"
import Star from "../../assets/star.svg"
import Heart from "../../assets/heart.svg"
import { TableTab } from '../../components/TableTab'
import tabData from '../../components/TableTab/TableHeadingData'

export default function UserDetails() {
    return (
        <DashboardLayout>
            <Box>
                <Box p='4rem' bgColor='white' borderRadius='xl' shadow={{ base: 'none', md: 'md' }}>
                    <IconButton aria-label='back home' variant='ghost' size='lg' icon={<MdKeyboardArrowLeft />} />
                    <Box display='flex' gap={6}>
                        <Heading textColor='primary.700'>User Details</Heading>
                    </Box>
                    <Box mt='2rem' display='flex' gap={3}>
                        <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                        <Box display='flex' justifyContent='space-between' alignItems='flex-start' gap={4} >
                            <Box>
                                <Text fontWeight={700} textColor='primary.700' fontSize='md'>Clement kiji</Text>

                            </Box>

                            <Box>
                            <Image src={Verified} alt='credibLogo' />
                            </Box>
                            <Box display='flex' gap={1}>
                            <Image src={Star} alt='credibLogo' />
                                <Text as='span' textColor='primary.800'>300</Text>
                            </Box>
                            <Box display='flex' gap={1}>
                                <Image src={Heart} alt='credibLogo' />
                                <Text as='span' textColor='primary.800'>50</Text>
                            </Box>
                            <Box display='flex' gap={8} alignItems='center'>
                                <Button bg='primary.900' borderRadius='20px' color='white' px='2rem' _hover={{
                                    bg: 'white',
                                    color: 'primary.900'
                                }}>Suspend</Button>
                                <Button leftIcon={<MdOutlineRestoreFromTrash />}
                                    borderRadius='20px' borderColor='primary.900' px='2rem' color='primary.900' variant='outline'>
                                    Deactivate
                                </Button>
                            </Box>
                        </Box>

                    </Box>
                    <Box mt='-5rem' ml='8.5rem'>
                        <Box display='flex' alignItems='center'>
                            <Icon as={MdLocationPin} />
                            <Text ml='.5rem'>Port Harcourt</Text>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Icon as={MdOutlinePhone} />
                            <Text ml='.5rem'>07085515609</Text>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Icon as={MdEmail} />
                            <Text ml='.5rem'>Credibemail@gmail.com</Text>
                        </Box>
                    </Box>


                    <Box mt='4rem'>
                        <TableTab data={tabData} />
                    </Box>
                </Box>
            </Box>

        </DashboardLayout>
    )
}
