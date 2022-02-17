import { Line, Pie } from "@ant-design/charts"
import { Space } from "antd"
import React, { useEffect, useState } from "react"


// const DemoLine = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };
//   const config = {
//     data,
//     padding: 'auto',
//     xField: 'Date',
//     yField: 'scales',
//     xAxis: {
//       // type: 'timeCat',
//       tickCount: 5,
//     },
//   };

//   return <Line {...config} />;
// };

const DemoLine = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        padding: 40,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
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
        radius: 1,
        innerRadius: 0.64,
    }
    return <Pie {...config} />;
};

const Home = () => {
    return (
        <div className="body">
            <h1>Thống kê</h1>
            {/* <Calender /> */}
            <div style={{ height: 200 }}>
                <DemoLine />

            </div>
            <div>
                <span style={{width:246, height:246}}>
                <DemoPie />
                </span>
                
                <span style={{width:246, height:246}}>
                <DemoPie />
                </span>
            </div>
        </div>
    )
}

export default React.memo(Home) 