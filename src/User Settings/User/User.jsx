import { useEffect, useRef } from "react";
import "../User/UserStyle.css";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {  IconBaselineDensityMedium, IconBaselineDensitySmall, IconEdit, IconLogout2, IconViewfinder } from "@tabler/icons-react";


export const User = () => {
    const usrbtn1 = useRef(null);
    const usrbtn2 = useRef(null);
    const usrbtn3 = useRef(null);

    useEffect(() => {
        gsap.set([
            usrbtn1.current,
            usrbtn2.current,
            usrbtn3.current
        ],{
            border: "solid #000000 1px",
            backgroundColor:"white",
        })
    },[])

    const risedBtn = (elm) => {
        gsap.to(elm,{
            height:"10vh",
            background:"linear-gradient(to right, #00bfff, #1c6de7)",
            border: "solid #000000 1px",
            color:"white",
            duration:0.3
        })
    }

    const backBtn = (elm) => {
        gsap.to(elm,{
            height:'auto',
            background:"white",
            color:"black",
            duration:0.3
        })
    }

    return (
        <>
        <div id="user-container">
            <div id="picture"> 
                <img id="avatar" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user profile"/>
            </div>
            <div className="user-desc d-flex flex-column justify-content-center align-items-center gap-2">
                <h3>Romanov Vasili Zheyev</h3>

                <button id="option-user" ref={usrbtn1}
                onMouseEnter={() => {risedBtn(usrbtn1.current)}}
                onMouseLeave={() => {backBtn(usrbtn1.current)}}>Display Current</button>

                <button id="option-user" ref={usrbtn2}
                onMouseEnter={() => {risedBtn(usrbtn2.current)}}
                onMouseLeave={()  => {backBtn(usrbtn2.current)}}>Edit Preference</button>

                <Link to="/login" id="link-option-user" >
                <button id="option-user" ref={usrbtn3} 
                onMouseEnter={() => {risedBtn(usrbtn3.current)}}
                onMouseLeave={()  => {backBtn(usrbtn3.current)}}>Log Out</button></Link>
            </div>
        </div>
        </>
    )
} 