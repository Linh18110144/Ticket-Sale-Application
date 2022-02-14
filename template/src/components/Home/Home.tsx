import React from "react"
import AddGroupTicket from "../Modals/AddGroupTicket/AddGroupTicket"
import FilterTicket from "../Modals/FilterTicket/FilterTicket"

const Home = () => {
    return (
            <div className="body">
                <h1>Thống kê</h1>
                <AddGroupTicket/>
            </div>
    )
}

export default React.memo(Home) 