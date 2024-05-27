import {useEffect, useRef, useState} from "react";
import "../Login/LoginStyle.css" 
import { gsap } from "gsap";
import AuthService from "../Service/AuthService.js";
import { Dashboard } from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const btnRef = useRef(null);
    const navigate = useNavigate;
    const authService = AuthService();
    const onSubmit = async (data) => {
        console.log("test1");
        try{
            const res = await authService.login(data);
            console.log(res);
            useEffect(()=>{
                if(sessionStorage.getItem("token") !== null){
                    if(authService.validateToken()){
                        return (
                            <>
                                <Dashboard/>
                            </>
                        )
                    }
                }
            },[authService,navigate]);
            if(res){
                const token = res.data.data.token;
                localStorage.setItem('token',token);
                localStorage.setItem('roles',res.data.data.role);
                navigate("/")
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        if(sessionStorage.getItem("token") !== null){
            if(authService.validateToken()){
                return (
                    <>
                        <Dashboard/>
                    </>
                )
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
                        <div>
                            <input type={"email"} className="uname register" placeholder="Username" 
                            />
                            <input type={"password"} className="pwd register" placeholder="Password"
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