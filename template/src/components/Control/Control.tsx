import React from "react"
import Calender from "../Calender/Calender"
import AddGroupTicket from "../Modals/AddGroupTicket/AddGroupTicket"
import FilterTicket from "../Modals/FilterTicket/FilterTicket"
import UpdateGroupTicket from "../Modals/UpdateGroupTicket/UpdateGroupTicket"

const Home = () => {
    return (
        <div className="body">
            <h1>Đối soát vé</h1>
            <FilterTicket />
            <AddGroupTicket />
            <UpdateGroupTicket />
        </div>
    )
}

export default React.memo(Home)