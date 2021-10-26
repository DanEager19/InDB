const login = (
    <div class="form-group">
        <form action="." method="POST" id="login">
            <div class="d-flex flex-column">
                <div class="d-flex justify-content-center flex-row">
                    <div class="d-flex flex-column">
                        <div class="form-group p-2">
                            <label for="username">Username:</label>
                        </div>
                        <div class="form-group p-2">
                            <label for="password">Password:</label>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="form-group p-2">
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div class="form-group p-2">
                            <input type="password" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <div class="form-group d-flex justify-content-center p-2">
                    <input type="submit" class="btn btn-secondary" value="Login"/>
                </div>
            </div>
        </form>
    </div>
  )
  const add_entry = (
    <form action="/" method="POST" id="login">
        <div class="d-flex flex-column">
            <div class="d-flex justify-content-center flex-row">
                <div class="d-flex flex-column">
                    <div class=" p-2">
                        <label for="title">Title:</label>
                    </div>
                    <div class="p-2">
                        <label for="summary">Summary:</label>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="p-2">
                        <input type="text" id="title" placeholder="Title" name="title"/>
                    </div>
                    <div class="p-2">
                        <textarea id="summary" rows="5" cols="20" name="summary"></textarea>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center flex-row">
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column">
                        <div class="p-2">
                            <label for="dev">Developer:</label>
                        </div>
                        <div class="p-2">
                            <label for="pub">Publisher:</label>
                        </div>
                        <div class="p-2">
                            <label for="date">Release Date:</label>
                        </div>
                        <div class="p-2">
                            <label for="title">Genres:</label>
                        </div>
                        <div class="p-2">
                            <label for="title">Rating:</label>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="p-2">
                            <input type="text" id="dev" placeholder="Developer" name="dev"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="pub" placeholder="Publisher" name="pub"/> 
                        </div>
                        <div class="p-2">
                            <input type="date" id="date" name="date"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="genres" placeholder="Genres" name="genres"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="rating" placeholder="Rating" name="rating"/>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-column">
                            <div class="p-2">
                                <label for="os">OS:</label>
                            </div>
                            <div class="p-2">
                                <label for="cpu">Processor:</label>
                            </div>
                            <div class="p-2">
                                <label for="ram">Memory:</label>
                            </div>
                            <div class="p-2">
                                <label for="gpu">Graphics:</label>
                            </div>
                            <div class="p-2">
                                <label for="storage">Storage:</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="p-2">
                            <input type="text" id="os" placeholder="OS" name="os"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="cpu" placeholder="Processor" name="cpu"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="ram" placeholder="Memory" name="ram"/>
                        </div>                                
                        <div class="p-2">
                            <input type="text" id="gpu" placeholder="Graphics" name="gpu"/>
                        </div>
                        <div class="p-2">                         
                            <input type="text" id="storage" placeholder="Storage" name="storage"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
  )
  const list = (
    <div class="flexWrap">
        <div class="flexCol1 usr">
            <img src="/images/pfp.png"/>
            <h5>User</h5>
        </div>
        <div class="flexCol2">
            <ul style="list-style-type: none;">
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
  )
  const info = (
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
  )
  
  