import { IconArrowUp } from "@tabler/icons-react";
import pic from "../../assets/logo.png";
import { NavBar } from "../../nvbr/NavBar";
import { EducationSection } from "../EducationSection/EducationSection";
import { Link } from "react-router-dom";
import "../../Education/Education Main/EducationStyle.css";
import { EducationOptionBar } from "../Education Option/EducationOptionBar";
import Loading from "../../Loading/Loading";
import { useState,useEffect } from "react";

export const Education = () => {
    const [showForm,setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 1500);
    },[])

    return (
        <>
            <div className="cntr p-5">
                <div className="d-flex justify-content-between align-items-center upx">
                    <img src={pic} style={{height:50,width:50,backgroundColor:"white"}}/>
                    <NavBar/>
                </div>
                {showForm ? <>
                    <div>
                        <Link style={{textDecoration:'none'}} to="/trainees-detail" >
                            <button id="btn-up-trd">
                                <IconArrowUp size={25}/>
                            </button>
                        </Link>
                        <div>
                            <h1 style={{fontFamily:"Archivo, sans-serif",fontSize:"150px"}} className="pt-3">Educations</h1>
                            <p style={{fontFamily:"Archivo, sans-serif",fontSize:"18px"}} >Educational sections provide a snapshot of academic background, degrees, institutions, and achievements</p>
                        </div>
                        <EducationSection />
                    </div>
                    <div className="mt-5">
                        <EducationOptionBar/>
                    </div>
                </> : <Loading/> }
            </div>
        </>
    )
}