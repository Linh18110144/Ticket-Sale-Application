import React from "react"
import "antd/dist/antd.css"
import { Calendar, Checkbox, Col, Radio, Typography } from "antd"
import '../Modals/style.scss'
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';

const Calender = () => {
    return (
        <div className="site-calendar-customize-header-wrapper">
            <Calendar
                fullscreen={false}
                locale={locale}
                headerRender={() => {
                    return (
                        <div style={{ padding: 8 }}>
                            <Typography.Title level={4}>Custom header</Typography.Title>
                            <Col>
                                <Radio.Group size="small" >
                                    <Radio value="month">Theo ngày</Radio>
                                    <Radio value="year">Theo tuần</Radio>
                                </Radio.Group>
                            </Col>
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default React.memo(Calender)