import React from "react"
import SearchComponent from "../../shared/components/SearchComponent"
import Icon from "@ant-design/icons"
import filter from "../../assets/icon/filter.svg"
import Table from "../Table/Table"
const Home = () => {
    return (
        <div className="body">
            <h1>Danh sách vé</h1>
            <div className="nav-control">
                <SearchComponent />
                <div className="group-button">
                    <button className="button" style={{marginRight:10, marginLeft:10}}>
                        <Icon style={{ paddingRight: 5 }} component={() => (<img src={filter} />)} />
                        Lọc vé
                    </button>
                    <button className="button">
                        Xuất file (.csv)
                    </button>
                </div>
            </div>
            <Table/>
        </div>
    )
}

export default React.memo(Home)