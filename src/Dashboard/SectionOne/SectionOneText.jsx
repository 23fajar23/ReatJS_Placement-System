import { useEffect, useRef } from "react";
import "../SectionOne/SecOneStyle.css";
import gsap from "gsap";
export const SectionOneText = () => {

    const getStarted = useRef(null);

    useEffect(()=>{
        gsap.set(getStarted.current,{
            backgroundColor: "#efeff0",
            color:"black",
            duration: 0.3,
            width:"auto",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
        })
    },[])

    const getStartIn = () => {
        gsap.to(getStarted.current, {
            backgroundColor: "#00bfff",
            color:"white",
            duration: 0.3,
            width:140,
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.25)"
        })
    }
    const getStartOut = () => {
        gsap.to(getStarted.current, {
            backgroundColor: "#efeff0",
            color:"black",
            duration: 0.3,
            width:"auto",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
        })
    }

    return (
        <>
        <div className="align-content-center">
            <h1 style={{fontSize:78, fontFamily:"Archivo, sans-serif", fontWeight:"lighter"}}>Book your<br/> <span className="bold-txt">Placement</span> now!</h1>
            <p style={{fontSize:15}}>Try our new features in the last update, with the amount 
                of new stuffs in<br/> we can assure you the management will be 
                the best touch ever
            </p>
            <button ref={getStarted} 
            onMouseEnter={getStartIn} 
            onMouseOut={getStartOut}
            className="btnsec px-4">Get started</button>
        </div>
        </>
    )
} 