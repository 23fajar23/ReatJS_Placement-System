import { IconPlus, IconTrashFilled } from "@tabler/icons-react";
import "../Bar/Bar.css";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ModalBatch } from "../ModalAdd/ModalBatch";
import axios from "axios";
import { ModalRemoveBatch } from "../ModalAdd/ModalRemoveBatch";
import { ModalUpdateBatch } from "../ModalAdd/ModalUpdateBatch";

export const Bar = () => {
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openModalRemove, setOpenModalRemove] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [selectedBatch, setSelectedBatch] = useState(null);
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
    }, [!openModalRemove, !openModalCreate, !openModalUpdate])

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

    const handleBatchClick = (batch) => {
        setSelectedBatch(batch);
        console.log(batch);
        setOpenModalUpdate(true);
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
        <li key={batch.id} className="batch-slide d-flex flex-column gap-5" onClick={() => handleBatchClick(batch)}>
            {batch.region === 'JAKARTA' && (
                <img 
                    width={200} 
                    className="rounded-4 pixs" 
                    src="https://images.unsplash.com/photo-1600846309541-420e33acda4e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="jakarta"
                />
            )}
            {batch.region === 'MALANG' && (
                <img 
                    width={200} 
                    className="rounded-4 pixs" 
                    src="https://images.unsplash.com/photo-1695898137720-35a6352a4514?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="malang"
                />
            )}
            {batch.region === 'ONLINE' && (
                <img 
                    width={150}
                    className="rounded-4 pixs" 
                    src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="online learning"
                />
            )}
            <div className="d-flex gap-5">
                <span>{batch.name}</span>
                <span>{batch.status}</span>
            </div>
            <div>
                {batch.region === 'JAKARTA' && (
                    <>
                    <h1 style={{textAlign:"center", fontFamily:'Archivo, sans-serif', fontSize:40}}>JAKARTA</h1>
                    </>
                )}
                {batch.region === 'MALANG' && (
                    <>
                    <h1 style={{textAlign:"center",fontFamily:'Archivo, sans-serif', fontSize:40}}>MALANG</h1>
                    </>
                )}
                {batch.region === 'ONLINE' && (
                    <>
                    <h1 style={{textAlign:"center",fontFamily:'Archivo, sans-serif', fontSize:40}}>ONLINE</h1>
                    </>
                )}
            </div>
        </li>
    ))
}

                    {batches
                        .filter(batch => batch.status === 'NOT_ACTIVE')
                        .map((batch) => (
                            <li key={batch.id} className="batch-slide d-flex gap-5" onClick={() => handleBatchClick(batch)}>
                                    <span>{batch.name}</span>
                                    <span>{batch.status}</span>
                                    <span>{batch.region}</span>
                            </li>
                        ))}
                </ul>
            </div>
            <ModalBatch open={openModalCreate} onClose={() => { setOpenModalCreate(false) }} />
            <ModalRemoveBatch open={openModalRemove} onClose={() => { setOpenModalRemove(false) }} batchData={batches}/>
            <ModalUpdateBatch open={openModalUpdate} onClose={() => { setOpenModalUpdate(false) }} batchData={selectedBatch} />
        </>
    )
}
