import axios from "axios";
import { useState } from "react"

export const ModalAddCompany = ({open,onClose}) => {
    const [cname,setCname] = useState('');
    const [caddress,setCaddress] = useState('');
    const [cnumber,setCnumber] = useState('');
    const [cstatus,setCstatus] = useState('');
    if(!open) return null
    
    const handleSetNameChange = (e) => {
        setCname(e.target.value);
    }

    const handleSetAddressChange = (e) => {
        setCaddress(e.target.value);
    }

    const handleSetNumberChange = (e) => {
        setCnumber(e.target.value);
    }

    const handleSetStatusChange = (e) => {
        setCstatus(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            axios.post('http://10.10.102.254:8080/api/company',{
                name:cname,
                address:caddress,
                mobilePhone:cnumber,
                status:cstatus,
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response.data.data);
                setCname("");
                setCaddress("");
                setCnumber("");
                setCstatus("");
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
                                <label>enter the new company name</label>
                                <input className="mdl-input mt-1" 
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "black",
                                    backgroundColor:'white'
                                }}
                                id="cname"
                                value={cname}
                                onChange={handleSetNameChange}   
                                placeholder="name"></input>
                            </div>

                            <div className="d-flex flex-column mt-1">
                                <label>enter the new address</label>
                                <input className="mdl-input mt-1" 
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "black",
                                    backgroundColor:'white'
                                }}
                                id="caddress"
                                value={caddress}
                                onChange={handleSetAddressChange}   
                                placeholder="address"></input>
                            </div>

                            <div className="d-flex flex-column mt-1">
                                <label>enter the new mobile phone</label>
                                <input className="mdl-input mt-1" 
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "black",
                                    backgroundColor:'white'
                                }}
                                id="cnumber"
                                value={cnumber}
                                onChange={handleSetNumberChange}   
                                placeholder="mobile phone number"></input>
                            </div>


                            <div className="d-flex flex-column mt-1">
                                <label>enter the new status</label>
                                <select id="modal-status-dropdown" value={cstatus}
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