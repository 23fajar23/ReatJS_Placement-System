import axios from "axios";
import { useEffect, useState } from "react"
import "../EducationSection/EducationSectionStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducationData } from "../../Redux store/reducers/educationSlice";

export const EducationSection = () => {
    const dispatch = useDispatch();
    const education = useSelector((state) => state.education.data);
    const fetchTrigger = useSelector((state) => state.education.fetchTrigger);

    useEffect(() =>{
        dispatch(fetchEducationData());
    },[dispatch,fetchTrigger]);


    return (
        <>
        <div className="edu-section-container">
                <ul className="d-flex ul-edu">
                    {education.map((edu) => (
                        <li key={edu.id} className="d-flex">
                            <button className="li-edu d-flex justify-content-center pt-3">Education : {edu.name}<br/>Point : {edu.value}</button>
                        </li>
                    ))}
                </ul>
        </div>
        </>
    )
}