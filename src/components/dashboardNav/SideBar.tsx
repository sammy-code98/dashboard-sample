import React from 'react'
import {
    Box,
    IconButton,
    Text,
    Link
} from '@chakra-ui/react'
import PropTypes, { InferProps } from 'prop-types';
import { SideBarLinks } from '../../components/dashboardNav/sideBarLinks'
import { NavLink as RouterLink } from 'react-router-dom';


const SidebarProps = {
    linkIcon: PropTypes.any,
    title: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired
}


const SideBarContent = ({ linkIcon, title, linkName }: InferProps<typeof SidebarProps>): JSX.Element => {
    return (
        <>
            <Link
                as={RouterLink}
                to={linkName}
                _hover={{
                    textDecoration: 'none'
                }}
                _activeLink={{
                    bg: 'primary.400',
                    color: 'white',
                    textColor: 'white',
                }}

            >

            <Box
                mt='4rem'
                px='1rem'
                    py='0.5rem'
                display='flex'
                textColor='primary.100'
                justifyItems='center'
                alignItems='center'
                gap={4}
                cursor='pointer'
                _hover={{
                    bg: 'primary.400',
                    color: 'white',
                    textColor: 'white',
                }}
            >
                <IconButton
                        as={linkIcon}
                    rounded='full'
                        aria-label='nav button'
                        size='sm'
                        icon={linkIcon}
                    variant='ghost'

                    />
                <Text fontWeight={500} >{title}</Text>

            </Box>
            </Link>

        </>
    )

}
export default function SideBar(): JSX.Element {
    return (
        <Box
            as='aside'
            position='fixed'
            left={0}
            w='180px'
            top='0'
            h='100%'
            bg='white'
            borderColor="gray.300"
            shadow='xl'
        >
            {SideBarLinks.map((sideLinks) => (
                <SideBarContent
                    key={sideLinks.title}
                    title={sideLinks.title}
                    linkIcon={sideLinks.linkIcon}
                    linkName={sideLinks.linkName}
                />

            ))}

            <Box>

            </Box>
        </Box>
    )
}
