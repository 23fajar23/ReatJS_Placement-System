import {useEffect, useRef, useState} from "react";
import "../Login/LoginStyle.css" 
import { gsap } from "gsap";
import AuthService from "../Service/AuthService.js";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    
    const authService = AuthService();
    const btnRef = useRef(null);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const inputField1 = useRef(null); 
    const inputField2 = useRef(null); 
    const [exr,setExr] = useState(false); 
    
    const redResponse = () => {
        console.log("gsap triggered");
        gsap.to([inputField1.current,inputField2.current],{
            borderBottom:"solid 1px red"
        })
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        const data = {email,password};
        try{
            const res = await authService.login(data);
            console.log(res);
            console.log('data: ',res.data);
            if(res){
                const token = res.data.token;
                console.log(token);
                localStorage.setItem('token',token);
                localStorage.setItem('roles',res.data.role);
                navigate("/");
            }
        } catch (err) {
            console.log(err);
            redResponse();
            setExr(true);
        }
    }

    useEffect(()=>{
        if(sessionStorage.getItem("token") !== null){
            if(authService.validateToken()){
                navigate("/");
            }
        }
    },[AuthService,navigate]);

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
    
    let readEr = "username or password not found";

    return (
        <>
            <div className="login-bg-img ">
                <div className="overlay overlaySetting">
                <div className="mask align-content-center   ">
                    <form className="container-md cn" onSubmit={onSubmit} >
                        <div>
                            <h1 className="Title ">Welcome to GetSpot™<br/> 
                            Login Page</h1>
                        </div>
                        <span style={{color:"red",fontSize:15, fontWeight:"bold"}}>{exr === true && readEr}</span>
                        <div>
                            <input type={"email"} ref={inputField1} className="uname register" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type={"password"} ref={inputField2} className="pwd register" placeholder="Password" value={password} onChange={(p) => setPassword(p.target.value)}
                            />
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
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}