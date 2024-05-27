import pic from "../assets/logo.png";
import { NavBar } from "../nvbr/NavBar";
import { TraineeInfo } from "./Trainee Info/TraineeInfo";
import { TraineeTestStage } from "./TraineeTestStage";

export const TraineDetailsParent = () => {
    return (
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between upx">
                <img src={pic} style={{height:50,width:50}}/>
                <NavBar/>
            </div>
            <div className="d-flex gap-2 justify-content-between align-content-center">
                <TraineeInfo/>
                <TraineeTestStage/>
            </div>
        </div>
        </>
    )
}