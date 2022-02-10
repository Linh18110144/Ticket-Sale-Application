import React from "react"
import SearchComponent from '../../shared/components/SearchComponent';
import NotiMailComponent from '../../shared/components/NotiMailComponent';

const Nav = () => {
    return (
        <nav className="nav">
            <SearchComponent />
            <NotiMailComponent />
        </nav>
    )
}

export default React.memo(Nav)