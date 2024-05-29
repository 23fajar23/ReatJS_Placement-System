import axios from "axios";
import { useState } from "react"

export const ModalAddEducation = ({open,onClose}) => {
    const [ename,setEname] = useState('');
    const [evalue,setEvalue] = useState('');
    if(!open) return null
    
    const handleSetNameChange = (e) => {
        setEname(e.target.value);
    }

    const handleSetValueChange = (e) => {
        setEvalue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            axios.post('http://10.10.102.254:8080/api/education',{
                name:ename,
                value:evalue,
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response.data.data);
                setEname("");
                setEvalue("");
                onClose();
            })
            .catch((err) => {
                console.log(err);
            })
        } catch(err){
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
                                onChange={handleSetNameChange}   
                                placeholder="education name"></input>
                            </div>

                            <div className="d-flex flex-column mt-1">
                                <label>enter the new point value</label>
                                <input className="mdl-input mt-1" 
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "black",
                                    backgroundColor:'white'
                                }}
                                id="evalue"
                                value={evalue}
                                onChange={handleSetValueChange}   
                                placeholder="education point value"></input>
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