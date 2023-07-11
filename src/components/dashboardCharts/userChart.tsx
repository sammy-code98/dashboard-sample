import React from 'react'
import { Box } from '@chakra-ui/react'
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

export default function UserChart(): JSX.Element {
    const series: ApexOptions['series'] = [
        {
            name: "total users",
            data: [380, 280, 150, 230, 310, 250, 350, 80, 150, 400, 340, 200],
        },
    ];
    const options: ApexOptions = {
        colors: ['#52b6ff'],
        chart: {
            height: 350,
            type: "area",
            toolbar: { show: false }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    }

    return (
        <Box pr={{ lg: "1rem" }}>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={380}
            />
        </Box>
    )
}
