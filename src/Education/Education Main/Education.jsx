import { IconArrowUp } from "@tabler/icons-react";
import pic from "../../assets/logo.png";
import { NavBar } from "../../nvbr/NavBar";
import { EducationSection } from "../EducationSection/EducationSection";
import { Link } from "react-router-dom";
import "../../Education/Education Main/EducationStyle.css";
import { EducationOptionBar } from "../Education Option/EducationOptionBar";

export const Education = () => {
    return (
        <>
            <div className="cntr p-5">
                <div className="d-flex justify-content-between upx">
                    <img src={pic} style={{height:50,width:50}}/>
                    <NavBar/>
                </div>
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
                <div>
                    <EducationOptionBar/>
                </div>
            </div>
        </>
    )
}