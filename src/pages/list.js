import React from "react";
import List_nav from "../components/list_nav";
import List_entry from "../components/list_entry"

function List() {
    return (
    <div className="flexWrap">
        <div className="flexCol1 usr">
            <img src="/images/pfp.png" />
            <h5>User</h5>
        </div>
        <div className="flexCol2">
        <List_nav></List_nav>
        <List_entry></List_entry>
        </div>
    </div>
    );
}
export default List;