import { NavBar } from "../nvbr/NavBar"
import pic from "../assets/logo.png";
import "./TraineesStyle.css";
import { TraineeList } from "./Trainee List/TraineeList";
import { TraineeDetail } from "./Trainee Detail/TraineeDetail";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const Trainees = () => {
    return (
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between upx">
                <img src={pic} style={{height:50,width:50}}/>
                <NavBar/>
            </div>
            <div className="d-flex justify-content-between align-content-center">
                <TraineeList/>
                <TraineeDetail/>
                <Link to="/trainees-detail" >
                    <button id="btn-go-trd">
                        <IconArrowRight size={45}/>
                    </button>
                </Link>
            </div>
        </div>
        </>
    )
}