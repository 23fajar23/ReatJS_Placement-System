import "../Settings Input/SettingsStyle.css";

export const Settings = () => {
    return (
        <>
        <div style={{width:"100%", gap:10, display:"flex", flexDirection:"column"}}>
            <div id="settings-container">
                <div id="settings-form">
                    <h1>Romanov Vasili Zheyev</h1>
                    <h6 style={{marginTop:10}}>Chief Technology Operations (CTO)</h6>
                    <p style={{marginTop:10}}>Jl. Topaz no 7 , Tlogomas, Malang, Indonesia. 
                    <br/>1980 / April / 27th - Jakarta</p>
                </div>
            </div>
            <div id="settings-container">
                <div id="settings-form">
                    <h1>GetSpot™</h1>
                    <h6 style={{marginTop:10}}>Job Placement Application Buddy</h6>
                    <p style={{marginTop:10}}>is a comprehensive platform designed 
                    to streamline and optimize the HR processes within an organization.
                    It provides a user-friendly interface and robust features to manage 
                    employee information, recruitment, performance, payroll, and more.</p>
                </div>
            </div>
        </div>
        </>
    )
}