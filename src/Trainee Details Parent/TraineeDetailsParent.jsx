import { IconArrowLeft, IconArrowLeftToArc } from "@tabler/icons-react";
import pic from "../assets/logo.png";
import { NavBar } from "../nvbr/NavBar";
import { TraineeInfo } from "./Trainee Info/TraineeInfo";
import { TraineeTestStage } from "./TraineeTestStage";
import "../Trainee Details Parent/TraineeDetailsParentStyle.css";
import { Link } from "react-router-dom";

export const TraineDetailsParent = () => {
    return (
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between upx">
                <img src={pic} style={{height:50,width:50}}/>
                <NavBar/>
            </div>
            <div className="d-flex gap-2 justify-content-between align-content-center">
                <Link style={{ alignSelf: "center", textDecoration: "none" }} to="/trainees"><button id="btn-back-trd">
                    <IconArrowLeft size={45}/>
                    </button>
                </Link>
                <TraineeInfo/>
                <TraineeTestStage/>
            </div>
        </div>
        </>
    )
}