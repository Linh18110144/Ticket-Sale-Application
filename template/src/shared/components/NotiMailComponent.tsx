import React from "react";
import * as Icon from "react-feather";
import avatar from "../assets/image/avatar.svg"
const NotiMailConponent =()=>{
    return(
        <div className="NotiMail">
            <Icon.Mail className="Mail-icon"/>
            <Icon.Bell className="Bell-icon"/>
            <img src={avatar} className="Avatar"></img>
        </div>
    )
}

export default React.memo(NotiMailConponent);