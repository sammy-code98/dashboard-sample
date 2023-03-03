import React from 'react'
import { Text, Tabs, TabList, Tab, TabPanels, TabPanel, Icon } from "@chakra-ui/react"




export default function TableTab({ data }: { data: Array<any> }): JSX.Element {
    return (
        <Tabs>
            <TabList>
                {data.map((tab, index) => (
                    <Tab key={index} display='flex' alignItems='center' justifyContent='space-around' gap='8'>
                        <Icon as={tab.icon} />
                        {tab.label}
                        <Text as='span' fontWeight={700}>{tab.total}</Text>
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                        {tab.content}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )

}
