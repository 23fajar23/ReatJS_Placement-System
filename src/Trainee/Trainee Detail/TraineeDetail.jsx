import { IconEdit } from "@tabler/icons-react";
import "./TraineeDetailStyle.css";
import { useState } from "react";
import { ModalComp } from "./ModalComp";

export const TraineeDetail = () => {
    const [openModal,setOpenModal] = useState(false);
    return(
        <div className="cx mt-5">
        <div className="container xcntr">
            <div className="insdx gap-5 text-white">
                <div className="d-flex justify-content-between">
                    <h1>Trainee Name</h1>
                    <button style={{
                        border:1,
                        width:45,
                        backgroundColor: "transparent",
                        color: "white"
                    }}
                    onClick={() => { setOpenModal(true)}}
                    >
                        <IconEdit/>
                    </button>

                    <ModalComp open={openModal} onClose={() => setOpenModal(false)}/>

                </div>
                <h6>Trainee address</h6>
                <h6>Trainee phone number</h6>
                <h6>Trainee status</h6>
            </div>
        </div>
        </div>
    )
}