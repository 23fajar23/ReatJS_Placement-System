import "../Settings Input/SettingsStyle.css";

export const Settings = () => {
    return (
        <>
        <div style={{width:"100%", gap:10, display:"flex", flexDirection:"column"}}>
            <div id="settings-container">
                <div id="settings-form">
                    <h1 style={{fontSize:40}}>Romanov Vasili Zheyev</h1>
                    <h6 style={{marginTop:10,fontSize:20}}>Chief Technology Officer (CTO)</h6>
                    <p style={{marginTop:10}}>Jl. Topaz no 7 , Tlogomas, Malang, Indonesia. 
                    <br/>1980 / April / 27th - Jakarta</p>
                </div>
            </div>
            <div id="settings-container">
                <div id="settings-form">
                    <h1 style={{fontSize:32}}>GetSpot™</h1>
                    <h3 style={{marginTop:10, fontSize:25}}>Job Placement Application Buddy</h3>
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