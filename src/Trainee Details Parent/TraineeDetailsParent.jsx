import { IconArrowDown, IconArrowLeft, IconArrowLeftToArc } from "@tabler/icons-react";
import pic from "../assets/logo.png";
import { NavBar } from "../nvbr/NavBar";
import { TraineeInfo } from "./Trainee Info/TraineeInfo";
import { TraineeTestStage } from "./TraineeTestStage";
import "../Trainee Details Parent/TraineeDetailsParentStyle.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useState,useEffect } from "react";

export const TraineDetailsParent = () => {
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

            <div>
                {showForm ? 
                <>
                    <div className="d-flex gap-2 justify-content-between align-content-center">
                        <Link style={{ alignSelf: "center", textDecoration: "none" }} to="/trainees"><button id="btn-back-trd">
                            <IconArrowLeft size={20}/>
                            </button>
                        </Link>
                        <TraineeInfo/>
                        <TraineeTestStage/>
                    </div>
                    <div style={{minHeight:100}}>
                        <Link style={{alignSelf:'center', textDecoration:'none'}} to="/educations" >
                            <button id="btn-down-trd">
                                <IconArrowDown size={20}/>
                            </button>
                        </Link>
                    </div>
                </>
                : <Loading/>}
            </div>

        </div>
        </>
    )
}