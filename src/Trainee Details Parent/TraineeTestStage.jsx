import { StagePeek } from "./Stage Peek/StagePeek"
import { TestPeek } from "./Test Peek/TestPeek"


export const TraineeTestStage = () => {
    return (
        <>
        <div className="d-flex flex-column gap-2 mt-5" >
            <TestPeek/>
            <StagePeek/>
        </div>
        </>
    )
} 