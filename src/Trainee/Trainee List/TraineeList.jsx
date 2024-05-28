import { IconPlus, IconSearch, IconTrashFilled,  } from "@tabler/icons-react";
import "./TraineeListStyle.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const TraineeList = () => {
        const btHv1 = useRef(null);
        const btHv2 = useRef(null);
        const btHv3 = useRef(null);

        useEffect(()=>{
            setHandle(btHv1.current)
            setHandle(btHv2.current)
            setHandle(btHv3.current)
        },[])
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

        return (
            <div className="d-flex ssx mt-5" style={{ padding:10}} >
                <div className="search-set d-flex justify-content-between align-content-center">
                    <input type="search" id="search" className="search-bar"/>
                    <div className="px-3 d-flex gap-2">
                        <button ref={btHv1} className="px-3 rounded-3" onMouseEnter={()=>{handleButtonIn(btHv1.current)}} onMouseLeave={()=>{handleButtonOut(btHv1.current)}}><IconSearch className="icnx"/></button>
                        <button ref={btHv2} className="px-3 rounded-3" onMouseEnter={()=>{handleButtonIn(btHv2.current)}} onMouseLeave={()=>{handleButtonOut(btHv2.current)}}><IconPlus className="icnx"/></button>
                        <button ref={btHv3} className="px-3 rounded-3" onMouseEnter={()=>{handleButtonIn(btHv3.current)}} onMouseLeave={()=>{handleButtonOut(btHv3.current)}}><IconTrashFilled className="icnx"/></button>
                    </div>
                </div>
                <div className="scrl my-5">
                        <ul className="mx-2">
                            <li className="comp-list">
                                <div className="insd">                           
                                <span className="cname">Ari sutejo narjo</span>
                                </div>
                                <div className="insd me-3">
                                <span className="batch">Batch 3</span>
                                </div> 
                                <div className="insd me-3">
                                <span className="loc">Jakarta</span>
                                </div>
                            </li>
                            <li className="comp-list">
                                <div className="insd">                           
                                <span className="cname">Jarwo Sutrisna</span>
                                </div>
                                <div className="insd me-3">
                                <span className="batch">Batch 2</span>
                                </div> 
                                <div className="insd me-3">
                                <span className="loc">Malang</span>
                                </div>
                            </li>
                            <li className="comp-list">
                                <div className="insd">                           
                                <span className="cname">Martin Garrix</span>
                                </div>
                                <div className="insd me-3">
                                <span className="batch">Batch 12</span>
                                </div> 
                                <div className="insd me-3">
                                <span className="loc">Surabaya</span>
                                </div>
                            </li>
                            <li className="comp-list">
                                <div className="insd">                           
                                <span className="cname">Ari sutejo narjo</span>
                                </div>
                                <div className="insd me-3">
                                <span className="batch">Batch 3</span>
                                </div> 
                                <div className="insd me-3">
                                <span className="loc">Jakarta</span>
                                </div>
                            </li>
                            <li className="comp-list">
                                <div className="insd">                           
                                <span className="cname">Jarwo Sutrisna</span>
                                </div>
                                <div className="insd me-3">
                                <span className="batch">Batch 2</span>
                                </div> 
                                <div className="insd me-3">
                                <span className="loc">Malang</span>
                                </div>
                            </li>
                            <li className="comp-list">
                                <div className="insd">                           
                                <span className="cname">Martin Garrix</span>
                                </div>
                                <div className="insd me-3">
                                <span className="batch">Batch 12</span>
                                </div> 
                                <div className="insd me-3">
                                <span className="loc">Surabaya</span>
                                </div>
                            </li>
                            <li className="comp-list">
                                <div className="insd">                           
                                <span className="cname">Ari sutejo narjo</span>
                                </div>
                                <div className="insd me-3">
                                <span className="batch">Batch 3</span>
                                </div> 
                                <div className="insd me-3">
                                <span className="loc">Jakarta</span>
                                </div>
                            </li>
                            <li className="comp-list">
                                <div className="insd">                           
                                <span className="cname">Jarwo Sutrisna</span>
                                </div>
                                <div className="insd me-3">
                                <span className="batch">Batch 2</span>
                                </div> 
                                <div className="insd me-3">
                                <span className="loc">Malang</span>
                                </div>
                            </li>
                            <li className="comp-list">
                                <div className="insd">                           
                                <span className="cname">Martin Garrix</span>
                                </div>
                                <div className="insd me-3">
                                <span className="batch">Batch 12</span>
                                </div> 
                                <div className="insd me-3">
                                <span className="loc">Surabaya</span>
                                </div>
                            </li>
                        </ul>        
                </div>
            </div>
        )
    }
