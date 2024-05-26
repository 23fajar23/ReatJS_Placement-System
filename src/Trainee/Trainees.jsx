import { NavBar } from "../nvbr/NavBar"
import pic from "../assets/logo.png";
import "../Trainee/TraineesStyle.css";
import { TraineeList } from "./Trainee List/TraineeList";
import { TraineeDetail } from "./Trainee Detail/TraineeDetail";

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
            </div>
        </div>
        </>
    )
}