import { IconEdit } from "@tabler/icons-react";
import "../Trainee Info/TraineeInfo.css";
import { useEffect, useState } from "react";
import { ModalComp } from "./ModalTrainee";
import axios from "axios";

export const TraineeInfo = () => {
    const [openModal,setOpenModal] = useState(false);
    const [trainee,setTrainee] = useState([]);
    
    // const traineeDataInfoFetch = (e) => {
    //     e.preventDefault();
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = axios.get('http://api/customer/all',{
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //             setTrainee(response.data.data);
    //             const fetchedTrainee = setTrainee(response.data.data);
    //             const findTrainee = fetchedTrainee.find(x => { x === }) 
    //     } catch (err){
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     traineeDataInfoFetch
    // })

    return(
        <div className="tinfo mt-5">
        <div className="container xcntr">
            <div className="insdx gap-5 text-white">
                <div className="d-flex justify-content-between">
                    <h1>Trainee Name :<br/> Matthew Diamonda</h1>
                    <button style={{
                        border:1,
                        width:45,
                        backgroundColor: "transparent",
                        color: "white"
                    }}
                    onClick={() => { setOpenModal(true)}}
                    >
                        <IconEdit/>
                    </button>

                    <ModalComp open={openModal} onClose={() => setOpenModal(false)}/>

                </div>
                <ul className="d-flex gap-2 flex-column">
                    <li>Jl. Topaz no 7 , Malang</li>
                    <li>081234567890</li>
                    <li>ozzz@gmail.com</li>
                    <li>batch 2 malang</li>
                    <li>Education : -</li>
                </ul>
                
            </div>
        </div>
        </div>
    )
}