import { Link } from 'react-router-dom'
import React from "react"
import logo from '../../assets/image/logo.svg'
import ticket from '../../assets/icon/ticket.svg'
import home from '../../assets/icon/home.svg'
import control from '../../assets/icon/control.svg'
import setting from '../../assets/icon/setting.svg'
import { CopyrightOutlined } from '@ant-design/icons'
import Icon from '@ant-design/icons';


const Menu = () => {

    return (
        <>

            <div className='menu'>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className='list-menu'>
                    <div className='button-menu'>
                        <Icon component={() => (<img src={home} alt='' />)} />
                        <Link className='link' to='/'>Trang chủ</Link>
                    </div>
                    <div className='button-menu'>
                        <Icon component={() => (<img src={ticket} alt='' />)} />
                        <Link className='link' to='/manage'>Quản lý vé</Link>
                    </div>

                    <div className='button-menu'>
                        <Icon component={() => (<img src={control} alt='' />)} />
                        <Link className='link' to='/control'>Đối soát vé</Link>
                    </div>
                    <div className='button-menu'>
                        <Icon component={() => (<img src={setting} alt='' />)} />
                        <Link className='link' to='/setting'>Cài đặt</Link>
                    </div>
                    <div style={{ paddingLeft: 80, opacity: 0.6 }}>
                        Gói dịch vụ
                    </div>
                </div>

            </div>
            <div className='footer'>
                Copyright <CopyrightOutlined /> 2020 Alta Software
            </div>
        </>
    )
}

export default React.memo(Menu)