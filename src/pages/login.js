import React from "react";
const login = () => {
return (
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
);
}
export default login;