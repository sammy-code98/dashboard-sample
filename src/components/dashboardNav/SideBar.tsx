import React from 'react'
import {
    Box,
    IconButton,
    VStack,
    Text,
} from '@chakra-ui/react'
import PropTypes, { InferProps } from 'prop-types';
import { SideBarLinks } from '../../components/dashboardNav/sideBarLinks'


const SidebarProps = {
    linkIcon: PropTypes.any,
    title: PropTypes.string.isRequired
}


const SideBarContent = ({ linkIcon, title }: InferProps<typeof SidebarProps>): JSX.Element => {
    return (
        <>
            <Box mt='4rem' display='flex' justifyContent='center' alignItems='center'>
                <VStack>
                    <IconButton

                        as={linkIcon}
                        rounded='full'
                        bg='primary.200'
                        color='primary.800'
                        aria-label='nav button'
                        size='sm'
                        icon={linkIcon}
                        _hover={{
                            bg: 'primary.100',
                            color: 'white'
                        }}
                    />
                    <Text fontWeight={500} textColor='primary.100'>{title}</Text>
                </VStack>
            </Box>
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
                    linkIcon={sideLinks.linkIcon} />

            ))}
        </Box>
    )
}
