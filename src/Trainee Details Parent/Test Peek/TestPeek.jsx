import "../Test Peek/TestPeek.css";
export const TestPeek = () => {
    return(
        <>
        <div className="tp-container">
            <div style={{color:"white"}}>
                <h1>Test Info</h1>
                <h5>information about the test</h5>
            </div>
            <div>
                <button id="btn-test-stage">more details</button>
            </div>
        </div>
        </>
    )
}