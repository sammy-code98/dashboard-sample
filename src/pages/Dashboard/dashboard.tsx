import React from 'react'
import { DashboardLayout } from '../../layout'
import { Box, Heading, Text } from '@chakra-ui/react'
import { SummaryCards } from '../../components/cards'
import { summaryCard } from '../../fakeData/summaryCard'
import { TableTab } from '../../components/TableTab'
import tabData from '../../components/TableTab/TableHeadingData'
import { UserChart, SalesLocation, SalesChart } from '../../components/dashboardCharts'


export default function Dashboard() {
    return (
        <DashboardLayout>
            <Box>
                <Box p='4rem' bgColor='white' borderRadius='xl' shadow={{ base: 'none', md: 'md' }}>
                    <Box>
                        <Heading textColor='primary.700'>Dashboard</Heading>
                    </Box>

                    <Box
                        mt='2rem'
                        display='grid'
                        gridTemplateColumns={{
                            base: "repeat(1,minmax(0,1fr))",
                            md: "repeat(3, minmax(0, 1fr))",
                            lg: "repeat(3, minmax(0, 1fr))",
                        }}
                        gap={6}
                    >
                        {summaryCard.map(sumCard => {
                            return (
                                <SummaryCards
                                    key={sumCard.title}
                                    title={sumCard.title}
                                    cardIcon={sumCard.cardIcon}
                                    totalValue={sumCard.totalValue}
                                    description={sumCard.description}
                                    descValue={sumCard.descValue}
                                    link={sumCard.link}
                                />

                            )
                        })}

                    </Box>
                </Box>
                <Box mt='2rem' p='4rem' bgColor='white' borderRadius='xl' shadow={{ base: 'none', md: 'md' }}>
                    <Text fontSize='2xl' color='primary.700'>Users</Text>
                    <UserChart />
                </Box>
                <Box mt='2rem' display='flex' justifyContent='space-between' alignItems='center' gap='2rem'>
                    <Box width='100%' p='4rem' bgColor='white' borderRadius='xl' shadow={{ base: 'none', md: 'md' }}>
                        <SalesLocation />
                    </Box>
                    <Box width='100%' p='4rem' bgColor='white' borderRadius='xl' shadow={{ base: 'none', md: 'md' }}>
                        <Text fontSize='2xl' color='primary.700'>Sales</Text>
                        <SalesChart />
                    </Box>

                </Box>
                <Box mt='2rem' p='4rem' bgColor='white' borderRadius='xl' shadow={{ base: 'none', md: 'md' }}>
                    <TableTab data={tabData} />
                </Box>
            </Box>

        </DashboardLayout>
    )
}
