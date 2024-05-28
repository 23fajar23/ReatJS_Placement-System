
import axios from "axios";
import { useState } from "react"

export const ModalRemoveBatch = ({open,onClose,batchData}) => {
    const [bname,setbname] = useState('');

    if(!open) return null
    
    const handleSetNameChange = (e) => {
        setbname(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (bname == "") {
            alert("Batch not yet selected");
        }else{
            try{
                const token = localStorage.getItem('token');
    
                await axios.delete(`http://10.10.102.254:8080/api/batch/${bname}`,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
    
                setbname("");
                alert("Success deactive batch");
                onClose();
            } catch (err){
                alert(err);
                console.log(err);
            }
        }
    }

    return(
        <>
            <div className="overlay" style={{fontFamily:'Archivo, sans-serif'}}>
                <div className="modalContainer text-black p-4" >
                    <h2>Remove Batch -</h2>
                        <form className="d-flex modal-input" onSubmit={handleSubmit}>
                            <div className="d-flex flex-column mt-1">
                                <label>Batch Active :</label>
                                <select id="modal-status-dropdown" 
                                    style={{padding:5, borderRadius:5}} value={bname} onChange={handleSetNameChange}>
                                        
                                    <option value="">Select Batch</option>
                                    {batchData
                                        .filter(batch => batch.status !== 'NOT_ACTIVE')
                                        .map((batch) => (
                                            <option value={batch.id}>{batch.name} {batch.region}</option>
                                        ))}
                                </select>
                            </div>

                            <div className="mt-3 d-flex gap-2 justify-content-end">
                                <button className="confirmed-button text-white bg-danger"
                                type="submit"
                                >Deactive</button>
                                <button className="confirmed-button text-white bg-warning"
                                type="button"
                                onClick={onClose}
                                >Cancel</button>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}