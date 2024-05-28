import { IconPlus, IconTrashFilled } from "@tabler/icons-react";
import "../Bar/Bar.css";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ModalBatch } from "../ModalAdd/ModalBatch";
import axios from "axios";
import { ModalRemoveBatch } from "../ModalAdd/ModalRemoveBatch";

export const Bar = () => {
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openModalRemove, setOpenModalRemove] = useState(false);
    const addBtn = useRef(null);
    const rmvBtn = useRef(null);
    const [batches, setBatches] = useState([]);

    const fetchBatch = () => {
        try {
            const token = localStorage.getItem('token');
            axios.get('http://10.10.102.254:8080/api/batch/all', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    setBatches(response.data.data);
                })
                .catch(error => {
                    console.log('[ERROR] Fetch -> ', error);
                })
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        gsap.set(addBtn.current, {
            x: 0,
            color: "#00bfff",
            backgroundColor: "white",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#00bfff"
        })

        gsap.set(rmvBtn.current, {
            x: 0,
            color: "#00bfff",
            backgroundColor: "white",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#00bfff"
        })

        fetchBatch();
    }, [!openModalRemove, !openModalCreate])

    const inHvr = (element) => {
        gsap.to(element, {
            x: 15,
            color: "white",
            backgroundColor: "#00bfff",
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
            duration: 0.3
        })
    }

    const outHvr = (element) => {
        gsap.to(element, {
            x: 0,
            color: "#00bfff",
            backgroundColor: "white",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            duration: 0.3
        })
    }

    return (
        <>
            <div className="d-flex flex-column ms-5 justify-content-center gap-2">
                <div onMouseEnter={() => { inHvr(addBtn.current) }} onMouseLeave={() => { outHvr(addBtn.current) }}><button className="btn-batch ms-5" ref={addBtn} onClick={() => { setOpenModalCreate(true) }}><IconPlus /></button></div>
                <div onMouseEnter={() => { inHvr(rmvBtn.current) }} onMouseLeave={() => { outHvr(rmvBtn.current) }}><button className="btn-batch ms-5" ref={rmvBtn} onClick={() => { setOpenModalRemove(true) }}><IconTrashFilled /></button></div>
            </div>
            <div className="batch-container">
                <ul className="d-flex gap-2" >
                    {batches
                        .filter(batch => batch.status !== 'NOT_ACTIVE')
                        .map((batch) => (
                            <li key={batch.id} className="batch-slide d-flex gap-5">
                                    <span>{batch.name}</span>
                                    <span>{batch.status}</span>
                                    <span>{batch.region}</span>
                            </li>
                        ))}
                </ul>
            </div>
            <ModalBatch open={openModalCreate} onClose={() => { setOpenModalCreate(false) }} />
            <ModalRemoveBatch open={openModalRemove} onClose={() => { setOpenModalRemove(false) }} />
        </>
    )
}
