import { useEffect, useReducer, useRef } from "react";
import "../Option/Option.css";
import gsap from "gsap";

export const Option = () => {

    const bar1 = useRef(null);
    const bar2 = useRef(null);
    const bar3 = useRef(null);

    useEffect(()=>{
        gsap.set([bar1.current,bar2.current,bar3.current],{
            width:0
        })
    },[])

    const onHover = (el) => {
        gsap.to(el,{
            width:"80%",
            duration:0.3
        })
    }
    const offHover = (el) => {
        gsap.to(el,{
            width:0,
            duration:0.3
        })
    }

    return (
        <>
        <div className="d-flex flex-column mt-5 justify-content-center gap-5 ">
            <div>
                <h3 className="loc-w" 
                onMouseEnter={() => { onHover(bar1.current)}}
                onMouseLeave={() => { offHover(bar1.current)}}
                >Jakarta</h3>
                <div className="bg-dark under-bar" style={{height:2}} ref={bar1}></div>
            </div>
            <div >
                <h3 className="loc-w"
                onMouseEnter={() => { onHover(bar2.current)}}
                onMouseLeave={() => { offHover(bar2.current)}}
                >Malang</h3>
                <div className="bg-dark under-bar" style={{height: 2}} ref={bar2}></div>
            </div>
            <div >
                <h3 className="loc-w"
                onMouseEnter={() => { onHover(bar3.current)}}
                onMouseLeave={() => { offHover(bar3.current)}}
                >Surabaya</h3>
                <div className="bg-dark under-bar" style={{height: 2}} ref={bar3}></div>
            </div>
        </div>
        </>
    )
}