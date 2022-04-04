import './DashBoard.css';
import React from 'react'
import ChartLine from '../ChartLine/ChartLine';
import ChartArea from '../ChartArea/ChartArea';
import ChartBar from '../ChartBar/ChartBar';
import ChartPie from '../ChartPie/ChartPie';

const DashBoard = () => {
    return (
        <div className='container mx-auto'>
            <div className='p-4'>
                <ChartLine></ChartLine>
                <ChartArea></ChartArea>
                <ChartBar></ChartBar>
                <ChartPie></ChartPie>
            </div>
        </div>
    )
}

export default DashBoard