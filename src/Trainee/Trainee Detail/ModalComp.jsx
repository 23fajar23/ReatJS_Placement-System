import "./ModalStyle.css";
export const ModalComp = ({open,onClose}) => {
    if(!open) return null
   
    return(
        <>
            <div className="overlay">
                <div className="modalContainer text-black p-4">
                    <h2>Please Insert the new desired information</h2>
                        <div className="d-flex modal-input">
                            <div className="d-flex flex-column mt-4">
                                <label>enter the new name</label>
                                <input className="mdl-input mt-1" 
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "#bebebe"
                                }}
                                placeholder="name"></input>
                            </div>

                            <div className="d-flex flex-column mt-1">
                                <label>enter the new address</label>
                                <input className="mdl-input"
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "#bebebe"
                                }}
                                placeholder="address"></input>
                            </div>

                            <div className="d-flex flex-column mt-1">
                                <label>enter the new phone number</label>
                                <input className="mdl-input" 
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "#bebebe"
                                }}
                                placeholder="phone number"></input>
                            </div>

                            <div className="d-flex flex-column mt-1">
                                <label>enter the new status</label>
                                <input className="mdl-input"
                                style={{
                                    borderStyle:"solid",
                                    borderWidth:1,
                                    borderColor: "#bebebe"
                                }}
                                placeholder="status"></input>
                            </div>

                            <div className="mt-3 d-flex gap-2 justify-content-end">
                                <button className="confirmed-button text-white bg-success"
                                onClick={onClose}
                                >submit</button>
                                <button className="confirmed-button text-white bg-danger"
                                onClick={onClose}
                                >cancel</button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}