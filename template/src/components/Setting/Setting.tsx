import { Modal } from "antd"
import React, { useState } from "react"
import SearchComponent from "../../shared/components/SearchComponent"
import AddGroupTicket from "../Modals/AddGroupTicket/AddGroupTicket";
import UpdateGroupTicket from "../Modals/UpdateGroupTicket/UpdateGroupTicket";
import Table from "../Table/Table";

const Setting = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible1, setIsModalVisible1] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const showModal1 = () => {
        setIsModalVisible1(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleCancel1 = () => {
        setIsModalVisible1(false);
    };

    return (
        <div className="body">
            <h1 >Danh sách gói vé</h1>
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
                
                <button type="button" className="button" onClick={showModal1}>Xuất file (.csv)</button>
                <button type="button" className="button-on" onClick={showModal}>
                    Thêm gói vé
                </button>
                <Modal width={758} visible={isModalVisible} closable={false} footer={null} onCancel={handleCancel} style={{marginTop:-70}}>
                    <AddGroupTicket />
                </Modal>
                <Modal width={758} visible={isModalVisible1} closable={false} footer={null} onCancel={handleCancel1} style={{marginTop:-70}}>
                    <UpdateGroupTicket />
                </Modal>
            </div>
            <Table />
        </div>

    )
}

export default React.memo(Setting)