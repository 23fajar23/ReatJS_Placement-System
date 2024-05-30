import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import "../LinkBtn/LBStyle.css";

export const LinkBtn = () => {

    return (
        <div className="lb-container d-flex justify-content-center">
            <div className="d-flex gap-2">
                <button className="bttx1" >
                    <IconArrowLeft className="arw"/>
                </button>
                <button className="bttx2" >
                    <IconArrowRight className=" arw"/>
                </button>
            </div>
        </div>
    );
};
