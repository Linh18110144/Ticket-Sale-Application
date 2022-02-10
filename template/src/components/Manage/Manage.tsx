import React from "react"
import SearchComponent from "../../shared/components/SearchComponent"
import Icon from "@ant-design/icons"
import filter from "../../assets/icon/filter.svg"
const Home = () => {
    return (
        <div className="body">
            <h1>Danh sách vé</h1>
            <div className="nav-control">
                <SearchComponent />
                <div className="group-button">
                    <button className="button">
                        <Icon style={{ paddingRight: 5 }} component={() => (<img src={filter} />)} />
                        Lọc vé
                    </button>
                    <button className="button">
                        Xuất file (.csv)
                    </button>
                </div>
            </div>
            <table className="table">
                <tr style={{backgroundColor:'#F1F4F8'}}>
                    <th>STT</th>
                    <th>Booking code</th>
                    <th>Số vé</th>
                    <th>Tên sự kiện</th>
                    <th>Tình trạng sử dụng</th>
                    <th>Ngày sử dụng</th>
                    <th>Ngày xuất vé</th>
                    <th>Cổng check-in</th>
                </tr>
                <tr>
                    <td>Minh Chinh</td>
                    <td>5000</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                
            </table>
        </div>
    )
}

export default React.memo(Home)