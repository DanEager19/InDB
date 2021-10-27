import React from "react";
function List() {
    return (
    <div className="flexWrap">
        <div className="flexCol1 usr">
            <img src="/images/pfp.png" alt="Profile"/>
            <h5>User</h5>
        </div>
        <div className="flexCol2">
            <ul>
                <li className="flexWrap list_header">
                    <h5 className="flexCol6">Title:</h5>
                    <h5 className="flexCol6">Status:</h5>
                    <h5 className="flexCol6">Score:</h5>
                </li>
                <li className="flexWrap list_entry">
                    <button className="btn" id="hades">...</button>
                    <h6 className="flexCol6"><a className="text_remove" href="/view/info.html">Hades</a></h6>
                    <h6 className="flexCol6">Completed</h6>
                    <h6 className="flexCol6">10</h6>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default List;