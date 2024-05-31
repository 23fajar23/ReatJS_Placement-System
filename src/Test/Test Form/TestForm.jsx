import { useEffect, useState } from "react";
import "../Test Form/TestFormStyle.css";
import axios from "axios";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

export const TestForm = () => {

    //validation schema
    const testFormSchema = z.object({
        placement: z.string().nonempty("Placement is required"),
        note: z.string().nonempty("Note is required"),
        rolePlacement: z.string().nonempty("Role Placement is required"),
        company: z.string().nonempty("Company is required"),
        education: z.string().nonempty("Education is required"),
        testStatus: z.string().nonempty("Test Status is required"),
        nameStage: z.string().nonempty("Name Stage is required"),
        dateTime: z.string().nonempty("Date Time is required"),
        quotaAvaillable: z.number().min(1, "Quota Available must be at least 1"),
        stageStatus: z.string().nonempty("Stage Status is required"),
        typeStage: z.string().nonempty("Stage Type is required"),
        typeQuota: z.string().nonempty("Quota Type is required"),
    });

    

    const notify = () => toast.success("New Test is made!");
    
    //fetching
    const [companyId,setCompanyId] = useState([]);
    const [educationId,setEducationId] = useState([]);
    const [batchId,setBatchId] = useState([]);
    
    //post
    const [testStatus,setTestStatus] = useState('');
    const [education,setEducation] = useState('');
    const [batch,setBatch] = useState('');
    const [quotaBatch, setQuotaBatch] = useState("");
    const [placement,setPlacement] = useState('');
    const [note,setNote] = useState('');
    const [company,setCompany] = useState('');
    const [rolePlacement,setRolePlacement] = useState('');
    const [nameStage,setNameStage] = useState('');
    const [dateTime,setDateTime] = useState('');
    const [typeStage,setTypeStage] = useState('');
    const [stageStatus,setStageStatus] = useState('');
    const [quotaAvaillable,setQuotaAvaillable] = useState('');
    const [typeQuota,setTypeQuota] = useState('');

    //batch addition
    const [addBatchSelection,setAddBatchSelection] = useState([]);
    const [counter,setCounter] = useState(0);

    const handleSetTestStatus = (e) => {
        setTestStatus(e.target.value)
    }

    const handleSetBatch = (e) => {
        setBatch(e.target.value);
    }

    const handleSetEducation = (e) => {
        setEducation(e.target.value)
    }

    const handleSetTypeQuota = (e) => {
        setTypeQuota(e.target.value)
    }
    const handleSetQuotaAvailable = (e) => {
        setQuotaAvaillable(e.target.value)
    }
    const handleSetStageStatus = (e) => {
        setStageStatus(e.target.value)
    }
    const handleSetTypeStage = (e) => {
        setTypeStage(e.target.value)
    }
    const handleSetDateTime = (e) => {  
        const inputDate = new Date(e.target.value);
        const currentDate = new Date();
        
        currentDate.setHours(0,0,0,0);

        if(inputDate < currentDate){
            toast.warn('Date cannot be set before the current date')
        } else {
            setDateTime(e.target.value)
        }
    }
    const handleSetRolePlacement = (e) => {
        setRolePlacement(e.target.value)
    }
    const handleSetNote = (e) => {
        setNote(e.target.value)
    };
    const handleSetNameStage = (e) => {
        setNameStage(e.target.value)
    }
    const handleSetPlacement = (e) => {
        setPlacement(e.target.value)
    };
    const handleAddBatchSelection = () => {
        setCounter(counter + 1);
        setAddBatchSelection([...addBatchSelection, { id: '', number: 0 }]);
    };
    const handleRemoveBatchSelection = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            setAddBatchSelection(addBatchSelection.slice(0, -1));
        }
    };
    const handleSetQuotaBatch = (e) => {
        setQuotaBatch(e.target.value)
    } 
    const handleSetCompany = (e) => {
        setCompany(e.target.value)
    }

    const handlePost = async (e) => {
        e.preventDefault();

        try {
            testFormSchema.parse({
                placement,
                note,
                rolePlacement,
                company,
                education,
                testStatus,
                nameStage,
                dateTime,
                quotaAvaillable: parseInt(quotaAvaillable),
                stageStatus,
                typeStage,
                typeQuota
            });
        } catch (err) {
            toast.error(err);
            console.log(err);
        }


        try {
            const token = localStorage.getItem('token');
            await axios.post('http://10.10.102.254:8080/api/placement',{
                placement:placement,
                note:note,
                companyId:company,
                educationId:education,
                rolePlacement:rolePlacement,
                nameStage:nameStage,
                dateTime:dateTime,
                typeStage:typeStage,
                totalQuota:quotaAvaillable,
                stageStatus:stageStatus,
                quotaAvailable:quotaAvaillable,
                typeQuota:typeQuota
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response);
                notify();
                setTestStatus('');
                setEducation('');
                setBatch('');
                setQuotaBatch('');
                setPlacement('');
                setNote('');
                setCompany('');
                setRolePlacement('');
                setNameStage('');
                setDateTime('');
                setTypeStage('');
                setStageStatus('');
                setQuotaAvaillable('');
                setTypeQuota('');
            })
            .catch(error => {
                console.log(error);
                // toast.error("Error fetching data!")
            })
        } catch(err){
            console.log(err);
        } 
    }

    const handleFetch = async () => {
        try {
            const token = localStorage.getItem('token');
            const fetchEducation = await axios.get('http://10.10.102.254:8080/api/education/all',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            const fetchCompany = await axios.get('http://10.10.102.254:8080/api/company/all',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            const fetchBatch = await axios.get('http://10.10.102.254:8080/api/batch/all',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            
            setEducationId(fetchEducation.data.data);
            setCompanyId(fetchCompany.data.data);
            setBatchId(fetchBatch.data.data);

        } catch (err) {
            console.log(err);}
            // toast.error("Error fetching data!")
        }

    useEffect(() => {
        handleFetch();
    },[])

    

    return (
        <div style={{fontFamily:"Archivo, sans-serif"}}className="test-form-container container ">
            <h1 style={{fontSize:80 ,marginTop:50}}>Test Placement Form</h1>
            <h4 style={{fontSize:23,marginBottom:40}}>Manage your test in just a few clicks!</h4>
            <ToastContainer/>
            <form className="form-groups" id="form" onSubmit={handlePost}>
                <div className="form-column">
                    <label className="form-label" htmlFor="placement">Placement:</label>
                    <input type="text" id="placement" name="placement" className="form-input" 
                    onChange={handleSetPlacement} value={placement} placeholder="placement location"
                    required />

                    <label className="form-label" htmlFor="note">Note:</label>
                    <input type="text" id="note" name="note" className="form-input" 
                    onChange={handleSetNote} value={note} placeholder="test note"
                    required/>
                    
                    <label className="form-label" htmlFor="rolePlacement">Role Placement:</label>
                    <input type="text" id="rolePlacement" name="rolePlacement" className="form-input" 
                    onChange={handleSetRolePlacement} value={rolePlacement} placeholder="team role"
                    required/>
                    
                    <label className="form-label" htmlFor="companyId">Company Name:</label>
                    <select id="companyId" name="companyId" className="form-input" 
                    onChange={handleSetCompany} value={company} 
                    required>
                        <option value="">-- select area --</option>
                        {companyId.map((comp) => (
                            <option value={comp.id}>{comp.name}</option>
                        ))}
                    </select>
                    
                    <label className="form-label" htmlFor="educationId">Education Requirement:</label>
                    <select id="educationId" name="educationId" className="form-input" 
                    onChange={handleSetEducation} value={education}
                    required>
                        <option value="">-- select area --</option>
                        {educationId.map((edu) => (
                            <option value={edu.id}>{edu.name} {edu.value}</option>
                        )) }
                    </select>
                    
                    <label className="form-label" htmlFor="statusTest">Test Status:</label>
                    <select id="statusTest" name="statusTest" className="form-input" 
                    onChange={handleSetTestStatus} value={testStatus}
                    required>
                        <option value="">-- select area --</option>
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="NOT_ACTIVE">NOT_ACTIVE</option>
                    </select>

                </div>

                <div className="form-column">
                    <label className="form-label" htmlFor="nameStage">Name Stage:</label>
                    <input type="text" id="nameStage" name="nameStage" className="form-input" 
                        onChange={handleSetNameStage} value={nameStage} placeholder="*EX : STAGE 1"
                    required/>
                    
                    <label className="form-label" htmlFor="dateTime">Date Time: </label>
                    <input type="date"  id="dateTime" name="dateTime" className="form-input" 
                        onChange={handleSetDateTime} value={dateTime} placeholder="yyyy-mm-dd "
                    required/>
                    
                    <label className="form-label" htmlFor="quotaAvaillable">Quota Available:</label>
                    <input type="number" id="quotaAvaillable" name="quotaAvaillable" className="form-input" 
                        onChange={handleSetQuotaAvailable} value={quotaAvaillable} placeholder="*EX : 8" style={{paddingLeft:10}}
                    required/>
                    
                    <label className="form-label" htmlFor="stageStatus">Stage Status:</label>
                    <select id="stageStatus" name="stageStatus" className="form-input" 
                        onChange={handleSetStageStatus} value={stageStatus}
                    required>
                        <option value="">-- select area --</option>
                        <option value="FINISHED">FINISHED</option>
                        <option value="COMING_SOON">COMING_SOON</option>
                    </select>
                    
                    <label className="form-label" htmlFor="typeStage">Stage Type:</label>
                    <select  id="typeStage" name="typeStage" className="form-input" 
                        onChange={handleSetTypeStage} value={typeStage}
                    required>
                    <option value="">-- select area --</option>
                        <option value="INTERVIEW">INTERVIEW</option>
                        <option value="QUESTION">QUESTION</option>
                        <option value="MINI_PROJECT">MINI_PROJECT</option>
                    </select>

                    <label className="form-label" htmlFor="typeQuota">Quota Type:</label>
                    <select id="typeQuota" name="typeQuota" className="form-input"
                    onChange={handleSetTypeQuota} value={typeQuota} 
                    required>
                        <option value="">-- select area --</option>
                        <option value="ALL">ALL</option>
                        <option value="BATCH">BATCH</option>  
                    </select>
                    
                        {quotaBatch === 'BATCH' ? 
                        (<>
                            <button onClick={handleAddBatchSelection} id="add-batch-selection" className="rounded-4 me-3 mb-3 mt-3 btn" style={{backgroundColor:'#00bfff', color:"white"}}><IconPlus size={15}/></button>
                            <button onClick={handleRemoveBatchSelection} id="add-batch-selection" className="rounded-4 me-3 mb-3 mt-3 btn" style={{backgroundColor:'#00bfff', color:"white"}}><IconMinus size={15}/></button>
                                <label className="form-label" htmlFor="typeStage">Quota Availlable Batch</label>
                                <br/>

                                    {counter > 0 && addBatchSelection.map((bt, index) => (
                                        <div key={index} className="batch-selection">
                                            <label className="form-label" htmlFor={`batchSelection${index}`}>Quota Available Batch:</label>
                                            <select id={`batchSelection${index}`} name={`batchSelection${index}`} className="form-input" value={bt.id} onChange={(e) => {
                                                const updatedSelection = [...addBatchSelection];
                                                updatedSelection[index].id = e.target.value;
                                                setAddBatchSelection(updatedSelection);
                                            }}>
                                                <option value="">-- select area --</option>
                                                {batchId.map(btch => (
                                                    <option value={btch.id}>{btch.name} {btch.region}</option>
                                                ))}
                                            </select>
                                            <input type="number" min='0' className="form-num-input" value={bt.number} onChange={(e) => {
                                                const updatedSelection = [...addBatchSelection];
                                                updatedSelection[index].number = e.target.value;
                                                setAddBatchSelection(updatedSelection);
                                            }} />
                                        </div>
                                    ))}
                        </>) : null}
                    <button id="button-form-submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};
