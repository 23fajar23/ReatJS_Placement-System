import { IconPlus, IconSearch, IconX } from "@tabler/icons-react"
import "../Education Option/EducationOptionBarStyle.css";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ModalAddEducation } from "../ModalEducation/ModalAddEducation";
import { useDispatch } from "react-redux";
import { triggerFetch } from "../../Redux store/reducers/educationSlice";

export const EducationOptionBar = () => {

    const [openModalCreate, setOpenModalCreate] = useState(false);
    const dispatch = useDispatch();   

    const btHv1 = useRef(null);
    const btHv2 = useRef(null);
    const btHv3 = useRef(null);  

    useEffect(()=>{
        setHandle(btHv1.current)
        setHandle(btHv2.current)
        setHandle(btHv3.current)
    },[!openModalCreate])

    const setHandle = (element) => {
        gsap.set(element,{
            backgroundColor : "white",
            color:"#00bfff",
            borderWidth:1,
            borderStyle:"solid",
            borderColor:"#00bfff"
        })
    }

    const handleButtonIn = (element) => {
        gsap.to(element,{
            y: -10,
            backgroundColor : "#00bfff",
            color:"white",
            duration:0.2,
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)"
        })
    }
    const handleButtonOut = (element) => {
        gsap.to(element,{
            y: 0,
            backgroundColor : "white",
            color:"#00bfff",
            borderColor:"#8ce2ff",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            duration:0.4
        })
    }

    const handleModalOpen = () => {
        setOpenModalCreate(true);
        dispatch(triggerFetch());
    }

    return (
        <>
        <div className=" edu-bar">
            <input className="search-bar" type="search" style={{width:'250px',height:'50px',fontSize:'20px'}}></input>
            <button id="option-education" ref={btHv1} onMouseEnter={() => { handleButtonIn(btHv1.current)}} onMouseLeave={() => {handleButtonOut(btHv1.current)}}><IconSearch/></button>
            <button id="option-education" onMouseEnter={() => { handleButtonIn(btHv2.current)}} onMouseLeave={() => {handleButtonOut(btHv2.current)}} ref={btHv2} onClick={handleModalOpen} ><IconPlus/></button>
            <button id="option-education" onMouseEnter={() => { handleButtonIn(btHv3.current)}} onMouseLeave={() => {handleButtonOut(btHv3.current)}} ref={btHv3} ><IconX/></button>
        </div>
        <ModalAddEducation open={openModalCreate} onClose={() => setOpenModalCreate(false)}/>
        </>
    )
}