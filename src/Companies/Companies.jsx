import { NavBar } from "../nvbr/NavBar"
import pic from "../assets/logo.png";
import "../Companies/CompaniesStyle.css";
import { CompanyList } from "./Companies List/CompanyList";

export const Companies = () => {
    return (
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between upx">
                <img src={pic} style={{height:50,width:50}}/>
                <NavBar/>
            </div>
            <div className="d-flex justify-content-between">
                <CompanyList/>
                
            </div>
        </div>
        </>
    )
}