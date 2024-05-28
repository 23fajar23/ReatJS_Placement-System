import axios from "axios";
import { useState } from "react"

export const ModalBatch = ({open,onClose}) => {
    const [bname,setbname] = useState('');
    const [bregion,setbregion] = useState('');
    const [bstatus,setstatus] = useState('');
    if(!open) return null
    
    const handleSetNameChange = (e) => {
        setbname(e.target.value);
    }

    const handleSetRegionChange = (e) => {
        setbregion(e.target.value);
    }

    const handleSetStatusChange = (e) => {
        setstatus(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log('bname:', bname);
        console.log('bregion:', bregion);
        console.log('bstatus:', bstatus);
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            axios.post('http://10.10.102.254:8080/api/batch',{
                name:bname,
                region:bregion,
                status:bstatus,
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response);
                setbname("");
                onClose();
            })
            .catch((err) => {
                console.log(err);
            })
        } catch (err){
            alert(err);
            console.log(err);
        }
    }

    return(
        <>
            <div className="overlay">
                <div className="modalContainer text-black p-4" >
                    <h2>Please Insert the new desired information</h2>
                        <form className="d-flex modal-input" onSubmit={handleSubmit}>
                            <div className="d-flex flex-column mt-4">
                                <label>enter the new batch name</label>
                                <input className="mdl-input mt-1" 
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "black",
                                    backgroundColor:'white'
                                }}
                                id="btname"
                                value={bname}
                                onChange={handleSetNameChange}   
                                placeholder="name"></input>
                            </div>

                            <div className="d-flex flex-column mt-1">
                                <label>enter the new region</label>
                                <select id="modal-status-dropdown" 
                                style={{padding:5, borderRadius:5,borderWidth:1}} onChange={handleSetRegionChange}>
                                    <option value="">Please choose region</option>
                                    <option value="JAKARTA">JAKARTA</option>
                                    <option value="MALANG">MALANG</option>
                                    <option value="ONLINE">ONLINE</option>
                                </select>
                            </div>

                            <div className="d-flex flex-column mt-1">
                                <label>enter the new status</label>
                                <select id="modal-status-dropdown" 
                                style={{padding:5, borderRadius:5}} onChange={handleSetStatusChange}>
                                    <option value="">Please choose status</option>
                                    <option value="ACTIVE">ACTIVE</option>
                                    <option value="NOT_ACTIVE">NOT_ACTIVE</option>
                                </select>
                            </div>

                            <div className="mt-3 d-flex gap-2 justify-content-end">
                                <button className="confirmed-button text-white bg-success"
                                type="submit"
                                >submit</button>
                                <button className="confirmed-button text-white bg-danger"
                                type="button"
                                onClick={onClose}
                                >cancel</button>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}