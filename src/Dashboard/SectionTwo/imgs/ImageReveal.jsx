import gsap from "gsap";
import "../imgs/ImgsStyle.css";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const ImageReveal = () => {
    const h1 = useRef(null)
    const hdesc1 = useRef(null)
    const hdesc2 = useRef(null)
    const hdesc3 = useRef(null)
    const hid1 = useRef(null)
    const hid2 = useRef(null)
    const hid3 = useRef(null)



    useEffect(() => {
                gsap.fromTo(h1.current, {
                        opacity : 0,
                        y : 20
                },{
                    opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                trigger: h1.current,
                start: "top 80%",
                end: "top 0%",
                 toggleActions: "play none none none "
                }
                })
    },[scroll])

    useEffect(()=>{
        setAll(h1.current)
        setHide(hid1.current)
        setHide(hid2.current)
        setHide(hid3.current)
    },[])

    const setAll = (element) => {
        gsap.set(element,{
            height:100
        })
    }

    const setHide = (element) => {
        gsap.set(element,{
            color:"transparent"
        })
    }
    const handleIn = (element) => {
        gsap.to(element, {
            y: -30,
            height:135,
            boxShadow: "0px 10px 8px rgba(0, 0, 0, 0.20)",
        });
    };

    const handleOut = (element) => {
        gsap.to(element, {
            y: 0,
            height:"auto",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        });
    };

    const handleDescIn = (element) => {
        gsap.to(element,{
            color:"black"
        })
    }
    const handleDescOut = (element) => {
        gsap.to(element,{
            color:"transparent"
        })
    }

    return (
        <div className="image-container" ref={h1}>
            <div className="images i1">
                <div className="desc " ref={hdesc1} 
                onMouseEnter={() => { handleIn(hdesc1.current),handleDescIn(hid1.current)}} 
                onMouseLeave={() =>{handleOut(hdesc1.current),handleDescOut(hid1.current)}}>
                    <h1 className="x" style={{fontFamily:"Archivo, sans-serif"}}>Work with your clients</h1>
                    <h5 ref={hid1} className="x" style={{fontFamily:"Archivo, sans-serif"}}>GetSpot will help you manage numerous 
                        clients you have in a single click </h5>
                </div>
            </div>
            <div className="images i2">
                <div className="desc " ref={hdesc2} 
                onMouseEnter={() => { handleIn(hdesc2.current), handleDescIn(hid2.current)}} 
                onMouseLeave={() =>{handleOut(hdesc2.current), handleDescOut(hid2.current)}}>
                    <h1 className="x" style={{fontFamily:"Archivo, sans-serif"}}>Manage your trainees</h1>
                    <h5 ref={hid2} className="x" style={{fontFamily:"Archivo, sans-serif"}}>GetSpot designed to help you manage
                        and help trainee get onboard fast 
                    </h5>
                </div>
            </div>
            <div className="images i3">
                <div className="desc " ref={hdesc3} 
                onMouseEnter={() => { handleIn(hdesc3.current),handleDescIn(hid3.current)}} 
                onMouseLeave={() =>{handleOut(hdesc3.current), handleDescOut(hid3.current)}}>
                    <h1 className="x" style={{fontFamily:"Archivo, sans-serif"}}>Mobile Integrated</h1>
                    <h5 ref={hid3} className="x" style={{fontFamily:"Archivo, sans-serif"}}>Introducing our first operateable
                        mobile application availlable on playstore 
                    </h5>
                </div>
            </div>
            
        </div>
    )
}