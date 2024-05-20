import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import "../LinkBtn/LBStyle.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const LinkBtn = () => {
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);

    // const element = [btnRef1,btnRef2];
    // useEffect(() => {
    //     gsap.set(element.current, {
    //         width: "auto",
    //         backgroundColor: "#7fdfff"
    //     });
    // }, []);

    const setBack1 = () => {
        gsap.to(btnRef1.current, {
            backgroundColor: "#7fdfff",
            paddingRight: 0,
        });
    };

    const setBack2 = () => {
        gsap.to(btnRef2.current, {
            backgroundColor:"#7fdfff",
            paddingLeft: 0,
        });
    };
    const slideLeft = () => {
        gsap.to(btnRef1.current, {
            backgroundColor:"white",
            paddingRight: 15,
            duration: 0.3
        });
    };

    const slideRight = () => {
        gsap.to(btnRef2.current, {
            backgroundColor: 'white',
            paddingLeft: 15,
            duration: 0.3
        });
    };


    return (
        <div className="d-flex m-5 justify-content-center">
            <div className="bgbtnx rounded-pill">
                <button className="bttx mx-2" ref={btnRef1} onMouseEnter={slideLeft} onMouseLeave={setBack1}>
                    <IconArrowLeft className="arw" />
                </button>
                <button className="bttx mx-2" ref={btnRef2} onMouseEnter={slideRight} onMouseLeave={setBack2}>
                    <IconArrowRight className=" arw" />
                </button>
            </div>
        </div>
    );
};
