import axios from "axios";
import { useState } from "react"

export const ModalRemoveCompany = ({open,onClose}) => {
    const [cname,setCname] = useState('');
    const [caddress,setCaddress] = useState('');
    if(!open) return null
    
    const handleSetNameChange = (e) => {
        setCname(e.target.value);
    }

    const handleSetAddressChange = (e) => {
        setCaddress(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get('http://10.10.102.254:8080/api/company/all',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                console.log(response.data.data);
                const fetchedData = response.data.data;
                const companyToDelete = fetchedData.find(x =>  x.name === cname && x.address === caddress);

                if(companyToDelete){
                    try {
                        axios.delete(`http://10.10.102.254:8080/api/company/${companyToDelete.id}`,{
                            headers:{
                                'Content-Type':'application/json',
                                'Authorization':`Bearer ${token}`
                            }
                        })
                        console.log('company to delete: ', companyToDelete);
                        setCname('');
                        onClose();
                    } catch(err){
                        console.log(err);
                    }
                }
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