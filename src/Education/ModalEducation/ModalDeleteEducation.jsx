import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { deleteEducationData } from "../../Redux store/reducers/educationSlice";

export const ModalDeleteEducation = ({open,onClose,name}) => {
    const dispatch = useDispatch();
    const [ename,setEname] = useState('');
    if(!open) return null

    const handleDelete = async () => {
        if(ename === name){
            await dispatch(deleteEducationData(name));
            onClose();
        } else {
            alert('Confirmation name does not match');
        }
    }
    

    return(
        <>
            <div className="overlay">
                <div className="modalContainer text-black p-4" >
                    <h2>Please Insert the new desired information</h2>
                        <div className="d-flex modal-input" onSubmit={handleSubmit}>
                            <div className="d-flex flex-column mt-4">
                                <label>enter the new education</label>
                                <input className="mdl-input mt-1" 
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "black",
                                    backgroundColor:'white'
                                }}
                                id="ename"
                                value={ename}
                                onChange={(e) => setEname(e.target.value)}   
                                placeholder="education name"></input>
                            </div>
                            
                            <div className="mt-3 d-flex gap-2 justify-content-end">
                                <button className="confirmed-button text-white bg-success"
                                onClick={handleDelete}
                                >submit</button>
                                <button className="confirmed-button text-white bg-danger"
                                type="button"
                                onClick={onClose}
                                >cancel</button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}