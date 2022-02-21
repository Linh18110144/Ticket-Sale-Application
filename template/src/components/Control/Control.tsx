import React from "react"
import Filter from "./Filter"

const Home = () => {
    return (
        <>
            <div className="body" style={{ width:'calc(100% - 582px)' }}>
                <h1>Đối soát vé</h1>

            </div>
            <div className="filter" >
                <Filter />
            </div>
        </>
    )
}

export default React.memo(Home)