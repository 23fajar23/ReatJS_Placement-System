import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Companies } from "../Companies/Companies";
import { Batch } from "../Batch/Batch";
import { Trainees } from "../Trainee/Trainees";
import { TraineDetailsParent } from "../Trainee Details Parent/TraineeDetailsParent";
import { UserSettings } from "../User Settings/UserSettings";

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
])

export default Router;