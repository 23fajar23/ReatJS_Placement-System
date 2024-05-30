import { NavBar } from "../nvbr/NavBar"
import pic from "../assets/logo.png";
import "../Companies/CompaniesStyle.css";
import { CompanyList } from "./Companies List/CompanyList";
import { CompanyDetail } from "./Company Detail/CompanyDetail";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

export const Companies = () => {
    const [showForm,setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 1500);
    },[])

    return (
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between upx">
                <img src={pic} style={{height:50,width:50}}/>
                <NavBar/>
            </div>
            { showForm ? 
            <div className="d-flex justify-content-between align-content-center">
                <CompanyList/>
                <CompanyDetail/>
            </div>
            :
             <Loading/>}
        </div>
        </>
    )
}