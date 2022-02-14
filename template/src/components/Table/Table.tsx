import React from "react"

const Table =()=>{
    return (
        <>
        <table className="table">
                <tr>
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
        </>
    )
}

export default React.memo(Table)