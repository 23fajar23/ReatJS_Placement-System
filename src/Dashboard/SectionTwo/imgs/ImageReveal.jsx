import gsap from "gsap";
import "../imgs/ImgsStyle.css";
import { useEffect, useRef } from "react";
export const ImageReveal = () => {
    const h1 = useRef(null)
    const h2 = useRef(null)
    const h3 = useRef(null)
    const h4 = useRef(null)

    useEffect(() => {
        const elements = [h1,h2,h3,h4];

        elements.forEach((ref) => {
            gsap.fromTo(ref.current, {
                opacity : 0,
                y : 100
            },{
                opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true
            }
            })
        })
    },[])

   

    return (
        <div className="image-container">
        <img ref={h1} 
        id="imgx" width={"100%"} 
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="images"/>
        <img ref={h2} 
        id="imgx" width={"100%"} 
        src="https://images.unsplash.com/photo-1715646527387-2fb6667132fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="images"/>
        <img ref={h3} 
        id="imgx" width={"100%"} 
        src="https://images.unsplash.com/photo-1715077856082-41cfafddbbed?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="images"/>
        <img ref={h4}   
        id="imgx" width={"100%"} 
        src="https://images.unsplash.com/photo-1715145036637-ffa5d164e195?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="images"/>
        </div>
    )
}