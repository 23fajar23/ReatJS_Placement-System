    import { IconPlus, IconSearch, IconTrashFilled,  } from "@tabler/icons-react";
import "../Companies List/CompanyListStyle.css";

    export const CompanyList = () => {
        return (
            <div className="d-flex ssx" >
            <div className="search-set d-flex justify-content-between align-content-center">
                <input type="search" id="search" className="search-bar"/>
                <div className="px-3 d-flex gap-2">
                    <button className="btn-cntrl rounded-3"><IconSearch className="icnx"/></button>
                    <button className="btn-cntrl rounded-3"><IconPlus className="icnx"/></button>
                    <button className="btn-cntrl rounded-3"><IconTrashFilled className="icnx"/></button>
                </div>
            </div>
            <div className="scrl my-5">
                    <ul className="mx-2">
                        <li>
                            <div className="insd">                           
                            <span className="cname">BCA Digital</span>
                            </div>
                            <div className="insd">
                            <span className="loc">Jakarta</span>
                            </div>
                            <div className="insd">
                            <span className="email">luis@gmail.com</span>
                            </div>  
                        </li>
                        <li>
                            
                            <div className="insd">                           
                            <span className="cname">Jatis</span>
                            </div>
                            <div className="insd">
                            <span className="loc">Jakarta</span>
                            </div>
                            <div className="insd">
                            <span className="email">luis@gmail.com</span>
                            </div>  
                        </li>
                        <li>
                            
                            <div className="insd">                           
                            <span className="cname">Indivara</span>
                            </div>
                            <div className="insd">
                            <span className="loc">Jakarta</span>
                            </div>
                            <div className="insd">
                            <span className="email">luis@gmail.com</span>
                            </div>  
                        </li>
                        <li>
                            
                            <div className="insd">                           
                            <span className="cname">ILCS</span>
                            </div>
                            <div className="insd">
                            <span className="loc">Jakarta</span>
                            </div>
                            <div className="insd">
                            <span className="email">luis@gmail.com</span>
                            </div>  
                        </li>
                        <li>
                            
                            <div className="insd">                           
                            <span className="cname">BCA Digital</span>
                            </div>
                            <div className="insd">
                            <span className="loc">Jakarta</span>
                            </div>
                            <div className="insd">
                            <span className="email">luis@gmail.com</span>
                            </div>  
                        </li>
                        <li>
                            
                            <div className="insd">                           
                            <span className="cname">Jatis</span>
                            </div>
                            <div className="insd">
                            <span className="loc">Jakarta</span>
                            </div>
                            <div className="insd">
                            <span className="email">luis@gmail.com</span>
                            </div>  
                        </li>
                        <li>
                            
                            <div className="insd">                           
                            <span className="cname">Indivara</span>
                            </div>
                            <div className="insd">
                            <span className="loc">Jakarta</span>
                            </div>
                            <div className="insd">
                            <span className="email">luis@gmail.com</span>
                            </div>  
                        </li>
                        <li>
                            
                            <div className="insd">                           
                            <span className="cname">ILCS</span>
                            </div>
                            <div className="insd">
                            <span className="loc">Jakarta</span>
                            </div>
                            <div className="insd">
                            <span className="email">luis@gmail.com</span>
                            </div>  
                        </li>
                    </ul>        
            </div>
            </div>
        )
    }
