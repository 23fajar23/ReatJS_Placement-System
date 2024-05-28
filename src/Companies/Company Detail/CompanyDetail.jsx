import { IconEdit, IconPencilBolt } from "@tabler/icons-react";
import "../Company Detail/CompanyDetailStyle.css";
import { useState } from "react";
import { ModalCompany } from "./ModalCompany";

export const CompanyDetail = () => {
    const [openModal,setOpenModal] = useState(false);
    return(
        <div className="cx mt-5" style={{fontFamily:'Archivo, sans-serif'}}>
        <div className="container xcntr">
            <div className="insdx gap-5 text-white">
                <div className="d-flex justify-content-between">
                    <h1 style={{fontSize:50}}>Company Name</h1>
                    <button style={{
                        border:0,
                        borderRadius:'10px',
                        backgroundColor: "transparent",
                        color: "white",
                    }}
                    onClick={() => { setOpenModal(true)}}
                    >
                        <IconEdit size={30}/>
                    </button>

                    <ModalCompany open={openModal} onClose={() => setOpenModal(false)}/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}