'use client'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from '@/constants/ChardData.js'

const Chard = () => {
    console.log(data)

    return (
        <main className='rounded-xl hover:bg-neutral-800 p-4 mt-4 h-80'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </main>
    )
}

export default Chard