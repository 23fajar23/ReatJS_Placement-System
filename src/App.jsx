import { Batch } from './Batch/Batch'
import { Companies } from './Companies/Companies'
import { Dashboard } from './Dashboard/Dashboard'
import { Login } from './Login/Login'
import { Trainees } from './Trainee/Trainees'
import { UserSettings } from './User Settings/UserSettings'

function App() {

  return (
    <div style={{fontFamily:"Archivo, sans-serif"}}>
      {/* <Login/> */}
      {/* <Dashboard/> */}
      {/* <Companies/> */}
      {/* <Batch/> */}
      {/* <UserSettings/> */}
      <Trainees/>
    </div>
  )
}

export default App
