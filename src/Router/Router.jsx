import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Companies } from "../Companies/Companies";
import { Batch } from "../Batch/Batch";
import { Trainees } from "../Trainee/Trainees";
import { TraineDetailsParent } from "../Trainee Details Parent/TraineeDetailsParent";
import { UserSettings } from "../User Settings/UserSettings";
import { Login } from "../Login/Login";
import { Education } from "../Education/Education Main/Education";

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Dashboard/>,
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"companies",
        element:<Companies/>
    },
    {
        path:"batch",
        element:<Batch/>,
    },
    {
        path:"trainees",
        element:<Trainees/>,
    },
    {
        path:"trainees-detail",
        element:<TraineDetailsParent/>
    },
    {
        path:"settings",
        element:<UserSettings/>
    },
    {
        path:"educations",
        element:<Education/>
    }
])

export default Router;