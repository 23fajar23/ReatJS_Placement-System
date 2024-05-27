import { IconBrandTeams, IconBuildingSkyscraper, IconHome, IconIdBadge2, IconMessage, IconUser, IconUsersGroup } from "@tabler/icons-react"
import "../nvbr/Nvb.css";
import { useRef } from "react";
import gsap from "gsap";

export const NavBar = () => {
    const iconsRefs = useRef([])

    const onHover = (index) => {
        gsap.to(iconsRefs.current[index],{
            backgroundColor:"red"
        })
    }
    const offHover = (index) => {
        gsap.to(iconsRefs.current[index],{
            backgroundColor:"white"
        })
    }

    const icons = [
        <IconBrandTeams className="icn"/>,
        <IconMessage className="icn"/>,
        <IconBuildingSkyscraper className="icn"/>,
        <IconUsersGroup className="icn"/>,
        <IconIdBadge2 className="icn"/>,
        <IconHome className="icn"/>,
        <IconUser className="icn"/>
    ]

    return (
        <>
        <div className="d-flex justify-content-between px-4 rounded-pill nvbr" >
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