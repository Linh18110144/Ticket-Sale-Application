import React from "react"
import "antd/dist/antd.css"
import '../style.scss'
import { DatePicker, TimePicker, Space, Input, Checkbox, Dropdown, Menu, Button } from "antd"
import { DownOutlined } from '@ant-design/icons';
const menu = (
    <Menu>
        <Menu.Item key="1"  >
            Đang áp dụng
        </Menu.Item>
        <Menu.Item key="2" >
            Tắt 
        </Menu.Item>
    
    </Menu>
);

const AddGroupTicket = () => {
    return (
        <>
            <h2>Thêm gói vé</h2>
            <label>Tên gói vé</label>
            <Input />
            <Space>
                <label htmlFor="">Ngày áp dụng</label>
                <Space>
                    <DatePicker
                        picker="date"
                        format="DD/MM/YYYY"
                    />
                    <TimePicker />
                </Space>
                <label htmlFor="">Ngày hết hạn</label>
                <Space>
                    <DatePicker
                        picker="date"
                        format="DD/MM/YYYY"
                    />
                    <TimePicker />
                </Space>
            </Space>

            <label htmlFor="">Giá vé áp dụng</label>
            <Space>
                <Checkbox>Vé lẻ (vnđ/vé) với giá
                    <Input /> /vé
                </Checkbox>
                <Checkbox>Combo vé với giá
                    <Input />/<Input /> /vé
                </Checkbox>
            </Space>

            <label>Tình trạng</label>
            <Dropdown overlay={menu}>
                <Button>
                    Button <DownOutlined />
                </Button>
            </Dropdown>
        </>
    )
}

export default React.memo(AddGroupTicket)