import {useRef} from "react";
import "../Login/LoginStyle.css" 
import { gsap } from "gsap";

export const Login = () => {

    const btnRef = useRef(null);
 
    const positionHandlerIn = () => {
            gsap.to(btnRef.current, {
                backgroundColor : "#00bfff",
                color: "white",
                x: 5,
                duration : 0.3
            });
    }

    const positionHandlerOut = () => {
            gsap.to(btnRef.current, {
                backgroundColor:"white",
                color: "black",
                x : 0,
                duration : 0.3
            })
    }
    

    return (
        <>
        <div className="login-bg-img ">
            <div className="mask align-content-center   ">
                <div className="container-md cn">
                    <div>
                        <h1 className="Title ">Welcome to GetSpot™<br/> 
                        Login Page</h1>
                    </div>
                    <div>
                        <input type="text" className="uname register" placeholder="Username"></input>
                        <input type="password" className="pwd register" placeholder="Password"></input>
                    </div>
                    <div className="d-flex gap-5 mt-3">
                        <button 
                        onMouseEnter={positionHandlerIn} 
                        onMouseLeave={positionHandlerOut}
                        className="loginbtn" 
                        ref={btnRef}
                        style={{ 
                            backgroundColor:"white",
                                 color: "black",
                                 fontSize:15,
                                 marginTop:20
                        }}
                        >Login</button>
                        <h5 className="frgt">forgot password? contact us</h5>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}