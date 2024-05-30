import { NavBar } from "../nvbr/NavBar"
import pic from "../assets/logo.png";
import "../Dashboard/DashboardStyle.css"
import { SectionOneText } from "./SectionOne/SectionOneText";
import { SectionOne } from "./SectionOne/SectionOne";
import { SectionTwo } from "./SectionTwo/SectionTwo";
import { LinkBtn } from "./LinkBtn/LinkBtn";
import { useState,useEffect } from "react";
import Loading from "../Loading/Loading";

export const Dashboard = () => {

    const [showForm,setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 1000);
    },[])

    return (
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between upx">
                <img src={pic} style={{height:50,width:50,backgroundColor:"white"}}/>
                <NavBar/>
            </div>
            <div>
                {showForm ? 
                <>
                    <div className="d-flex justify-content-between mt-4">
                        <SectionOneText/>
                        <SectionOne/>
                    </div>
                    <div>
                        <LinkBtn/>
                    </div>
                    <div className="mt-5">
                        <SectionTwo/>
                    </div>
                </>
                : <Loading/>}
            </div>
        </div>
        </>
    )
}