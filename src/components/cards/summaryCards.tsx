import React from 'react'
import { Box, Heading, Icon, Text } from '@chakra-ui/react'
import PropTypes, { InferProps } from 'prop-types';
import { MdNorthEast } from "react-icons/md";

const SummaryCardProps = {
    title: PropTypes.string.isRequired,
    cardIcon: PropTypes.any,
    totalValue: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descValue: PropTypes.string.isRequired

}
export default function SummaryCards({ title, cardIcon, totalValue, description, descValue }: InferProps<typeof SummaryCardProps>): JSX.Element {
    return (
        <Box
            bgColor='#F9F9F9'
            borderRadius='10px'
            p='2rem'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            height='100%'
            _hover={{
                bgColor: '#D8F9FB',
            }}
        >
            <Box display='flex' alignItems='center'>
                <Icon as={cardIcon} w={7} h={7} />
                <Text pl='1rem' color='primary.700' fontSize='xl' fontWeight={500}>{title}</Text>
            </Box>
            <Box mt='1rem'>
                <Heading>{totalValue}</Heading>
            </Box>
            <Box mt='1rem' display='flex' justifyContent='space-between'>
                <Text textColor='primary.800' fontSize='lg'>{description}</Text>
                <Box display='flex' justifyContent='center' alignItems='center' gap={2}>
                    <Text fontWeight={500} textColor='primary.800' fontSize='lg'>{descValue}</Text>
                    <Icon as={MdNorthEast} color='accentGreen' w={6} h={6} />
                </Box>
            </Box>
        </Box>
    )
}
