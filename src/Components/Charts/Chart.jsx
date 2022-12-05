import React from 'react';
import "./Chart.css";
import { ResponsiveContainer, LineChart, Cell, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie } from 'recharts';
import { Row, Col } from 'react-bootstrap';
export default function Chart() {
    const data = [
        { name: 'Jan', uv: 500, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 5500, pv: 2400, amt: 2400 },
        { name: 'Mar', uv: 2500, pv: 2400, amt: 2400 },
        { name: 'Apr', uv: 7500, pv: 2400, amt: 2400 },
        { name: 'May', uv: 4523, pv: 2400, amt: 2400 },
        { name: 'Jun', uv: 1234, pv: 2400, amt: 2400 },
        { name: 'Jul', uv: 9850, pv: 2400, amt: 2400 },
        { name: 'Aug', uv: 10000, pv: 2400, amt: 2400 },
        { name: 'Sep', uv: 275, pv: 2400, amt: 2400 },
        { name: 'Oct', uv: 320, pv: 2400, amt: 2400 },
        { name: 'Nov', uv: 10025, pv: 2400, amt: 2400 },
        { name: 'Dec', uv: Math.floor(Math.random() * 1000), pv: 2400, amt: 2400 },

    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const data2 = [
        { name: 'Mobile', Device: 'Mobile', Count: 2500 },
        { name: 'Pc', Device: 'Pc', Count: 1500 },
        { name: 'Tablet', Device: 'Tablet', Count: 500 },
    ]
    return (
        <>
            <Row className='Charts m-0 p-0'>
                <Col md={6} sm={12} >
                    <div className="box box-shadow">
                        <div className="chartLabel ms-3 mt-3">
                            <h3 className='mb-4 border-bottom pb-4 border-dark'>User click</h3>
                        </div>
                        <ResponsiveContainer width='100%' aspect={2}>
                            <LineChart data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Col>
                <Col md={6} sm={12} >
                    <div className="box box-shadow">
                        <div className="chartLabel ms-3 mt-3">
                            <h3 className='mb-4 border-bottom pb-4 border-dark'>User Device</h3>
                        </div>
                        <ResponsiveContainer width='100%' aspect={2}>
                            <PieChart>
                                <Pie
                                    dataKey="Count"
                                    isAnimationActive={false}
                                    data={data2}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>

                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Col>
            </Row>
        </>
    )
}
