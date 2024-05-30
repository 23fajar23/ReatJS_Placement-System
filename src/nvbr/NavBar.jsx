import { IconBook2, IconBrandTeams, IconBuildingSkyscraper, IconForms, IconHome, IconIdBadge2, IconListNumbers, IconMessage, IconUser, IconUsersGroup } from "@tabler/icons-react"
import "../nvbr/Nvb.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const iconsRefs = useRef([])
    const [indicator,setIndicator] = useState(null);

    const onHover = (index) => {
        gsap.to(iconsRefs.current[index],{
            backgroundColor:"#4cd2ff",
            duration: 0.2,
            borderRadius:5,
            paddingRight:"10px",
        })
        setIndicator(index);
    }
    const offHover = (index) => {
        gsap.to(iconsRefs.current[index],{
            backgroundColor:"#00bfff",
            duration: 0.2,
            paddingRight:0,
        })
        setIndicator(null);
    }

    const labels = [
        "educations",
        "tests",
        "client",
        "batch",
        "trainee",
        "home",
        "settings"
    ]
   

    const icons = [
        <Link to="/educations" style={{textDecoration:"none", color:"white"}}><IconBook2 className="icn"/> <span>{indicator === 0 && labels[0]}</span></Link>,
        <Link to="/test" style={{textDecoration:"none", color:"white"}}><IconListNumbers className="icn"/> <span>{indicator === 1 && labels[1]}</span></Link>,
        <Link to="/companies" style={{textDecoration:"none", color:"white"}}><IconBuildingSkyscraper className="icn"/> <span>{indicator === 2 && labels[2]}</span></Link>,
        <Link to="/batch" style={{textDecoration:"none", color:"white"}}><IconUsersGroup className="icn"/> <span>{indicator === 3 && labels[3]}</span></Link>,
        <Link to="/trainees" style={{textDecoration:"none", color:"white"}}><IconIdBadge2 className="icn"/> <span>{indicator === 4 && labels[4]}</span></Link>,
        <Link to="/" style={{textDecoration:"none", color:"white"}}><IconHome className="icn"/> <span>{indicator === 5 && labels[5]}</span></Link>,
        <Link to="/settings" style={{textDecoration:"none", color:"white"}}><IconUser className="icn"/> <span>{indicator === 6 && labels[6]}</span></Link>
    ]

    return (
        <>
        <div className="d-flex gap-5 justify-content-between px-4 rounded-pill nvbr" >
            {icons.map((icon,index)=>(
                <div key={index} 
                onMouseEnter={() =>{onHover(index)}} 
                onMouseLeave={() => {offHover(index)}} 
                ref={el => (iconsRefs.current[index] = el)}>
                    {icon}
                </div>
            ))}
        </div>
        </>
    )
}