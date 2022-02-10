import React from "react";
import * as Icon from "react-feather";
const MenuComponent = () => {
    return (
        <div className="Menu-main">
            <div className="Menu">
                <Icon.Home />
                <div className="Menu-text">Trang chủ</div>
            </div>
            <div className="Menu">
                <div className="Menu-text">Quản lý vé</div>
            </div>
            <div className="Menu">
                <Icon.Home />
                <div className="Menu-text">Đối xoát</div>
            </div>
            <div className="Menu">
                <Icon.Settings />
                <div className="Menu-text">Cài đặt</div>
            </div>
        </div>


    )
}

export default React.memo(MenuComponent);