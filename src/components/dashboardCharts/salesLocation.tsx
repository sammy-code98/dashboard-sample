import React from 'react'
import { Box, Divider, Flex, Text } from '@chakra-ui/react'


export default function SalesLocation() {

    const LocationData = [
        {
            state: "Imo",
            totalSales: 4000,
        },
        {
            state: "Lagos",
            totalSales: 50,
        },
        {
            state: "Rivers",
            totalSales: 100,
        },
        {
            state: "Calabar",
            totalSales: 25,
        },
        {
            state: "Kano",
            totalSales: 100,
        },
        {
            state: "Enugu",
            totalSales: 1000,
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
                                <Text>{data.state}</Text>
                                <Text>{data.totalSales}</Text>
                            </Flex>
                        </Box>
                    )
                })
                }
            </Box>
        </Box>
    )
}
