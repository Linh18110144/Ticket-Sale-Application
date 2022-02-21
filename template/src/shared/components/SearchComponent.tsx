import React from "react";
import { Input } from "antd"
import * as Icon from "react-feather";

const SearchComponent = () => {
    return (
        <div className="Search-bar">
            <Input className="Search"
                type="text"
                placeholder="Search"
            />
            <Icon.Search/>
        </div>
    )
}

export default React.memo(SearchComponent);