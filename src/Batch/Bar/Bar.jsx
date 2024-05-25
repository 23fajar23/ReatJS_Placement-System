import { IconPlus, IconTrashFilled } from "@tabler/icons-react";
import "../Bar/Bar.css";

export const Bar = () => {
    return (
        <>
        <div className="d-flex flex-column ms-5 justify-content-center gap-2">
            <div><button className="btn-batch"><IconPlus/></button></div>
            <div><button className="btn-batch"><IconTrashFilled/></button></div>
        </div>
        <div className="batch-container">
            <ul className="d-flex gap-2" >
                <li className="batch-slide">
                    <span>Batch 1</span>
                </li>
                <li className="batch-slide">
                    <span>Batch 2</span>
                </li>
                <li className="batch-slide">
                    <span>Batch 3</span>
                </li>
                <li className="batch-slide">
                    <span>Batch 4</span>
                </li>
                <li className="batch-slide">
                    <span>Batch 5</span>
                </li>
            </ul>
        </div>
        </>
    )
} 