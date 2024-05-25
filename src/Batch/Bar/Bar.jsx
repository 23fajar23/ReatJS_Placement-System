import { IconPlus, IconTrashFilled } from "@tabler/icons-react";
import "../Bar/Bar.css";
import { useRef,useEffect } from "react";
import gsap from "gsap";

export const Bar = () => {

    const addBtn = useRef(null);
    const rmvBtn = useRef(null);

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
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)"
        })
    }

    const outHvr = (element) => {
        gsap.to(element,{
            x:0,
            color:"#00bfff",
            backgroundColor:"white",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
        })
    }
    return (
        <>
        <div className="d-flex flex-column ms-5 justify-content-center gap-2">
            <div onMouseEnter={() => {inHvr(addBtn.current)}} onMouseLeave={() => {outHvr(addBtn.current)}}><button className="btn-batch ms-5" ref={addBtn}><IconPlus/></button></div>
            <div onMouseEnter={() => {inHvr(rmvBtn.current)}} onMouseLeave={() => {outHvr(rmvBtn.current)}}><button className="btn-batch ms-5" ref={rmvBtn}><IconTrashFilled/></button></div>
        </div>
        <div className="batch-container">
            <ul className="d-flex gap-2" >
                <li className="batch-slide">
                    <span>Batch 1</span>
                </li>
                <li className="batch-slide">
                    <span>Batch 2</span>
                </li>
                <li className="batch-slide">
                    <span>Batch 3</span>
                </li>
                <li className="batch-slide">
                    <span>Batch 4</span>
                </li>
                <li className="batch-slide">
                    <span>Batch 5</span>
                </li>
            </ul>
        </div>
        </>
    )
} 