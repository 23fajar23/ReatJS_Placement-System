import logo from "../assets/logo.png";
import { NavBar } from "../nvbr/NavBar";
import { TestForm } from "./Test Form/TestForm";

export const Test = () => {
    return (
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between upx">
                <img src={logo} height={50} width={50}/>
                <NavBar/> 
            </div>
            <div>
                <TestForm/>
            </div>
        </div>
        </>
    )
}