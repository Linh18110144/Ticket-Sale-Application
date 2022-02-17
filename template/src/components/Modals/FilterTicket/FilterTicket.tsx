import React from "react";
import { Button, Checkbox, Col, DatePicker, Radio, Row, Space } from "antd";
import "antd/dist/antd.css"
import "../style.scss";

const plainOptions = ['Tất cả', 'Cổng 1', 'Cổng 2', 'Cổng 3', 'Cổng 4', 'Cổng 5'];
const defaultCheckedList = ['Tất cả'];

const FilterTicket = () => {

    return (
        <>
            <h2>Lọc vé</h2>
            <Space>
                <div>
                    Từ ngày
                    <br />
                    <DatePicker
                        picker="date"
                        format="DD/MM/YYYY"
                    />
                </div>
                <div>
                    Đến ngày
                    <br />
                    <DatePicker
                        picker="date"
                        format="DD/MM/YYYY"
                    />
                </div>
            </Space>
            
            <div>
                Tình trạng sử dụng
                <br />
                <Radio.Group>
                    <Radio>Tất cả</Radio>
                    <Radio>Đã sử dụng</Radio>
                    <Radio>Chưa sử dụng</Radio>
                    <Radio>Hết hạn</Radio>
                </Radio.Group>
            </div>
            <div>
                Cổng Check - in
                <br />
                <Checkbox.Group options={plainOptions} />
            </div>
        </>
    )
}

export default React.memo(FilterTicket);