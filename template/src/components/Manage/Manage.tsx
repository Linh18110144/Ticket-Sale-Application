import React, { useEffect, useState } from "react"
import SearchComponent from "../../shared/components/SearchComponent"
import Icon from "@ant-design/icons"
import filter from "../../assets/icon/filter.svg"
// import Table from "../Table/Table"
import { Modal, Table, Tag } from "antd"
import FilterTicket from "../Modals/FilterTicket/FilterTicket"
import ButtonGroup from "antd/lib/button/button-group"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import db from "../../database"

const Home = () => {
    const [table, setTable] = useState([]);

    const fetchTable = async () => {
        const response = collection(db, 'listTicket');
        const data = await getDocs(response);
        data.forEach(item => {
            setTable(table => [...table, item.data()])
            console.log("Data table: ", table)
        })

    }

    useEffect(() => {
        fetchTable();
    }, [])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
        },
        {
            title: 'Booking Code',
            dataIndex: 'bookingCode',
            key: 'bookingCode',
        },
        {
            title: 'Số vé',
            dataIndex: 'numberTicket',
            key: 'numberTicket',
        },
        {
            title: 'Tên sự kiện',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tình trạng sử dụng',
            dataIndex: 'status',
            key: 'status',
            // render: status => (
            //     <>
            //         {status.map(item=>{
            //             let color;
            //             if(item==='Hết hạn'){
            //                 color='volcano'
            //             }
            //             return (
            //                 <Tag color={color} key={item}>
            //                     {item}
            //                 </Tag>
            //             )

            //         })}
            //     </>
            // )
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'useDate',
            key: 'useDate',
        },
        {
            title: 'Ngày xuất vé',
            dataIndex: 'fromDate',
            key: 'fromDate',
        },
        {
            title: 'Cổng check-in',
            dataIndex: 'port',
            key: 'port',
        }
    ]
    return (
        <div className="body">
            <h1>Danh sách vé</h1>
            <div className="nav-control">
                <SearchComponent />
                <div style={{ width: 280, minHeight: 46 }} >

                    <ButtonGroup style={{ display: "flex", justifyContent: "space-between", minHeight: 46 }}>
                        <button type="button" className="button" onClick={showModal}>
                            <Icon style={{ paddingRight: 5 }} component={() => (<img src={filter} alt='' />)} />
                            Lọc vé
                        </button>
                        <button type="button" className="button">Xuất file (.csv)</button>
                    </ButtonGroup>
                </div>
                <Modal width={600} visible={isModalVisible} closable={false} footer={null} onCancel={handleCancel} style={{ marginTop: -20 }}>
                    <FilterTicket />
                </Modal>
            </div>
            <Table columns={columns} dataSource={table} />
        </div>
    )
}

export default React.memo(Home)