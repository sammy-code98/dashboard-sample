import React from 'react'
import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import PropTypes, { InferProps } from 'prop-types';


const SalesLocationProps = {
    state: PropTypes.string.isRequired,
    totalSales: PropTypes.number.isRequired

}
export default function SalesLocation() {

    const LocationData: InferProps<typeof SalesLocationProps> = [
        {
            state: "Imo",
            totalUsers: 4000,
        },
        {
            state: "Lagos",
            totalUsers: 50,
        },
        {
            state: "Rivers",
            totalUsers: 100,
        },
        {
            state: "Calabar",
            totalUsers: 25,
        },
        {
            state: "Kano",
            totalUsers: 100,
        },
    ]
    return (
        <Box w="100%" >

            <Box
                fontWeight="700"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                pb={{ base: "1rem", lg: "1.2rem" }}
            >
                <Text>State</Text>
                <Text>Total Users</Text>
            </Box>

            <Box>
                {LocationData.map((data) => {
                    return (
                        <Box key={data.state}>
                            <Divider />
                            <Flex
                                px={{ base: ".8rem", lg: "1rem" }}
                                py={{ base: ".7rem", lg: "1.2rem" }}
                                alignItems="center"
                                justifyContent="space-between"
                                fontSize="0.875rem"
                            >
                                <Text>{data.country}</Text>
                                <Text>{data.totalUsers}</Text>
                            </Flex>
                        </Box>
                    )
                })
                }
            </Box>
        </Box>
    )
}
