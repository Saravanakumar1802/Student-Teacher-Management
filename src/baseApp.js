import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({ children }) {
    const history = useHistory()
    return (
        <div>
            <div className="nav">
                <span >
                    <button className="nav-btn main-btn1" onClick={() => history.push("/student")}>Student</button>
                    <button className="nav-btn main-btn2" onClick={() => history.push("/teacher")}>Teacher</button>
                </span>

            </div>
            <div className="content">
                {children}
            </div>
            <div className="footer">
                <h4>copyrights@2023</h4>
            </div>
        </div>
    )
}