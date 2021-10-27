import React from "react";
function list() {
    return (
    <div class="flexWrap">
        <div class="flexCol1 usr">
            <img src="/images/pfp.png"/>
            <h5>User</h5>
        </div>
        <div class="flexCol2">
            <ul>
                <li class="flexWrap list_header">
                    <h5 class="flexCol6">Title:</h5>
                    <h5 class="flexCol6">Status:</h5>
                    <h5 class="flexCol6">Score:</h5>
                </li>
                <li class="flexWrap list_entry">
                    <button class="btn" id="hades">...</button>
                    <h6 class="flexCol6"><a class="text_remove" href="/view/info.html">Hades</a></h6>
                    <h6 class="flexCol6">Completed</h6>
                    <h6 class="flexCol6">10</h6>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default list;