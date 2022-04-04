import './ChartPie.css'
import React, { useEffect, useState } from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const ChartPie = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h4 className='text-2xl text-center my-4'>Investment vs Revenue</h4>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" />
                    <Tooltip></Tooltip>
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={140} outerRadius={160} fill="#82ca9d" label />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartPie