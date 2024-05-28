import { IconPlus, IconTrashFilled } from "@tabler/icons-react";
import "../Bar/Bar.css";
import { useRef,useEffect,useState } from "react";
import gsap from "gsap";
import { ModalBatch } from "../ModalAdd/ModalBatch";

export const Bar = () => {
    const [openModal,setOpenModal] = useState(false);
    const addBtn = useRef(null);
    const rmvBtn = useRef(null);
    const [name,setname] = useState('');
    const [status,setstatus] = useState('');

    const handleName = (bname) => {
        setname(bname);
    }
    const handleStatus = (bstatus) => {
        setname(bstatus);
    }

    useEffect(()=>{
        gsap.set(addBtn.current, {
            x: 0,
            color:"#00bfff",
            backgroundColor:"white",
            borderWidth:1,
                borderStyle:"solid",
                borderColor:"#00bfff"
        })
        gsap.set(rmvBtn.current, {
            x: 0,
            color:"#00bfff",
            backgroundColor:"white",
            borderWidth:1,
                borderStyle:"solid",
                borderColor:"#00bfff"
        })
    },[])

    const inHvr = (element) => {
        gsap.to(element,{
            x:10,
            color:"white",
            backgroundColor:"#00bfff",
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
            duration:0.3
        })
    }

    const outHvr = (element) => {
        gsap.to(element,{
            x:0,
            color:"#00bfff",
            backgroundColor:"white",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            duration:0.3
        })
    }



    return (
        <>
        <div className="d-flex flex-column ms-5 justify-content-center gap-2">
            <div onMouseEnter={() => {inHvr(addBtn.current)}} onMouseLeave={() => {outHvr(addBtn.current)}}><button className="btn-batch ms-5" ref={addBtn} onClick={() => {setOpenModal(true)}}><IconPlus/></button></div>
            <div onMouseEnter={() => {inHvr(rmvBtn.current)}} onMouseLeave={() => {outHvr(rmvBtn.current)}}><button className="btn-batch ms-5" ref={rmvBtn}><IconTrashFilled/></button></div>
        </div>
        <div className="batch-container">
            <ul className="d-flex gap-2" >
                <li className="batch-slide">
                    <span>{name}</span>
                    <span>{status}</span>
                </li>
            </ul>
        </div>
        <ModalBatch name={name} status={status} open={openModal} onClose={() => {setOpenModal(false)}} />
        </>
    )
} 