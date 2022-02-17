import React, { useState } from "react"
import SearchComponent from "../../shared/components/SearchComponent"
import Icon from "@ant-design/icons"
import filter from "../../assets/icon/filter.svg"
import Table from "../Table/Table"
import { Button, Modal } from "antd"
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
                <div className="group-button">
                    <Button type="primary" onClick={showModal} >
                        <Icon style={{ paddingRight: 5 }} component={() => (<img src={filter} />)} />
                        Lọc vé
                    </Button>
                    <button className="button">
                        Xuất file (.csv)
                    </button>

                </div>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
            <Table />
        </div>
    )
}

export default React.memo(Home)