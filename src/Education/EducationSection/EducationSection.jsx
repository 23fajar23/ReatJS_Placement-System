import axios from "axios";
import { useState } from "react"


export const EducationSection = () => {
    const [education,setEducation] = useState('');
    const handleSetEducationChange = (e) => {
        setEducation(e.target.value);
    }

    const handleFetch = async () => {
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get('http://10.10.102.254:8080/api/education/all',{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const fetchedData = response.data.data;
        } catch(err){
            alert(err)
            console.log(err);
        }
    } 


    return (
        <>
        <div>
            
        </div>
        </>
    )
}