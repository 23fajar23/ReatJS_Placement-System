import axios from "axios";
import { useEffect, useState } from "react"
import "../EducationSection/EducationSectionStyle.css";

export const EducationSection = () => {
    const [education,setEducation] = useState([]);

    const handleFetch = async () => {
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get('http://10.10.102.254:8080/api/education/all',{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            setEducation(response.data.data);
        } catch(err){
            alert(err)
            console.log(err);
        }
    } 

    useEffect(() =>{
        handleFetch();
    },[]);


    return (
        <>
        <div className="edu-section-container">
                <ul className="d-flex gap-5 ul-edu">
                    {education.map((edu) => (
                        <li key={edu.id}>
                            <button className="li-edu">{edu.name} - {edu.value}</button>
                        </li>
                    ))}
                </ul>
        </div>
        </>
    )
}