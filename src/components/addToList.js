import React from "react";

function AddEntry() {
    
    return (
        <div>
            <form action="." method="POST" id="status">
                <button className="btn btn-secondary dropdown-toggle" type="button">
                    Dropdown button
                </button>
                <select name="game_status">
                    <option value="default_status"></option>
                    <option value="playing">Playing</option>
                    <option value="finished">Finished</option>
                    <option value="completed">Completed</option>
                    <option value="paused">Paused</option>
                    <option value="dropped">Dropped</option>
                    <option value="wishlisted">Wishlisted</option>
                </select>
                <select name="game_score">
                    <option value="default_score"></option>
                    <option value="score_10">10</option>
                    <option value="score_9">9</option>
                    <option value="score_8">8</option>
                    <option value="score_7">7</option>
                    <option value="score_6">6</option>
                    <option value="score_5">5</option>
                    <option value="score_4">4</option>
                    <option value="score_3">3</option>
                    <option value="score_2">2</option>
                    <option value="score_1">1</option>
                </select>
            </form>
        </div>
    )
}

export default AddEntry