import React from "react";
import { Button, Checkbox, DatePicker, Radio, Space } from "antd";
import "antd/dist/antd.css"
import "./style.scss";

const plainOptions = ['Tất cả','Cổng 1','Cổng 2','Cổng 3', 'Cổng 4', 'Cổng 5'];
const defaultCheckedList = ['Apple', 'Orange'];

const FilterTicket = () => {

    return (
        <>
            <Space>
                <div>
                    Từ ngày
                    <DatePicker
                        picker="date"
                        format="DD/MM/YYYY"
                    />
                </div>
                <div>
                    Đến ngày
                    <DatePicker
                        picker="date"
                        format="DD/MM/YYYY"
                    />
                </div>
            </Space>
            <div>
                Tình trạng sử dụng
                <Radio.Group>
                    <Radio>Tất cả</Radio>
                    <Radio>Đã sử dụng</Radio>
                    <Radio>Chưa sử dụng</Radio>
                    <Radio>Hết hạn</Radio>
                </Radio.Group>
            </div>
            <div>
                Cổng Check - in
                <Checkbox.Group options={plainOptions}  />
            </div>
        </>
    )
}

export default React.memo(FilterTicket);