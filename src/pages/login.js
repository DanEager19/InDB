import React from "react";
function login() {
return (
    <div className="form-group">
        <form action="." method="POST" id="login">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center flex-row">
                    <div className="d-flex flex-column">
                        <div className="form-group p-2">
                            <label htmlFor="username">Username:</label>
                        </div>
                        <div className="form-group p-2">
                            <label htmlFor="password">Password:</label>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="form-group p-2">
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="form-group p-2">
                            <input type="password" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-center p-2">
                    <input type="submit" className="btn btn-secondary" value="Login"/>
                </div>
            </div>
        </form>
    </div>
);
}
export default login;