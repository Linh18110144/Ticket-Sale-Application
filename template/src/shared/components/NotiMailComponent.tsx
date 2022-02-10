import React from "react";
import * as Icon from "react-feather";
import Avatar from "antd/lib/avatar/avatar";
import avatar from "../../assets/image/avatar.svg"

const NotiMailConponent =()=>{
    return(
        <div className="NotiMail">
            <Icon.Mail className="Mail-icon"/>
            <Icon.Bell className="Bell-icon"/>
            <Avatar src={avatar} />
        </div>
    )
}

export default React.memo(NotiMailConponent);