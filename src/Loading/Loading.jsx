import Lottie from "lottie-react";
import animation from "../assets/blockload.json";

export const Loading = (params) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: 300, height: 300 }}>
                <Lottie animationData={animation} style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
    );
}

export default Loading;
