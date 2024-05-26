import { NavBar } from "../nvbr/NavBar";
import { Settings } from "./Settings Input/Settings";
import { User } from "./User/User";
import pic from "../assets/logo.png";

export const UserSettings = () => {
    return(
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between upx">
                <img src={pic} style={{height:50,width:50}}/>
                <NavBar/>
            </div>
            <div className="d-flex gap-4 mt-4">
                <User/>
                <Settings/>
            </div>
        </div>
        </>
    )
}