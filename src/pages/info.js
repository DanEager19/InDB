import React from "react";

const info = () => {
    return (
        <div class="container flexWrap">
        <div class="flexCol1 centerTag">
            <h1>Hades</h1>
            <img id="cover" src="/images/Hades_cover_art.jpg"/>

            <form action="." method="POST" id="status">
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
        <div class="flexCol2">
            <div class="flexCol3 desc">
                <h4 class="centerTag">Summary</h4>
                <p id="summary" class="centerTag"></p>
            </div>
            <div class="container flexWrap flexCol4">
                <div class="flexCol5 info">
                        <h4 class="centerTag">Info</h4>
                        <ul style="list-style-type: none;">
                            <li id="dev"><b>Developer: </b> Supergiant Games</li>
                            <li id="pub"><b>Publisher: </b> Supergiant Games</li>
                            <li id="rel_date"><b>Release Date: </b> Sep 17, 2020</li>
                            <li id="genres"><b>Genres: </b>Action, Roguelike, Dungeon Crawler</li>
                            <li id="rating"><b>Rating: </b>T</li>
                        </ul>
                </div>
                <div class="flexCol5 info">
                    <h4 class="centerTag">System Requirements</h4>
                    <ul style="list-style-type: none;">
                        <li id="os"><b>OS: </b>Windows 7 SP1</li>
                        <li id="cpu"><b>Processor: </b>Dual Core 2.4 GHz</li>
                        <li id="ram"><b>Memory: </b>4GB RAM</li>
                        <li id="gpu"><b>Graphics: </b>1GB VRAM</li>
                        <li id="storage"><b>Storage: </b>15GB</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}
export default info;