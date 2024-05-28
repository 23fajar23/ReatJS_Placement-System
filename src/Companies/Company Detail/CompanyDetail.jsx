import { IconEdit, IconPencilBolt } from "@tabler/icons-react";
import "../Company Detail/CompanyDetailStyle.css";
import { useState } from "react";
import { ModalCompany } from "./ModalCompany";

export const CompanyDetail = () => {
    const [openModal,setOpenModal] = useState(false);
    return(
        <div className="cx mt-5">
        <div className="container xcntr">
            <div className="insdx gap-5 text-white">
                <div className="d-flex justify-content-between">
                    <h1>Company Name</h1>
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

                    <ModalCompany open={openModal} onClose={() => setOpenModal(false)}/>

                </div>
                <h6>Company address</h6>
                <h6>Company phone number</h6>
                <h6>Company status</h6>
            </div>
        </div>
        </div>
    )
}