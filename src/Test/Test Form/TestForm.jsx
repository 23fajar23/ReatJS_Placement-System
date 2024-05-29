import { useState } from "react";
import "../Test Form/TestFormStyle.css";

export const TestForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{fontFamily:"Archivo, sans-serif"}}className="test-form-container container ">
            <h1 style={{fontSize:80, marginBottom:20,marginTop:20}}>Test Page</h1>
            <form className="form-groups" id="form" onSubmit={handleSubmit}>
                <div className="form-column">
                    <label htmlFor="placement">Placement:</label>
                    <input type="text" id="placement" name="placement" />
                    
                    <label htmlFor="note">Note:</label>
                    <input type="text" id="note" name="note" />
                    
                    <label htmlFor="rolePlacement">Role Placement:</label>
                    <input type="text" id="rolePlacement" name="rolePlacement" />
                    
                    <label htmlFor="companyId">Company ID:</label>
                    <select id="companyId" name="companyId"></select>
                    
                    <label htmlFor="educationId">Education ID:</label>
                    <select id="educationId" name="educationId"></select>
                    
                    <label htmlFor="statusTest">Status Test:</label>
                    <input type="text" id="statusTest" name="statusTest" />
                    
                    <label htmlFor="typeQuota">Type Quota:</label>
                    <input type="text" id="typeQuota" name="typeQuota" />
                </div>

                <div className="form-column">
                    <label htmlFor="nameStage">Name Stage:</label>
                    <input type="text" id="nameStage" name="nameStage" />
                    
                    <label htmlFor="dateTime">Date Time:</label>
                    <input type="text" id="dateTime" name="dateTime" />
                    
                    <label htmlFor="stageStatus">Stage Status:</label>
                    <input type="text" id="stageStatus" name="stageStatus" />
                    
                    <label htmlFor="typeStage">Type Stage:</label>
                    <input type="text" id="typeStage" name="typeStage" />
                    
                    <label htmlFor="totalQuota">Total Quota:</label>
                    <input type="text" id="totalQuota" name="totalQuota" />
                    
                    <label htmlFor="quotaAvaillable">Quota Available:</label>
                    <input type="text" id="quotaAvaillable" name="quotaAvaillable" />
                    
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};
