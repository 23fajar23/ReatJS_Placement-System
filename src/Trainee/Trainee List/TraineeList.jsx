import { IconPlus, IconSearch, IconTrashFilled } from "@tabler/icons-react";
import "./TraineeListStyle.css";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import axios from "axios";
import { Loading } from "../../Loading/Loading";

export const TraineeList = () => {
    const [trainees, setTrainees] = useState([]);

    const btHv1 = useRef(null);
    const btHv2 = useRef(null);
    const btHv3 = useRef(null);

    useEffect(() => {
        fetchTrainee();
        [btHv1, btHv2, btHv3].forEach(ref => setHandle(ref.current));
    }, []);

    const fetchTrainee = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://10.10.102.254:8080/api/customer/all', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            setTrainees(response.data.data);
        } catch (error) {
            console.error('Error fetching:', error);
        }
    }

    const setHandle = (element) => {
        gsap.set(element, {
            backgroundColor: "white",
            color: "#00bfff",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#00bfff"
        });
    }

    const handleButtonIn = useCallback((element) => {
        gsap.to(element, {
            y: -10,
            backgroundColor: "#00bfff",
            color: "white",
            duration: 0.2,
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)"
        });
    }, []);

    const handleButtonOut = useCallback((element) => {
        gsap.to(element, {
            y: 0,
            backgroundColor: "white",
            color: "#00bfff",
            borderColor: "#8ce2ff",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            duration: 0.4
        });
    }, []);

    return (
        <div className="d-flex ssx mt-5" style={{ padding: 10 }}>
            <div className="search-set d-flex justify-content-between align-content-center">
                <input type="search" id="search" className="search-bar" />
                <div className="px-3 d-flex gap-2">
                    <button ref={btHv1} className="px-3 rounded-3" onMouseEnter={() => handleButtonIn(btHv1.current)} onMouseLeave={() => handleButtonOut(btHv1.current)}><IconSearch className="icnx" /></button>
                    <button ref={btHv2} className="px-3 rounded-3" onMouseEnter={() => handleButtonIn(btHv2.current)} onMouseLeave={() => handleButtonOut(btHv2.current)}><IconPlus className="icnx" /></button>
                    <button ref={btHv3} className="px-3 rounded-3" onMouseEnter={() => handleButtonIn(btHv3.current)} onMouseLeave={() => handleButtonOut(btHv3.current)}><IconTrashFilled className="icnx" /></button>
                </div>
            </div>
            <div className="scrl my-5">
                {trainees.length === 0 ? (
                    <Loading />
                ) : (
                    <ul className="mx-2">
                        {trainees.map((trainee) => (
                            <li key={trainee.id} className="company-list">
                                <div className="insd">
                                    <span className="cname">{trainee.name}</span>
                                </div>
                                <div className="insd">
                                    <span className="batch">{trainee.batch.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
