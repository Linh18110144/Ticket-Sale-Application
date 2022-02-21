import React, { useState } from "react"
import SearchComponent from "../../shared/components/SearchComponent"
import Icon from "@ant-design/icons"
import filter from "../../assets/icon/filter.svg"
import Table from "../Table/Table"
import { Modal } from "antd"
import FilterTicket from "../Modals/FilterTicket/FilterTicket"
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
                <div style={{ width: 110 }}>
                    {/* <Button className="button" onClick={showModal} >
                        <Icon style={{ paddingRight: 5 }} component={() => (<img src={filter} alt='' />)} />
                        Lọc vé
                    </Button>
                    <Button className="button">
                        Xuất file (.csv)
                    </Button> */}

                </div>
                <button type="button" className="button" onClick={showModal}>
                    <Icon style={{ paddingRight: 5 }} component={() => (<img src={filter} alt='' />)} />
                    Lọc vé
                </button>
                <button type="button" className="button">Xuất file (.csv)</button>

                <Modal width={600} visible={isModalVisible} closable={false} footer={null} onCancel={handleCancel} style={{marginTop:-20}}>
                    <FilterTicket />
                </Modal>
            </div>
            <Table />
        </div>
    )
}

export default React.memo(Home)