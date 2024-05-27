import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Companies } from "../Companies/Companies";
import { Batch } from "../Batch/Batch";
import { Trainees } from "../Trainee/Trainees";
import { TraineDetailsParent } from "../Trainee Details Parent/TraineeDetailsParent";
import { UserSettings } from "../User Settings/UserSettings";
import { Login } from "../Login/Login";

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Dashboard/>,
        children:[
            {
                path:"companies",
                element:<Companies/>
            },
            {
                path:"batch",
                element:<Batch/>,
                children:[
                    {
                        path:"trainees",
                        element:<Trainees/>,
                        children:[
                            {
                                path:"trainees-detail",
                                element:<TraineDetailsParent/>
                            }
                        ]
                    }
                ]
            },
            {
                path:"settings",
                element:<UserSettings/>
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>
    }
])

export default Router;