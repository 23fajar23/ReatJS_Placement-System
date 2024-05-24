import { NavBar } from "../nvbr/NavBar"
import logo from "../assets/logo.png"
import { Option } from "./Option/Option"
import { Bar } from "./Bar/Bar"

export const Batch = () => {
    return (
        <>
        <div className="cntr p-5">
            <div className="d-flex justify-content-between " style={{ position: "sticky",top:"10px"}}>
                <img src={logo} height={50} width={50}/>
                <NavBar/>
            </div>
            <div className="d-flex">
                <Option/>
                <Bar/>
            </div>
        </div>
        </>
    )
}