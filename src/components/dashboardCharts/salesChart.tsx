import React from 'react'
import { Box } from '@chakra-ui/react'
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';


export default function SalesChart() {
    const series: ApexOptions['series'] = [400, 50, 100, 25, 100, 200];
    const options: ApexOptions = {
        chart: {
            width: 535,
            type: "pie",
        },
        labels: ['Imo', 'Lagos', 'Rivers', 'Calabar', 'Kano', 'Enugu'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    return (
        <Box w="100%">
            <ReactApexChart
                options={options}
                series={series}
                type='pie'
                width={535}

            />
        </Box>
    )
}
