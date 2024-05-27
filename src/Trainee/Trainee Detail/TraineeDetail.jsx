import { IconAlignLeft, IconDetails, IconEdit } from "@tabler/icons-react";
import "./TraineeDetailStyle.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TraineeDetail = () => {
    const [openModal,setOpenModal] = useState(false);
    return(
        <div className="cx mt-5">
        <div className="container xcntr">
            <div className="insdx gap-5 text-white">
                <div className="d-flex justify-content-between">
                    <h1>Trainee Name :<br/> Matthew Diamonda</h1>
                </div>
                    <ul className="d-flex gap-2 flex-column">
                        <li>Jl. Topaz no 7 , Malang</li>
                        <li>081234567890</li>
                        <li>ozzz@gmail.com</li>
                        <li>batch 2 malang</li>
                        <li>Front-End(FE)</li>
                        <li>BE,FE,Mobile</li>
                </ul>
            </div>
        </div>
        </div>
    )
}