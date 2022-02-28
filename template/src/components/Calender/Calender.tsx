import React from "react"
import "antd/dist/antd.css"
import { Calendar, Col, Radio, Typography } from "antd"
import '../Modals/style.scss'
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';

const Calender = () => {
    const [value, setValue] = React.useState('month');

    const onChange = e => {
        setValue(e.target.value);
    };

    return (
        <div className="site-calendar-customize-header-wrapper">
            <Calendar
                fullscreen={false}
                locale={locale}
                headerRender={() => {
                    return (
                        <div style={{ padding: 8 }}>
                            <Typography.Title level={4}></Typography.Title>
                            <Col>
                                <Radio.Group size="small" value={value} onChange={onChange}>
                                    <Radio value="month">Theo ngày</Radio>
                                    <Radio value="week">Theo tuần</Radio>
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