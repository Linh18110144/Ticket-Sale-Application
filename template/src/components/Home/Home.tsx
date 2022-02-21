import { Line, Pie } from "@ant-design/charts"
import { DatePicker, Space } from "antd";
import React, { useEffect, useState } from "react"
import locale from 'antd/es/date-picker/locale/vi_VN';


const DemoLine = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     asyncFetch();
    // }, []);

    // const asyncFetch = () => {
    //     fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => {
    //             console.log('fetch data failed', error);
    //         });
    // };

    const data = [
        {
            date: 'Thứ 2',
            scales: 150
        },
        {
            date: 'Thứ 3',
            scales: 180
        },
        {
            date: 'Thứ 4',
            scales: 220
        },
        {
            date: 'Thứ 5',
            scales: 230
        },
        {
            date: 'Thứ 6',
            scales: 210
        },
        {
            date: 'Thứ 7',
            scales: 205
        },
        {
            date: 'CN',
            scales: 190
        },
    ];

    const config = {
        data,
        padding: 40,
        xField: 'date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 7,
            range: [0, 1],
        },
        yAxis: {
            minLimit: 140,
            maxLimit: 260,
            tickCount: 4,
        },
        color: '#FF993C',
        smooth: true,
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            };
        },
    };

    return <Line {...config} />;
};

const DemoPie = () => {
    const data = [
        {
            type: 'Vé đã sử dụng',
            value: 27,
        },
        {
            type: 'Vé đang sử dụng',
            value: 25,
        },

    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        color: ['#FF8A48', '#4F75FF'],
        radius: 1,
        innerRadius: 0.64,
    }
    return <Pie {...config} />;
};

const Home = () => {
    return (
        <div className="body">
            <h1>Thống kê</h1>

            <Space>
                <div>Doanh thu</div>
                <DatePicker
                    picker="date"
                    format="MM/YYYY"
                    locale={locale}
                />
            </Space>
            <div style={{ height: 200 }}>
                <DemoLine />
            </div>

            <Space>
                <span style={{ width: 246, height: 246 }}>
                    <DemoPie />
                </span>

                <span style={{ width: 246, height: 246 }}>
                    <DemoPie />
                </span>
            </Space>
        </div>
    )
}

export default React.memo(Home) 