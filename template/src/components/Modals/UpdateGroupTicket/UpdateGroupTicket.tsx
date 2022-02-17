import { Button, Checkbox, DatePicker, Dropdown, Input, Menu, Space, TimePicker } from "antd";
import React from "react";
import "antd/dist/antd.css"
import '../style.scss'
import { DownOutlined } from "@ant-design/icons";
import ButtonGroup from "antd/lib/button/button-group";
// import 'moment/locale/vi';
// import locale from 'antd/es/date-picker/locale/vi_VN';
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

const UpdateGroupTicket = () => {
    return (
        <>
            <Space direction="vertical">
                <h2>Cập nhật thông tin gói vé</h2>
                <Space>
                    <Space direction="vertical">
                        Mã sự kiện
                        <Input />
                    </Space>
                    <Space direction="vertical">
                        Tên sự kiện
                        <Input />
                    </Space>
                </Space>

                <Space>
                    <Space direction="vertical">
                        Ngày áp dụng
                        <Space>
                            <DatePicker 
                                picker="date"
                                format="DD/MM/YYYY"
                            />
                            <TimePicker />
                        </Space>
                    </Space>
                    <Space direction="vertical">
                        Ngày hết hạn
                        <Space>
                            <DatePicker
                                picker="date"
                                format="DD/MM/YYYY"
                            />
                            <TimePicker />
                        </Space>
                    </Space>
                </Space>

                <Space direction="vertical">
                    Giá vé áp dụng
                    <Checkbox>Vé lẻ (vnđ/vé) với giá
                        <Input style={{width:100}}/> /vé
                    </Checkbox>
                    <Checkbox>Combo vé với giá
                        <Input style={{width:100}}/>/<Input style={{width:100}}/> /vé
                    </Checkbox>
                </Space>

                <Space direction="vertical">
                    Tình trạng
                    <Dropdown overlay={menu}>
                        <Button>
                            Đang áp dụng <DownOutlined />
                        </Button>
                    </Dropdown>
                </Space>

                <ButtonGroup>
                    <Button>Hủy</Button>
                    <Button>Lưu</Button>
                </ButtonGroup>
            </Space>
        </>
    )
}

export default React.memo(UpdateGroupTicket);