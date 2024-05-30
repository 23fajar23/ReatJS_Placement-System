import { IconPlus, IconSearch, IconTrashFilled } from "@tabler/icons-react";
import "../Companies List/CompanyListStyle.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import { ModalAddCompany } from "../ModalCompany/ModalAddCompany";
import { ModalRemoveCompany } from "../ModalCompany/ModalRemoveCompany";
import Loading from "../../Loading/Loading";

export const CompanyList = () => {
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openModalRemove, setOpenModalRemove] = useState(false);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    const btHv1 = useRef(null);
    const btHv2 = useRef(null);
    const btHv3 = useRef(null);

    const fetchCompanies = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://10.10.102.254:8080/api/company/all', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            setCompanies(response.data.data);
            setLoading(false); // Set loading to false after data is fetched
        } catch (err) {
            console.log(err);
            setLoading(false); // Set loading to false in case of error
        }
    };

    useEffect(() => {
        fetchCompanies();
        setHandle(btHv1.current);
        setHandle(btHv2.current);
        setHandle(btHv3.current);
    }, [openModalCreate, openModalRemove]);

    const setHandle = (element) => {
        gsap.set(element, {
            backgroundColor: "white",
            color: "#00bfff",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#00bfff"
        });
    };

    const handleButtonIn = (element) => {
        gsap.to(element, {
            y: -10,
            backgroundColor: "#00bfff",
            color: "white",
            duration: 0.2,
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)"
        });
    };

    const handleButtonOut = (element) => {
        gsap.to(element, {
            y: 0,
            backgroundColor: "white",
            color: "#00bfff",
            borderColor: "#8ce2ff",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            duration: 0.4
        });
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + '...';
        }
        return text;
    };

    return (
        <>
            <div className="d-flex ssx mt-5">
                <div className="search-set d-flex justify-content-between align-content-center">
                    <input type="search" id="search" className="search-bar" />
                    <div className="px-3 d-flex gap-2">
                        <button ref={btHv1} className="px-3 rounded-3" onMouseEnter={() => { handleButtonIn(btHv1.current) }} onMouseLeave={() => { handleButtonOut(btHv1.current) }} ><IconSearch className="icnx" /></button>
                        <button ref={btHv2} className="px-3 rounded-3" onMouseEnter={() => { handleButtonIn(btHv2.current) }} onMouseLeave={() => { handleButtonOut(btHv2.current) }} onClick={() => { setOpenModalCreate(true) }}><IconPlus className="icnx" /></button>
                        <button ref={btHv3} className="px-3 rounded-3" onMouseEnter={() => { handleButtonIn(btHv3.current) }} onMouseLeave={() => { handleButtonOut(btHv3.current) }} onClick={() => { setOpenModalRemove(true) }}><IconTrashFilled className="icnx" /></button>
                    </div>
                </div>
                <div className="scrl my-5">
                    {loading ? <Loading /> :
                        <ul>
                            {companies.map((company) => (
                                <li key={company.id} className="company-list">
                                    <div className="insd">
                                        <span className="cname">{truncateText(company.name, 15)}</span>
                                    </div>
                                    <div className="insd">
                                        <span className="loc">{truncateText(company.address, 20)}</span>
                                    </div>
                                    <div className="insd">
                                        <span className="status">{company.status}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
            <ModalAddCompany open={openModalCreate} onClose={() => { setOpenModalCreate(false) }} />
            <ModalRemoveCompany open={openModalRemove} onClose={() => { setOpenModalRemove(false) }} />
        </>
    );
}
