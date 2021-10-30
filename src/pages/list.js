import React from "react";
import listNav from "../components/listNav";
import listEntry from "../components/listEntry"

function list() {
    return (
    <div className="flexWrap">
        <div className="flexCol1 usr">
            <img src="/images/pfp.png" />
            <h5>User</h5>
        </div>
        <div className="flexCol2">
        <listNav></listNav>
        <listEntry></listEntry>
        </div>
    </div>
    );
}
export default list;