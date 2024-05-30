import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { NavBar } from "../nvbr/NavBar";
import { TestForm } from "./Test Form/TestForm";
import Loading from "../Loading/Loading";

export const Test = () => {
    const [showForm,setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 2000);
    },[])
    
    return (
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between upx">
                <img src={logo} height={50} width={50}/>
                <NavBar/> 
            </div>
            <div>
                {showForm ? <TestForm/> : <Loading/> }
            </div>
        </div>
        </>
    )
}