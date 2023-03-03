import React from 'react'
import { Box, Image, Avatar } from '@chakra-ui/react'
import { SideBar } from '../components/dashboardNav'
import Logo from "../assets/logo.svg"


export default function DashboardLayout({ children }: { children: any }): JSX.Element {

    return (
        <Box>
            <Box
                px='1rem'
                boxShadow='sm'
                display='flex'
                position='fixed'
                w='100%'
                justifyContent='space-between'
                alignItems='center'
                py='0.5rem'
                bg='white'

            >
                <Image src={Logo} alt='Logo' pl='14rem' />
                <Avatar
                    size='md'
                    name='Prosper Otemuyiwa'
                    src='https://bit.ly/prosper-baba'

                />


            </Box>
            <SideBar />
            <Box pr='4rem' pl='14rem' pt='6rem'>
            {children}
            </Box>
        </Box>
    )
}
