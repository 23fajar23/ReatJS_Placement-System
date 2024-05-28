import { useRef } from "react"
import "../Stage Peek/StagePeek.css"

export const StagePeek = () => {
    
    return (
        <>
        <div className="sp-container">
            <div style={{color:"white"}}>
                <h1>Stage Information</h1>
                <h5>Information about stages</h5>
            </div>
            <div>
                <button id="btn-test-stage">more details</button>
            </div>
        </div>
        </>
    )
}