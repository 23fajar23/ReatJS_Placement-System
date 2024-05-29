import pic from "../../assets/logo.png";
import { NavBar } from "../../nvbr/NavBar";
import { EducationSection } from "../EducationSection/EducationSection";

export const Education = () => {
    return (
        <>
            <div className="cntr p-5">
                <div className="d-flex justify-content-between upx">
                    <img src={pic} style={{height:50,width:50}}/>
                    <NavBar/>
                </div>
                <div className="bg-primary">
                    <EducationSection/>
                </div>
            </div>
        </>
    )
}