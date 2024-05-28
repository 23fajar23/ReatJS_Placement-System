import Lottie from "lottie-react"
import animation from "../assets/LoadingAnimation.json";

export const Loading = (params) => {
    return (
        <>
        <Lottie animationData={animation}/>
        </>
    )
}