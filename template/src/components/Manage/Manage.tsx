import React, { useState } from "react"
import SearchComponent from "../../shared/components/SearchComponent"
import Icon from "@ant-design/icons"
import filter from "../../assets/icon/filter.svg"
import Table from "../Table/Table"
import { Modal } from "antd"
import FilterTicket from "../Modals/FilterTicket/FilterTicket"
import ButtonGroup from "antd/lib/button/button-group"
const Home = () => {
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
    return (
        <div className="body">
            <h1>Danh sách vé</h1>
            <div className="nav-control">
                <SearchComponent />
                <div style={{ width: 280, minHeight:46}} >

                <ButtonGroup style={{ display: "flex", justifyContent: "space-between", minHeight:46 }}>
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
            <Table />
        </div>
    )
}

export default React.memo(Home)