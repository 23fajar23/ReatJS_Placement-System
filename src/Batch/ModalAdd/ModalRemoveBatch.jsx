
import axios from "axios";
import { useState } from "react"

export const ModalRemoveBatch = ({open,onClose}) => {
    const [bname,setbname] = useState('');
    const [bregion,setbregion] = useState('');

    if(!open) return null
    
    const handleSetNameChange = (e) => {
        setbname(e.target.value);
    }

    const handleSetRegionChange = (e) => {
        setbregion(e.target.value);
    }


    const handleSubmit = async (e) => {
        console.log('bname',bname);
        console.log('bregion',bregion);
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get('http://10.10.102.254:8080/api/batch/all',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response.data);
            const fetchedBatches = response.data.data;
            const batchToDelete = fetchedBatches.find(batch => batch.name === bname);

            if(batchToDelete){
                await axios.delete(`http://10.10.102.254:8080/api/batch/${batchToDelete.id}`,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log('deleted batch : ', batchToDelete);
                setbname("");
                onClose();
            } else {
                console.log('batch not found');
                alert('batch not found');
            }

        } catch (err){
            alert(err);
            console.log(err);
        }
    }

    return(
        <>
            <div className="overlay" style={{fontFamily:'Archivo, sans-serif'}}>
                <div className="modalContainer text-black p-4" >
                    <h2>Please Insert the batch that will be removed</h2>
                        <form className="d-flex modal-input" onSubmit={handleSubmit}>
                            <div className="d-flex flex-column mt-4">
                                <label>enter the batch name</label>
                                <input className="mdl-input mt-1" 
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "black",
                                    backgroundColor:'white',
                                }}
                                id="btname"
                                value={bname}
                                onChange={handleSetNameChange}
                                placeholder="name"></input>
                            </div>

                            <div className="d-flex flex-column mt-1">
                                <label>enter the region</label>
                                <select id="modal-status-dropdown" 
                                style={{padding:5, borderRadius:5}} onChange={handleSetRegionChange}>
                                    <option value="">Please choose region</option>
                                    <option value={bregion}>JAKARTA</option>
                                    <option value={bregion}>MALANG</option>
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