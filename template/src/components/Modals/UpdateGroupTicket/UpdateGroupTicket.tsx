import { Button, Checkbox, Col, DatePicker, Dropdown, Input, Menu, Row, Space, TimePicker } from "antd";
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
                <h2 className="header-modal">Cập nhật thông tin gói vé</h2>

                <Row style={{ marginTop: 10 }}>
                    <Col span={8}>
                        <Space direction="vertical">
                            <label className="required">Mã sự kiện</label>
                            <Input/>
                        </Space>
                    </Col>
                    <Col span={4}>
                    </Col>
                    <Col span={12}>
                        <Space direction="vertical">
                            Tên sự kiện
                            <Input />
                        </Space>
                    </Col>
                </Row>

                <Row style={{ marginTop: 10 }}>
                    <Col span={12}>
                        <Space direction="vertical">
                            Ngày áp dụng
                            <Space>
                                <DatePicker
                                    picker="date"
                                    format="DD/MM/YYYY"
                                    placeholder="dd/mm/yy"
                                />
                                <TimePicker
                                    placeholder="hh:mm:ss"
                                />
                            </Space>
                        </Space>
                    </Col>

                    <Col span={12}>
                        <Space direction="vertical">
                            Ngày hết hạn
                            <Space>
                                <DatePicker
                                    picker="date"
                                    format="DD/MM/YYYY"
                                    placeholder="dd/mm/yy"
                                />
                                <TimePicker
                                    placeholder="hh:mm:ss"
                                />
                            </Space>
                        </Space>
                    </Col>
                </Row>

                <Space direction="vertical" style={{ marginTop: 10 }}>
                    Giá vé áp dụng
                    <Checkbox>Vé lẻ (vnđ/vé) với giá
                        <Input className="input-small" placeholder="Giá vé" /> /vé
                    </Checkbox>
                    <Checkbox>Combo vé với giá
                        <Input className="input-small" placeholder="Giá vé" />/<Input style={{ width: 72, margin: 5 }} placeholder="Giá vé" /> vé
                    </Checkbox>
                </Space>
                <Space direction="vertical" >
                    Tình trạng
                    <Dropdown overlay={menu}>
                        <Button style={{ borderRadius: 8 }}>
                            Đang áp dụng <DownOutlined style={{ color: "#FF993C" }} />
                        </Button>
                    </Dropdown>
                </Space>

                <div className="annotate">là thông tin bắt buộc</div>

                <div style={{ width: 300, marginTop: 20, display: "block", marginLeft: "auto", marginRight: "auto" }} >
                    <ButtonGroup style={{ display: "flex", justifyContent: "space-between" }}>
                        <button type="button" className="button" style={{ width: "45%", display: "block", textAlign: "center", lineHeight: 2 }}>Hủy </button>
                        <button type="button" className="button-on" style={{ width: "45%", display: "block", textAlign: "center", lineHeight: 2 }}>Lưu</button>
                    </ButtonGroup>
                </div>
            </Space>
        </>
    )
}

export default React.memo(UpdateGroupTicket);