import { IconArrowUp } from "@tabler/icons-react";
import pic from "../../assets/logo.png";
import { NavBar } from "../../nvbr/NavBar";
import { EducationSection } from "../EducationSection/EducationSection";
import { Link } from "react-router-dom";
import "../../Education/Education Main/EducationStyle.css";

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
                    <EducationSection/>
                </div>
            </div>
        </>
    )
}