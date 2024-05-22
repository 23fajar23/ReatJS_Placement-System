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
    const elements = [hdesc1,hdesc2,hdesc3];

    useEffect(() => {
                gsap.fromTo(h1.current, {
                        opacity : 0,
                        y : 20
                },{
                    opacity: 1,
                y: 0,
                duration: 0.8,
                    scrollTrigger: {
                trigger: h1.current,
                start: "top 80%",
                end: "top 0%",
                 toggleActions: "play none none none "
                }
                })
    },[scroll])

    const handleIn = (element) => {
        gsap.to(element, {
            y: -20,
            boxShadow: "0px 10px 8px rgba(0, 0, 0, 0.20)",
        });
    };

    const handleOut = (element) => {
        gsap.to(element, {
            y: 0,
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        });
    };

    return (
        <div className="image-container" ref={h1}>
            <div className="images i1">
                <div className="desc " ref={hdesc1} onMouseEnter={() => { handleIn(hdesc1.current)}} onMouseLeave={() =>{handleOut(hdesc1.current)}}>
                    <h3>Work with your clients</h3>
                    <h5>GetSpot will help you manage numerous 
                        clients you have in a single click </h5>
                </div>
            </div>
            <div className="images i2">
                <div className="desc " ref={hdesc2} onMouseEnter={() => { handleIn(hdesc2.current)}} onMouseLeave={() =>{handleOut(hdesc2.current)}}>
                    <h3>Manage your trainees</h3>
                    <h5>GetSpot designed to help you manage
                        and help trainee get onboard fast 
                    </h5>
                </div>
            </div>
            <div className="images i3">
                <div className="desc " ref={hdesc3} onMouseEnter={() => { handleIn(hdesc3.current)}} onMouseLeave={() =>{handleOut(hdesc3.current)}}>
                    <h3>Mobile Integrated</h3>
                    <h5>Introducing our first operateable
                        mobile application availlable on playstore 
                    </h5>
                </div>
            </div>
            
        </div>
    )
}