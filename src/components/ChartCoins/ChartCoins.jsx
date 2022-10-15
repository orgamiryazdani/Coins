import axios from 'axios';
import moment from 'moment/moment';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useParams } from 'react-router-dom';
import Loading from '../../common/loading/Loading';

const ChartCoins = () => {

    const { id } = useParams();

    const [priceChart, setPriceChart] = useState([]);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`).then((response) => setPriceChart(response.data.prices));
    }, []);

    if (priceChart.length === 0) {
        return <Loading />
    }

    let data = priceChart.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

    const series = [{
        name: id,
        data: data.map(value => value.y),
    }];

    const options = {
        colors: ['#e483ec', '#4576b5'],
        background: ["#e483ec", "#e483ec"],
        chart: {
            height: 350,
            type: 'area',
            foreColor: '#fff'
        },
        xaxis: {
            categories: data.map(value => moment(value.x).format('MMMDD')),
            tickAmount: 6
        },
        dataLabels: {
            enabled: false
        },
    };

    return (
        <div className='w-[100vw] flex items-center h-[100vh] justify-center bg-black'>
            <div className='flex flex-col items-center justify-end w-[97%] h-[92%] bg-[#121318] rounded-lg'>
                <div className='w-full flex items-center justify-center h-[12%]'>
                    <div className='flex items-center w-[85%]  justify-between text-white text-2xl'>
                        <p>7 روز</p>

                        <div className='flex'>
                            <div className='flex items-center justify-center text-black text-base mr-4 bg-[#c3f0fa] w-36 h-8 rounded-[4px]'>{id}</div>
                        </div>

                    </div>
                </div>

                <div className='w-[95%] flex items-center mt-5 justify-end h-5/6 bg-[#121318] rounded-lg'>
                    <ReactApexChart options={options} series={series} type="area" height={450} className="w-[100%] pr-14" />
                </div>

            </div>
        </div>
    );
}

export default ChartCoins;
