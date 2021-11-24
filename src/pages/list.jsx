import React from "react"
import ListNav from "../components/listNav"
import ListEntry from "../components/listEntry"

function List() {
    return (
    <div className="flexWrap">
        <div className="flexCol1 usr">
            <img src="/images/pfp.png" />
            <h5>User</h5>
        </div>
        <div className="flexCol2">
        <ListNav></ListNav>
        <ListEntry></ListEntry>
        </div>
    </div>
    );
}
export default List;