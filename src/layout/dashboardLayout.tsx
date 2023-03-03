import React from 'react'
import { Box } from '@chakra-ui/react'
import { SideBar } from '../components/dashboardNav'

export default function DashboardLayout({ children }: { children: any }): JSX.Element {

    return (
        <Box>
            <SideBar />
            <Box pr='4rem' pl='14rem' mt='2rem'>
            {children}
            </Box>
        </Box>
    )
}
