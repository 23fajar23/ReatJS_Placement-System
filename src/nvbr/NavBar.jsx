import { IconBrandTeams, IconBuildingSkyscraper, IconHome, IconIdBadge2, IconMessage, IconUsersGroup } from "@tabler/icons-react"
import "../nvbr/Nvb.css";

export const NavBar = () => {
    return (
        <>
        <div className="d-flex justify-content-between px-4 rounded-pill
        nvbr" >
            <div>
                <IconBrandTeams className="icn"/>
            </div>
            <div>
                <IconMessage className="icn"/>
            </div>
            <div>
                <IconBuildingSkyscraper className="icn"/>
            </div>
            <div>
                <IconUsersGroup className="icn"/>
            </div>
            <div>
                <IconIdBadge2 className="icn"/>
            </div>
            <div>
                <IconHome className="icn"/>
            </div>
        </div>
        </>
    )
}